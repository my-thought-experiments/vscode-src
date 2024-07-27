import './CodeEditor.css';
import React from 'react';
import { VscAccount, VscAdd, VscTrash, VscBookmark, VscSettingsGear } from "react-icons/vsc";


const CodeEditor = () => {
  return (
    <div className="code-editor">
      <div className="editor-toolbar">
        <button className="play-button">
          <div className="play-icon"></div>
        </button>
        <span className="line-number">1</span>
        <span className="language-indicator">Python</span>
        <div className="toolbar-icons">
          <VscAccount />
          <VscAdd />
          <VscTrash />
          <VscBookmark />
          <VscSettingsGear />
        </div>
      </div>
      <div className="editor-input">
      <textarea
        className="code-input"
        placeholder="Start typing or generate with AI (⌘ + I)..."
      />
      </div>
      <div className="editor-footer">
        <p>[Shift+Enter] to run and move to next cell</p>
        <p>[Esc H] to see all keyboard shortcuts</p>
      </div>
    </div>
  );
};

export default CodeEditor;
