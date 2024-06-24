
import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h2>Task 1</h2>
    <TemperatureConverter />
      <h2>Task 2</h2>
    <TodoList />
    </div>
  );
}

export default App;
