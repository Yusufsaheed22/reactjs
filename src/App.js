import { useState } from "react";
import "./App.css";
const App = () => {
  const [title, setTitle] = useState("");
  const [UserName, setUserName] = useState("");

  return (
    <div className="App">
      <h1>User Input User Output</h1>
      <label className="user">Hello User !!</label>
      <input
        className="hello"
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="user">UserName:</label>

      {/* <textarea
        className="name"
        onChange={(e) => setUserName(e.target.value)}
        required
        value={UserName}
      ></textarea> */}
      <p className="title"> {title}</p>
    </div>
  );
};

export default App;
