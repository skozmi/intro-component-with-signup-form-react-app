import React, {useState} from 'react';

import './SignupForm.css';

const SignupForm = () =>{

  const [enteredFName, setEnteredFName] = useState({value:'', isError: false});
  const [enteredLName, setEnteredLName] = useState({value:'', isError: false});
  const [enteredEmail, setEnteredEmail] = useState({value:'', isError: false});
  const [enteredPass, setEnteredPass] = useState({value:'', isError: false});
  const [errorFName, setErrorFName] = useState('');
  const [errorLName, setErrorLName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const handleFNameChange = (event)=>{
    setEnteredFName({value: event.target.value, isError: false});
    setErrorFName('');
  }

  const handleLNameChange = (event)=>{
    setEnteredLName({value: event.target.value, isError: false});
    setErrorLName('');
  }

  const handleEmailChange = (event)=>{
    setEnteredEmail({value: event.target.value, isError: false});
    setErrorEmail('');
  }

  const handlePassChange = (event)=>{
    setEnteredPass({value: event.target.value, isError: false});
    setErrorPass('');
  }
  
  const handleSubmit = (event)=> {
    event.preventDefault();
    if (!enteredFName.value) {
      setEnteredFName({isError: true});
      setErrorFName('First Name cannot be empty');
    }
    if (!enteredLName.value) {
      setEnteredLName({isError: true});
      setErrorLName('Last Name cannot be empty');
    }
    if (!enteredEmail.value || enteredEmail.value.match(/@/) == null) {
      setEnteredEmail({isError: true});
      setErrorEmail('Enter email is not correct');
    }
    if(enteredPass.value.length < 8) {
      setEnteredPass({isError: true});
      setErrorPass('Password must have least 8 characters');
    }
    else {
      alert(`Thank you ${enteredFName.value} ${enteredLName.value}! Good luck with learning!`);
      window.location.reload();
    }
  }

    return (
        <div className="input-form">
          <p className="try-it">Try it free 7 days then $20/mo. thereafter</p>
          <form action="/" method="POST" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="fName" 
              id="firstName" 
              placeholder="First Name"
              className= {enteredFName.isError === true ? "error-icon" : ""}
              value={enteredFName.value}
              onChange={handleFNameChange} />
            <p className="fn-error-text">{errorFName}</p>

            <input 
              type="text" 
              name="lName" 
              id="lastName" 
              placeholder="Last Name"
              className= {enteredLName.isError === true ? "error-icon" : ""}
              value={enteredLName.value}
              onChange={handleLNameChange} />
            <p className="ln-error-text">{errorLName}</p>

            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email Address"
              className= {enteredEmail.isError === true ? "error-icon" : ""}
              value={enteredEmail.value}
              onChange={handleEmailChange} />
            <p className="email-error-text">{errorEmail}</p>

            <input 
              type="password" 
              name="pass" 
              id="pass" 
              placeholder="Password"
              className= {enteredPass.isError === true ? "error-icon" : ""}
              value={enteredPass.value}
              onChange={handlePassChange} />
            <p className="pass-error-text">{errorPass}</p>

            <button type="submit" id="submitBtn">Claim your free trial</button>
            <p className="clicking">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
          </form>
        </div>
    );
};

export default SignupForm;