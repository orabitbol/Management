import React, { useState } from 'react'
import SearchField from 'react-search-field';
import EmployeeService from './services/EmployeeService'
import "./search.css"
import { Link } from 'react-router-dom';
const Search = () => {

    const [data, setData] = useState([])
    const [id, setId] = useState();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [searchEmail, setSearchEmail] = useState("");

    const searchByEmail = () => {
        setData(EmployeeService.getEmployeeByEmail(searchEmail).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setId(response.data.id)
        }))
    }

    return (
        <div className="search-by-email">
            <h1 className='title'> Search By Email</h1>
            <div className="input-search">
                <SearchField
                    placeholder='Search By Email'
                    onEnter={() => { searchByEmail() }}
                    onSearchClick={() => { searchByEmail() }}
                    value={searchEmail}
                    type="email"
                    class="form-group has-search"
                    onChange={setSearchEmail}
                />
            </div>
            <div>
                <Link to="/employees" className="btn btn-danger"> Back </Link>
            </div>
            <div className='wapper'>
                <table className="table table-bordered table-striped" style={{ border: "2px solid black", margin: "30px 0px 0px 0px" }}>
                    <thead className='title-element'>
                        <th>Id</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Email</th>
                    </thead>
                    <tbody className='item'>
                        <tr>
                            <td> {id} </td>
                            <td> {firstName}  </td>
                            <td> {lastName}  </td>
                            <td> {email}  </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Search