import {useState} from 'react';

import Button from '../button/button.componets';

import FormInput from '../form-input/form-input.component';

import  { createAuthUserWithEmailAndPassword,signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss';
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
      };
     
    const handleSubmit = async (event) => {
        event.preventDefault();

      try {
        
      } catch (error) {
        
      }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value })
    };

  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            
            <FormInput 
            label="Email"
            type='email'
            required
            onChange={handleChange}
            name="email"
            value={email}/>

            
            <FormInput 
            label="Password"
            type='password'
             required 
             onChange={handleChange} 
             name="password" 
             value={password}/>

            
        </form>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <Button type='submit'>Sign in</Button>
    </div>
  )
}

export default SignInForm;