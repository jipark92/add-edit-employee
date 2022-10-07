import './App.css';
import Employee from './components/Employee';

function App() {

  const title = "Editable Table"

  const employeesList = [
    { id: 0, name: 'chris match', position: 'software developer', salary: 60000 },
    { id: 1, name: 'sarah doe', position: 'software developer', salary: 30000 },
    { id: 2, name: 'ben sear', position: 'software developer', salary: 10000 },
  ]

  return (
    <div className="App">
      <Employee
        title={title}
      />
    </div>
  );
}

export default App;
