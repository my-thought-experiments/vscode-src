import './CodeCell.css';
import React from 'react';

const CodeCell = () => {
  return (
    <div className="code-cell">
      <div className="top-bar">
        <button className="run-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </button>
        <div className="cell-number">1</div>
        <input className="code-input" placeholder="Start typing or generate with AI (⌘ + I)..." />
        <div className="language">Python</div>
        <button className="delete-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6L17 19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>
        </button>
        <button className="magic-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3l-6 6 3 3 6-6-3-3z"></path><path d="M14.7 6.3l-1.4-1.4L3 15.6V21h5.4l10.3-10.3-4-4z"></path></svg>
        </button>
        <button className="fullscreen-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
        </button>
        <button className="options-button">⋮</button>
      </div>
      <div className="shortcuts-info">
        [Shift+Enter] to run and move to next cell<br />
        [Esc H] to see all keyboard shortcuts
      </div>
    </div>
  );
};

export default CodeCell;
