// import CodeCell from "./components/CodeCell/index";
import CodeEditor from "./components/CodeEditor/index";
import PromptCell from "./components/PromptCell/index";
// import DatabricksAssistant from "./components/DatabricksAssistant/index";
import HistoryPanel from "./components/HistoryPanel/index";

function App() {
  return (
    <div className="App">
      <section className="component-row" style={{ marginTop: '50px' }}>
        {/* <CodeCell /> */}
        {/* <DatabricksAssistant /> */}
        <HistoryPanel />
      </section>
      <section className="component-row" style={{ marginTop: '50px' }}>
        <CodeEditor />
      </section>
      <section className="component-row" style={{ marginTop: '50px' }}>
        <PromptCell />
      </section>
    </div>
  );
}

export default App;
