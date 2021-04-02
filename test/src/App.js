import React, { useState } from 'react';
import './App.css';
import swal from 'sweetalert';


const App = () => {
  const [fullName, setFullName] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: ''
  });


  const inputEvent = (event) => {

  const { value,name } = event.target;

      setFullName((preValue) => {
        return{
        ...preValue,
        [name] : value,
        }
      })

  }
  const onSubmit = (event) => {
        event.preventDefault();
        swal("Good job!", "Your Form is submitted successfully!", "success");
  }
  return(
      <>
      <div className="container">
        <form id="contact"  onSubmit={onSubmit}>
      <div>
        <h1>Contact form </h1>

        <input type='text'
         placeholder='Enter Your Name' 
         name='fName'
         onChange={inputEvent} 
         value={fullName.fName}/>

        <input type='text'
         placeholder='Enter Your Last Name' 
         name='lName'
         onChange={inputEvent} 
         value={fullName.lName}/>

          <input type='email'
         placeholder='Enter Your email' 
         name='email'
         onChange={inputEvent} 
         value={fullName.email}/>

         <input type='tel'
         placeholder='Enter Your number' 
         name="phone"
         onChange={inputEvent} 
         value={fullName.phone}/>

        <textarea   
        placeholder="Type your message here...." 
        tabIndex="5"
        name="message"
        onChange={inputEvent} 
        value={fullName.message}
        />

        <button type='submit'>Submit</button>
        <p className="copyright">Created By ©️<a href='https://deepak-jha.netlify.app/'>Deepak</a></p>
      </div>
      </form>
      </div>
      </>
  )
}

export default App;