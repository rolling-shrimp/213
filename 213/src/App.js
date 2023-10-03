import Show from "./Show";
import { useState, useRef } from "react";
import "./styles/style.css";
import "animate.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Caru from "./components/Caru";

function App() {
  const SectRef = document.getElementsByTagName("section");
  const [data, setdata] = useState({});
  const [TodoArr, setTodoArr] = useState([]);
  const change = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const appearInput = () => {
    setTodoArr([
      ...TodoArr,
      { task: data.TodoItem, Tododate: `${data.TodoMonth} / ${data.TodoDay}` },
    ]);
    setdata({});
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Caru />
      <form>
        <input
          type="text"
          name="TodoItem"
          onChange={change}
          value={data.TodoItem || ""}
        />
        <input
          type="number"
          max="12"
          min="1"
          placeholder="m"
          required
          name="TodoMonth"
          onChange={change}
          value={data.TodoMonth || ""}
        />
        <input
          type="number"
          max="31"
          min="1"
          placeholder="d"
          required
          name="TodoDay"
          onChange={change}
          value={data.TodoDay || ""}
        />
        <button onClick={appearInput}>add into list</button>
      </form>
      <section>
        {TodoArr != [] &&
          TodoArr.map((item) => (
            <div className="todo">
              <p className="ptag">
                {item.task} {item.Tododate}
              </p>
              <button>完成</button>
              <button>刪除</button>
            </div>
          ))}
      </section>
    </div>
  );
}

export default App;
