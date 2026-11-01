import { useEffect, useState } from "react";
import { getEmployees } from "../../services/employeeService";
import "./employeeList.css";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const employees = await getEmployees();
            setEmployees(employees);
        };

        fetchEmployees();
    }, []);

    return (
        <main className="employee-list-page">
            <h2>Employee List</h2>
            <div className="employee-list-container">
                {employees.map((employee) => {
                    const statusClass = employee.status
                        .toLowerCase()
                        .replace(" ", "-");

                    return (
                        <article className="employee-card" key={employee.id}>
                            <div className="employee-card-header">
                                <h3>{employee.name}</h3>
                                <span className={`employee-status is-${statusClass}`}>
                                    {employee.status}
                                </span>
                            </div>
                            <p className="employee-email">{employee.email}</p>
                            <p><strong>Role:</strong> {employee.role}</p>
                            <p><strong>Department:</strong> {employee.department}</p>
                            <p><strong>Location:</strong> {employee.location}</p>
                            <p><strong>Joined:</strong> {employee.joiningDate}</p>
                        </article>
                    );
                })}
            </div>
        </main>
    );
};

export default EmployeeList;
