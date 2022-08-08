import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from './services/EmployeeService'
import './listEmployee.css';
import SingelEmployee from './SingelEmployee';
import Lottie from 'react-lottie';
import error from './lottie/error.json'

const ListEmployee = () => {

    const [employees, setEmployees] = useState([])
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
   

    useEffect(() => {
        getAllEmployees();
    }, [])

    const loginError = {
        loop: true,
        autoplay: true,
        animationData: error,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data);
            console.log("for me" + response.data[0].email);
            setLoading(true);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();

        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container" >
            {loading ?
                <div>
                    <h2 className="text-center"> List Employees </h2>

                    <div className='search-wapper'>
                        <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                            aria-label="Search" onChange={(e) => setQuery(e.target.value)} />
                    </div>

                    <div className='link-button' >
                        <Link to="/add-employee" className="btn btn-success" type="button" style={{ outline: "none" }}> Add Employee </Link>
                        <Link to="/search-by-email" className="btn btn-primary" type="button" style={{ outline: "none" }}> Search By Email </Link>
                    </div>

                    <table className="table table-bordered table-striped" style={{ border: "2px solid black", margin: "30px 0px 0px 0px" }}>
                        <thead className='title-element'>
                            <th>Id</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Email</th>
                            <th> Actions </th>
                        </thead>
                        <tbody className='item'>
                            {employees.filter((item) => item.firstName.toLowerCase().includes(query))
                                .map((employee, index) =>
                                    <SingelEmployee
                                        key={index}
                                        id={employee.id}
                                        firstName={employee.firstName}
                                        lastName={employee.lastName}
                                        email={employee.email}
                                        deleteEmployee={deleteEmployee}
                                    />
                                )}
                        </tbody>
                    </table>
                </div>
                :
                <div>
                    <h1 className = "error " >Please Connect To The Server</h1>
                    <br /><br /><br /><br />
                    <Lottie options={loginError}
                        height={400}
                        width={600} />
                </div>
            }
        </div>
    )
}

export default ListEmployee