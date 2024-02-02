import './App.css';
import Employee from './components/employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev')
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
        <Employee name="Seun" role="intern"/>
        <Employee name="Emmanuel" role={role}/>
        <Employee name="Seun" role="intern"/>
     </> 
     :(
      <p>You cannot see the employees</p>
     )
    }
       
    </div>
  );
}

export default App;
