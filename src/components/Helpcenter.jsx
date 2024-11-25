import '../styles/helpcenter.css';
import React, { useState } from "react";

const Helpcenter = () => {
    const Question = [
        { question: "How can I track my order?", answer: "You can track your order from the 'Cartmenu' section in your account." },
        { question: "What is the return policy?", answer: "You can return items within 30 days of purchase for a full refund." },
        { question: "How do I change my account password?", answer: "You can change your password by going to the 'Account Settings' section." }
    ];

    const [activeIndex, setActiveIndex] = useState(null);
    const [comment, setComment] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const askingQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();

        if (comment) {
            console.log("Modal state set to true");
            setIsModalVisible(true);
            setComment("");

            // Hide the modal after 5 seconds
            setTimeout(() => {
                setIsModalVisible(false);
            }, 5000);
        }
    };

    return (
        <div className="help-center">
            <h1>Help Center</h1>
            <div className="faq-list">
                {Question.map((question, index) => (
                    <div key={index} className="faq-item">
                        <h3 onClick={() => askingQuestion(index)}>{question.question}</h3>
                        {activeIndex === index && <p>{question.answer}</p>}
                    </div>
                ))}
            </div>

            <div className="comment-box">
                <h2>Leave a Message</h2>
                <form onSubmit={handleCommentSubmit}>
                    <textarea
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="Type your message here..."
                        rows="5"
                        cols="50"
                    ></textarea><br />
                    <button type="submit">Submit</button>
                </form>
            </div>

            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>Your message has been sent to the admin. Thank you!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Helpcenter