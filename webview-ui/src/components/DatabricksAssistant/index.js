// DatabricksAssistant.jsx
import React from 'react';
import './DatabricksAssistant.css';
// import assistantIcon from './path-to-your-icon.svg'; // Add the path to your icon image here

const DatabricksAssistant = () => {
  return (
    <div className="assistant-container">
      <img alt="Databricks Assistant Icon" className="assistant-icon" />
      <h1 className="assistant-title">Databricks Assistant</h1>
      <div className="assistant-status">
        <span>New Assistant: </span>
        <select className="assistant-dropdown">
          <option>ON</option>
        </select>
      </div>
      <p className="assistant-description">
        Accelerate your work by diagnosing errors, suggesting code or queries, and answering questions.
      </p>
      <div className="assistant-buttons">
        <button className="assistant-button">Find tables to query</button>
        <button className="assistant-button">Find some queries</button>
      </div>
      <div className="assistant-footer">
        <button className="assistant-link">Help</button>
        <button className="assistant-link">Send feedback</button>
      </div>
      <div className="assistant-input-container">
        <input type="text" placeholder="Ask Assistant or type '/' for commands, reference an object" className="assistant-input" />
        <button className="assistant-input-button">&gt;</button>
      </div>
      <p className="assistant-footer-text">Always review the accuracy of responses.</p>
    </div>
  );
}

export default DatabricksAssistant;
