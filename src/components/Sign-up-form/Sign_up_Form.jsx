import { useState} from 'react'
import './SignUpForm.styles.scss'
import FormInput from '../form-input/FormInput'
import ERROR from '../../Error/ERROR'
import Buttons from '../buttons/Buttons'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  
  function Sign_up_Form() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword}=formFields


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };

      
 const SubmitHandle = (event) => {
    event.preventDefault()

    if(password!== confirmPassword) {
        return (<ERROR/>)
    }
   resetFormFields()
 }
    const ONCHANGE = (event) => {
      const {name, value}=event.target
      setFormFields({...formFields, [name]:value})
    }
  return (
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={SubmitHandle}>

        <FormInput
            label='Display Name'
            type='text'
            required
            name='displayName'
            onChange={ONCHANGE}
            value={displayName}/>



        <FormInput
            label='email'
            type='email'
            required
            name='email'
            onChange={ONCHANGE}
            value={email}/>


        <FormInput
            label='password'
            type='password'
            required
            name='password'
            onChange={ONCHANGE}
            value={password}/>

        <FormInput
            label='confirm password'
            type='password'
            required
            name='confirmPassword'
            onChange={ONCHANGE}
            value={confirmPassword}/>

            <Buttons type='submit'> sign up</Buttons>
        </form>
       </div>     
  )
}

export default Sign_up_Form
