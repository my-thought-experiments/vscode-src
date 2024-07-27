import './PromptCell.css';
import React from 'react';

const PromptCell = () => {
  return (
    <div className="image-context-menu">
      <div className="rapper">
        <input type="text" placeholder="Ask Assistant or type '/' for commands, reference an object" className="input-field" />
      </div>
      <div className="context-menu">
        <span className="context-menu-text">Context</span>
        <div className="context-menu-square"></div>
      </div>
      <p className="footer-text">Always review the accuracy of responses.</p>
    </div>
  );
};

export default PromptCell;
