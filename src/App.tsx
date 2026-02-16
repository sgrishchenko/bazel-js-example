import {produceText} from "./util";

export function App() {
    return (
        <div className="App">
            <h1>Hello, World!</h1>
            <p>{produceText()}</p>
        </div>
    );
}
