const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/User');

const router = express.Router();

const JWT_SECRET = 'your_jwt_secret';

//setup for noemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
    },
});

//sign up route
router.post('/signup', async (req, res) => {
    console.log('Request body:', req.body);
    const {name, email, password, confirmPassword} = req.body;

    if(password !== confirmPassword){
        return res.status(400).json({message: 'Passwords do not match'});
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
    
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
      } 
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//Login route
router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message: 'Invalid credentials'});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({message: 'Invalid credentials'});
    }
    const token=jwt.sign({id: user._id}, JWT_SECRET,{expiresIn: '1H'});
    res.status(200).json({message: 'Login Successful', token});
});

//route for forgot password
router.post('/forgot-password', async (req, res) => {
    console.log('Starting forgot-password route');
    const {email} = req.body;

    const user = await User.findOne({email});
    console.log('User found:', user);

    if(!user){
        return res.status(400).json({message: 'User not found'});
    }

    const resetToken=jwt.sign({id: user._id}, JWT_SECRET,{expiresIn: '15m'});
    user.resetToken = resetToken;
    user.resetTokenExpiry= Date.now() + 15*60*1000; 
    await user.save();

    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;
  try {
    await transporter.sendMail({
      to: user.email,
      subject: 'Password Reset',
      text: `Click here to reset your password: ${resetLink}`,
    });
    console.log('Reset email sent successfully');
    res.status(200).json({ message: 'Password reset link sent to your email' });
  } 
  catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

//reset pw route
router.post('/reset-password', async (req, res) => {
    const {token, newPassword} = req.body;

    try{
        const decoded=jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({_id: decoded.id, resetToken: token, resetTokenExpiry: {$gt: Date.now()}});

        if(!user){
            return res.status(400).json({message: 'Token invalid or expired'});
        }

        user.password=await bcrypt.hash(newPassword, 10);
        user.resetToken=null;
        user.resetTokenExpiry=null;
        await user.save();

        res.status(200).json({message: 'Password reset successfully'});
    }
    catch(error){
        res.status(400).json({message: 'Error resetting password', error});
    }
});

module.exports=router;