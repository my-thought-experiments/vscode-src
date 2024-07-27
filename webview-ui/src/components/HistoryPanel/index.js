// HistoryPanel.jsx
import React from 'react';
import './HistoryPanel.css';

const HistoryPanel = () => {
  return (
    <div className="history-container">
      <div className="history-header">
        <button className="back-button">&lt;</button>
        <h2 className="history-title">History</h2>
        <button className="add-button">+</button>
        <button className="close-button">×</button>
      </div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search threads" />
      </div>
      <div className="history-content">
        <div className="section">
          <p className="section-title">Previous 7 days</p>
          <ul className="history-list">
            <li className="history-item checked">Exploring the World of Movies</li>
            <li className="history-item active">Exploring the Titanic Through Data Tables</li>
            <li className="history-item">Chicago Table Hunting Guide</li>
          </ul>
        </div>
        <div className="section">
          <p className="section-title">This month</p>
          <ul className="history-list">
            <li className="history-item">Switching to Dark Mode Instructions</li>
            <li className="history-item">Navigating Through Light Mode Settings</li>
            <li className="history-item">Top Ten Premium NYCTaxi Fares Unveiled</li>
            <li className="history-item">Exploring NYC Taxi Data with Spark in Dark Mode</li>
            <li className="history-item">A Greeting to Begin a Dialogue</li>
            <li className="history-item">Exploring New York City Taxi Trip Data</li>
            <li className="history-item">Exploring NYC Taxi Trips Data Subset</li>
            <li className="history-item">Exploring NYC Taxi Trip Data Samples</li>
            <li className="history-item">Querying the First Ten Rows of NYC Taxi Trips</li>
            <li className="history-item">Titanic's Journey to the Depths Discussion</li>
          </ul>
        </div>
        <div className="section">
          <p className="section-title">May</p>
          <ul className="history-list">
            <li className="history-item">Databricks Runtime Library Versions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HistoryPanel;
