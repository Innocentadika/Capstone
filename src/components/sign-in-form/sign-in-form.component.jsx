import {useState} from 'react';

import Button from '../button/button.componets';

import FormInput from '../form-input/form-input.component';

import  { signInAuthUserWithEmailAndPassword,signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

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

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
      };
     
    const handleSubmit = async (event) => {
        event.preventDefault();

      try {
        const response = await signInAuthUserWithEmailAndPassword(email, password);
        console.log(response); 
        resetFormFields();
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
        <div className="buttons-container">
        <Button type='submit'>Sign in</Button>
      <Button buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
      </div>

    </div>
  )
}

export default SignInForm;