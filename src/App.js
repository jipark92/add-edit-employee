import AddEmployee from './components/AddEmployee';
import { useState } from 'react'

function App() {

  const title = "Editable Table"

  const employeesList = [
    { id: 0, name: 'Chris Match', position: 'Software Developer', salary: 60000 },
    { id: 1, name: 'Sarah Doe', position: 'Consultant', salary: 30000 },
    { id: 2, name: 'Ben Sear', position: 'Project Manager', salary: 10000 },
  ]
  const [employeesProfile, setEmployeesProfile] = useState(employeesList)
  const [salaryValue, setSalaryValue] = useState()

  console.log(employeesProfile)

  const tableHeaderLabel = Object.keys(...employeesList)

  const saveSalary = (i, id, employees) => {
    if (i === id) {
      console.log(id, 'saved')
      return { ...employees, salary: salaryValue }
    }
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
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {employeesProfile.map((employees, i) => {
            const { id, name, position, salary } = employees
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{position}</td>
                <td><input
                  type="number"
                  defaultValue={salary}
                  onChange={(e) => {
                    setSalaryValue(e.target.value)
                  }}
                />
                </td>
                <td><button
                  onClick={() => { saveSalary(i, id, employees) }}
                >Save</button></td>
              </tr>)
          })}
          <AddEmployee
            employeesProfile={employeesProfile}
            setEmployeesProfile={setEmployeesProfile}
          />
        </tbody>
      </table>
    </div>
  );
}

export default App;
