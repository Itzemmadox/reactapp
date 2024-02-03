import './index.css';
import Employee from './components/employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState(
    [
      {
        name: "Caleb", 
        role: "Devrel Engineer", 
        image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
      },
      {
        name: "Sal", 
        role: "Manager", 
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      {
        name: "John", 
        role: "Director of Eng.", 
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      },
      {
        name: "Melanie", 
        role: "Software Engineer", 
        image: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg"
      },
      {
        name: "Corey", 
        role: "The Devops guy", 
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
      },
      {
        name: "Jake", 
        role: "Senior Intern", 
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
      }
    ]
  )
  const showEmployee = true
  return (
    <div className="App">
    {showEmployee ? 
      <>
        <input type='text' onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }} 

      />
      <div className='flex flex-wrap justify-center'>
        {employees.map((employee) => {
          return(
            <Employee 
                key={uuidv4()}
                name={employee.name} 
                role={employee.role} 
                image={employee.image}
            />
          );
        })}
      </div>
     </> 
     :(
      <p>You cannot see the employees</p>
     )
    }
       
    </div>
  );
}

export default App;
