import React from 'react'

export default function AddEmployee() {
    return (
        <tr>
            <td><input type='text' placeholder='name'></input></td>
            <td><input type='text' placeholder='position'></input></td>
            <td><input type='text' placeholder='salary'></input></td>
            <td><button>Add</button></td>
        </tr>
    )
}
