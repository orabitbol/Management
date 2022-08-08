import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from './services/EmployeeService';
import './listEmployee.css'

const EmployeeEditor = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null);
    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdateEmployee = (e) => {
        if (error === null) {
            e.preventDefault();
            const employee = { firstName, lastName, email }

            if (id) {
                EmployeeService.updateEmployee(id, employee).then((response) => {
                    history.push('/employees')
                }).catch(error => {
                    console.log(error)
                })
            } else {
                EmployeeService.createEmployee(employee).then((response) => {
                    history.push('/employees');
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Employee</h2>
        } else {
            return <h2 className="text-center">Add Employee</h2>
        }
    }

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }
        setEmail(event.target.value);
    };

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> First Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Last Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email "
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={handleChange}
                                    >
                                    </input>
                                    {error && <h4 style={{
                                        color: " red",
                                        margin: "12px 0px 24px 12px"
                                    }}>{error}</h4>}
                                </div>
                                <div style={{ margin: "20px 0px 8px 0px" }}>
                                    <button className="btn btn-success" style={{ marginRight: "12px" }} onClick={(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                    <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default EmployeeEditor



