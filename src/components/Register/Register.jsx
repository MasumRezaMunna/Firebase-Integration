import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/Firebase.init';

const Register = () => {
    

    const handleRegister = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        
    
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
              <h1 className="text-4xl font-bold">Please Register 🥹</h1>

       <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
                {/* name field */}
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" />
                {/* email field */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* password field */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form> 
        <p>Already have an account? Please <Link className='text-blue-500 underline hover:text-blue-700' to="/login">Login</Link> </p>

  </div>
</div>
    );
};

export default Register;