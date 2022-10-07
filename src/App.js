import './App.css';
import AddEmployee from './components/AddEmployee';
import { useState } from 'react'

function App() {

  const [salaryValue, setSalaryValue] = useState()

  const title = "Editable Table"

  const employeesList = [
    { id: 0, Name: 'Chris Match', Position: 'Software Developer', Salary: 60000 },
    { id: 1, Name: 'Sarah Doe', Position: 'Consultant', Salary: 30000 },
    { id: 2, Name: 'Ben Sear', Position: 'Project Manager', Salary: 10000 },
  ]

  const tableHeaderLabel = Object.keys(...employeesList)

  const saveSalary = () => {

  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <table border="1" >
        <thead>
          <tr>
            <th>{tableHeaderLabel[1]}</th>
            <th>{tableHeaderLabel[2]}</th>
            <th>{tableHeaderLabel[3]}</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeesList.map((employees) => {
            const { id, Name, Position, Salary } = employees
            return (
              <tr key={id}>
                <td>{Name}</td>
                <td>{Position}</td>
                <td><input
                  type="number"
                  defaultValue={Salary}
                  onChange={(e) => {
                    setSalaryValue(e.target.value)
                  }}
                />
                </td>
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
