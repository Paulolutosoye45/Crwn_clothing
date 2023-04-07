import {useState} from 'react'
import FormInput from '../form-input/FormInput';
import './SignInForm.styles.scss'
import Button from '../buttons/Buttons';


const defaultFormFields = {
    email: '',
    password: '',
  };

function Sign_in_Form() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields


    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };


    const SubmitHandle = (event) => {
        event.preventDefault()
      resetFormFields()
    }
    const handleChange =(event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }
  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
       <form onSubmit={SubmitHandle}>
            <FormInput
                    label='email'
                    type='email'
                    required
                    name='email'
                    onChange={handleChange}
                    value={email}/>


            <FormInput
                    label='password'
                    type='password'
                    required
                    name='password'
                    onChange={handleChange}
                    value={password}/>

                <div className='buttons-container'>
                      <Button type='submit'>Sign In</Button>
                      <Button buttonType='google' type='button'>
                        Sign In With Google
                      </Button>
                </div>
       </form>
    </div>
  )
}

export default Sign_in_Form