import React from "react"

// change to as functional component
export const TodoRowItem: React.FC<{rowNumber: number, rowDescription: string, rowAssigned: string, 
                                    deleteTodo: Function}> = (props) => {
    return (
        // delete row that is clicked
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}
