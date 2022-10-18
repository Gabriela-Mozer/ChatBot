import Chatbot from "react-chatbot-kit";
import "./App.css";
import config from "./components/config";
import ActionProvider from "./components/ActionProvider";
import MessageParser from "./components/MessageParser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
      </header>
    </div>
  );
}

export default App;
