import React from 'react'

export default function Employee({ title }) {
    return (
        <div>
            <h1>{title}</h1>
            <table border="1" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    Children
                </tbody>
            </table>
        </div>
    )
}
