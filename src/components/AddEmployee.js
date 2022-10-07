import React, { useState } from 'react'

export default function AddEmployee({ employeesProfile, setEmployeesProfile }) {

    const [newProfileId, setNewProfileId] = useState(3)
    let id = 2
    const [newProfileName, setNewProfileName] = useState('')
    const [newProfilePosition, setNewProfilePosition] = useState('')
    const [newProfileSalary, setNewProfileSalary] = useState('')

    return (
        <tr>
            <td>
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => {
                        setNewProfileName(e.target.value)
                    }}
                ></input>
            </td>

            <td>
                <input
                    type='text'
                    placeholder='position'
                    onChange={(e) => { setNewProfilePosition(e.target.value) }}
                >
                </input>
            </td>

            <td>
                <input
                    type='number'
                    placeholder='salary'
                    onChange={(e) => { setNewProfileSalary(e.target.value) }}>
                </input>
            </td>

            <td>
                <button
                    onClick={() => {
                        setEmployeesProfile([...employeesProfile, {
                            // id: id++,
                            name: newProfileName,
                            position: newProfilePosition,
                            salary: newProfileSalary
                        }])
                    }}
                >Add
                </button>
            </td>
        </tr>
    )
}
