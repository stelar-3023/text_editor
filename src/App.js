import React, {Component} from "react";
import './App.css';
import Editor from "./components/EditorComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Editor/>
            </div>
        )
    }
}

export default App;
