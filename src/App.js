import Todos from './components/Todos';
import AddToDo from './components/AddTodo';

import './App.css';

function App() {
  return (
    <div className="App">
      <AddToDo />
      <Todos />
    </div>
  );
}

export default App;
