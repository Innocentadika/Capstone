import {useState, useContext} from 'react';

import Button from '../button/button.componets';

import FormInput from '../form-input/form-input.component';
import { UserContext } from '../../contexts/user.context';

import  { signInAuthUserWithEmailAndPassword,signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss';
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // console.log(formFields);
    const {setCurrentUser} = useContext(UserContext);

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
        const {user} = await signInAuthUserWithEmailAndPassword(email, password);
        setCurrentUser(user);
        
        resetFormFields();
      } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('incorrect password or email');
            break;
        
          case 'auth/user-not-found':
          alert('no user associated with this email, please sign up to continue');
          break;

            default:
              console.log(error);
        }
        
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
      <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
      </div>

    </div>
  )
}

export default SignInForm;