import { useState } from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos] = useState([
    "todo 1 = wakeup",
    "todo 2 = breakfast",
    "todo 3 = go to work",
    "todo 4 = check the e-mail box",
    "todo 5 = Read Tech Articles"
  ]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
