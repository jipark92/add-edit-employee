import './App.css';
import AddEmployee from './components/AddEmployee';
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
      <h1>{title}</h1>
      <table border="1" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeesList.map((employees) => {
            const { id, name, position, salary } = employees
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{position}</td>
                <td>{salary}</td>
                <td><button>Save</button></td>
              </tr>)
          })}
          {/* add user */}
          <AddEmployee />
        </tbody>
      </table>
    </div>
  );
}

export default App;
