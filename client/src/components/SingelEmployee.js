import React from 'react'
import { Link } from 'react-router-dom'

const SingelEmployee = (props) => {

    return (
        <tr>
            <td> {props.id} </td>
            <td> {props.firstName}  </td>
            <td> {props.lastName}  </td>
            <td> {props.email}  </td>
            <td>
                <div className='position'>
                    <Link className="button-32" type="button" to={`/edit-employee/${props.id}`} > <p className='update-text'>Update </p></Link>
                    <button className='button-28' type="button" role="button" onClick={() => props.deleteEmployee(props.id)}
                        style={{ marginLeft: "10px" }}> Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default SingelEmployee