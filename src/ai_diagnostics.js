import React, { useState } from 'react';
import './App.css'; // You can create your CSS file here or use inline styles
import logo from './logo.jpg';

const responses = {
    "What are the symptoms of diabetes?": "Symptoms can include excessive thirst, frequent urination, and fatigue.",
    "hello?":"Hi how may I help you",
    "How can I manage hypertension?": "Management often includes diet changes, exercise, and medication.",
    "What are the signs of a heart attack?": "Signs can include chest pain, shortness of breath, and nausea.",
    "How can I cope with chronic pain?": "Coping can involve physical therapy, medication, and lifestyle changes.",
    "What are the symptoms of asthma?": "Symptoms can include wheezing, shortness of breath, and coughing.",
    "How can I improve my fitness?": "Improving fitness can involve regular exercise, balanced nutrition, and sufficient rest.",
    "What are the signs of dehydration?": "Signs can include thirst, dry mouth, and fatigue.",
    "How can I manage my weight effectively?": "Weight management often involves a balanced diet, regular exercise, and monitoring progress.",
    "What are the symptoms of a stroke?": "Symptoms can include sudden numbness, confusion, and difficulty speaking.",
    "How can I cope with allergies?": "Coping can involve avoiding triggers, taking medications, and seeking medical advice.",
    "What are the signs of a respiratory infection?": "Signs can include cough, fever, and difficulty breathing.",
    "How can I manage my cholesterol levels?": "Management often includes diet changes, exercise, and medication.",
    "What are the symptoms of an autoimmune disease?": "Symptoms can vary widely but often include fatigue, joint pain, and skin changes.",
    "How can I cope with insomnia?": "Coping can involve improving sleep hygiene, relaxation techniques, and seeking medical advice.",
    "What are the signs of nutrient deficiency?": "Signs can include fatigue, hair loss, and skin issues.",
    "How can I manage stress effectively?": "Managing stress can involve exercise, relaxation techniques, and seeking support.",
    "What are the symptoms of digestive disorders?": "Symptoms can include bloating, abdominal pain, and changes in bowel habits.",
    "How can I cope with migraines?": "Coping can involve identifying triggers, taking medication, and practicing relaxation techniques.",
    "What are the signs of skin conditions?": "Signs can include rashes, itching, and changes in skin appearance.",
    "How can I improve my heart health?": "Improving heart health can involve a balanced diet, regular exercise, and avoiding smoking."
};

const App = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [faqItems, setFaqItems] = useState(Array(20).fill(false));

    const handleSendMessage = () => {
        const userMessage = userInput;
        const aiResponseText = responses[userInput] || "Sorry, I don't have an answer for that.";
        
        setChatHistory([...chatHistory, { userMessage, aiResponseText }]);
        setUserInput('');
    };

    const toggleFAQ = (index) => {
        const newFaqItems = [...faqItems];
        newFaqItems[index] = !newFaqItems[index];
        setFaqItems(newFaqItems);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: 'white', opacity: '0.9' }}>
            <h1 className="heading" style={{top:'10px'}}>CareSync24</h1>
            <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', height: '40px'}}>
                <div className="logo">
                    <img src={logo} alt="Logo" style={{ height: '70px', width: 'auto' }} />
                </div>
                <ul className="nav-links" style={{ listStyleType: 'none', display: 'flex', marginLeft: '1300px' }}>
                    <li><a href="/home">HOME</a></li>
                </ul>
            </nav>

            <p className="content" style={{top:'90px'}}>
                <h2 >AI-driven Diagnostics</h2>
                <h2 classname='dis' style={{color:'brown' ,fontSize:'20px',fontWeight:'bold'}}>Disclaimer: AI can never replace real doctors!</h2>
                <p className='haha'>Our AI-driven Diagnostics feature offers personalized insights into your health by analyzing your health data. 
                    <br></br>Our AI algorithms are designed to detect potential health risks and recommend actionable steps, which you can discuss with your healthcare provider.</p>
                <ul className='lister'>
                    <li>Data-Driven Health Insights</li>
                    <li>Early Detection of Health Issues</li>
                    <li>Personalized Health Recommendations</li>
                </ul>
            </p>
          

            <div className="chatbox" style={{ width: '50%', height: '80vh', marginLeft:'287px', backgroundColor: '#e0f7fa', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', position: 'relative', top: '50px' }}>
                <div className="chatbox-header" style={{ fontSize: '36px', marginBottom: '10px', color: '#790008' }}>Chat with AI Diagnostics</div>
                <div className="chat-history" style={{ maxHeight: '65%', overflowY: 'auto', padding: '10px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    {chatHistory.map((chat, index) => (
                        <div key={index}>
                            <div className="user-message" style={{ margin: '5px 0', padding: '10px', borderRadius: '5px', backgroundColor: '#bbdefb', textAlign: 'right', color: '#0d47a1' }}>{chat.userMessage}</div>
                            <div className="ai-response" style={{ margin: '5px 0', padding: '10px', borderRadius: '5px', backgroundColor: '#ffe082', color: '#5d4037' }}>{chat.aiResponseText}</div>
                        </div>
                    ))}
                </div>
                <div className="input-container" style={{ display: 'flex', marginTop: '10px' }}>
                    <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} className="input-text" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '20px', color: '#0d47a1' }} placeholder="Type your message here..." />
                    <button className="send-button" onClick={handleSendMessage} style={{ padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '20px' }}>Send</button>
                </div>
            </div>

            <div className="faq-section" style={{ maxWidth: '600px', margin: '20px auto', background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', position: 'relative', top: '30px'  }}>
                <h1 style={{ fontSize: '28px', color: '#00796b' }}>Frequently Asked Questions</h1>
                {[
                    "What are the symptoms of diabetes?",
                    "How can I manage hypertension?",
                    "What are the signs of a heart attack?",
                    "How can I cope with chronic pain?",
                    "What are the symptoms of asthma?",
                    "How can I improve my fitness?",
                    "What are the signs of dehydration?",
                    "How can I manage my weight effectively?",
                    "What are the symptoms of a stroke?",
                    "How can I cope with allergies?",
                    "What are the signs of a respiratory infection?",
                    "How can I manage my cholesterol levels?",
                    "What are the symptoms of an autoimmune disease?",
                    "How can I cope with insomnia?",
                    "What are the signs of nutrient deficiency?",
                    "How can I manage stress effectively?",
                    "What are the symptoms of digestive disorders?",
                    "How can I cope with migraines?",
                    "What are the signs of skin conditions?",
                    "How can I improve my heart health?"
                ].map((question, index) => (
                    <div className="faq-item" key={index}>
                        <h3 onClick={() => toggleFAQ(index)} style ={{ cursor: 'pointer', color: '#007BFF', fontSize: '22px' }}>{question}</h3>
                        {faqItems[index] && <p style={{ display: 'block', fontSize: '18px', color: '#424242' }}>{responses[question]}</p>}
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default App;