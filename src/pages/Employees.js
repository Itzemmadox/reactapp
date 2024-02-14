import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';

// import {v4 as uuidv4} from 'uuid';

function Employees() {
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Caleb", 
        role: "Devrel Engineer", 
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
      },
      {
        id: 2,
        name: "Sal", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      {
        id: 3,
        name: "John", 
        role: "Director of Eng.", 
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      },
      {
        id: 4,
        name: "Melanie", 
        role: "Software Engineer", 
        img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg"
      },
      {
        id: 5,
        name: "Corey", 
        role: "The Devops guy", 
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
      },
      {
        id: 6,
        name: "Jake", 
        role: "Senior Intern", 
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
      }
    ]
  );

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return {...employee, name: newName, role: newRole}
      }
      return employee
    });
    setEmployees(updatedEmployees)
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployee = true
  return (
    <div className="App">
      {showEmployee ? 
        <>
        <div className='flex flex-wrap justify-center'>
          {employees.map((employee) => {
            const editEmployee = ( 
              <EditEmployee 
                id={employee.id}
                name={employee.name} 
                role={employee.role} 
                updateEmployee={updateEmployee}
              />
            );
            return(
              <Employee 
                  key={employee.id}
                  id={employee.id}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                  editEmployee={editEmployee}
              />
            );
          })}
        </div>
        <AddEmployee newEmployee={newEmployee} />
        </> 
      :(
        <p>You cannot see the employees</p>
      )
      }
        
    </div>
  );
}

export default Employees;
