import Show from "./Show";
import "./styles/style.css";
function App() {
  let button = document.querySelector("form button");
  button.addEventListener("clck", (e) => {
    let buttonpressed = e.target.parentElement;
    let newitem = document.createElement("p");
  });

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <form>
        <input type="text" />
        <input type="number" max="12" min="1" placeholder="m" required />
        <input type="number" max="31" min="1" placeholder="d" required />
        <button>add into list</button>
      </form>

      <Show />
    </div>
  );
}

export default App;
