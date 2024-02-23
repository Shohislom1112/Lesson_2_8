// import React, { useState, FC, ChangeEvent } from "react";
// import { Link } from "react-router-dom";
// import { IEmployee } from "../../Interfaces";
// import EmployeeList from "./EmployeeList";

// export const CreateEmployee: FC = () => {
//   const [employeeName, setEmployeeName] = useState<string>("");
//   const [employeeId, setEmployeeId] = useState<any>("");
//   const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);

// //   get the data from the input and add it to the state
//   const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     if (event.target.name === "employeename") {
//       setEmployeeName(event.target.value);
//     } else {
//       setEmployeeId(event.target.value);
//     }
//   };

// // add id and name to the employee list
//   const addEmployee = (): void => {
//     const newEmployee = {
//       employeeId: employeeId,
//       employeeName: employeeName,
//     };

//  setEmployeeList([...employeeList, newEmployee]);
//     setEmployeeName("");
//     setEmployeeId("");
//   };

//  // delete employee from the list
//   const deleteEmployee = (employeeNameToDelete: string): void => {
//     setEmployeeList(
//       employeeList.filter(
//         (employee) => employee.employeeName !== employeeNameToDelete
//       )
//     );
//   };

// // edit employee name and id in the list
//   const editEmployee = (
//     employeeNameToEdit: string,
//     employeeIdToEdit: string
//   ): void => {
//     setEmployeeList(
//       employeeList.map((employee) => {
//         if (employee.employeeName === employeeNameToEdit) {
//           employee.employeeId = employeeIdToEdit;
//         }
//         return employee;
//       })
//     );
//   };

//  return (


// <div>
//     <h1>Create Employee</h1>
//       <div>
//     <label>Employee Id:</label>
//     <input
//       type="text"
//       name="employeeid"
//       value={employeeId}
//       onChange={(e) => setEmployeeId(e.target.value)}
//     />
//     <label>Employee Name:</label>
//     <input
//       type="text"
//       name="employeename"
//       value={employeeName}
//       onChange={(e) => setEmployeeName(e.target.value)}
//     />
//     <button type="submit" onClick={addEmployee}>
//       Submit
//     </button>


// </div>
//   <div>
//     <Link to="/employeelist">Employee List</Link>
//     <Link to="/engagementList">Engagement List</Link>
//   </div>
//   <div className="employee-list">
//     <h1>Employee List</h1>
//     {employeeList.map((employee: IEmployee, key: number) => {
//       return (
//             <EmployeeList
//               key={key}
//               employee={employee}
//               deleteEmployee={deleteEmployee}
//               editEmployee={editEmployee}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };