import { useState } from 'react';

export default function FormApp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setMessage(current => [...current, ` ${firstName} ${lastName}`]);
    setMessage(current=>[...current, `${firstName}`])
    setFirstName('');
    setLastName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={(event) =>
          setFirstName(event.target.value)
        }
      />
      <br />
      <br />

      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />

      <br />
      <br />

      <button type="submit">Submit</button>

      <br />
      <br />

      
       <ul>
        {message.map((val)=>{
          return(
          <li>
          {val}
          </li>)
        })}
        </ul>
    
    </form>
  );
}
