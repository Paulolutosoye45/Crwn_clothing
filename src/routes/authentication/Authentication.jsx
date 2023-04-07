import './authentication.style.scss'
import Sign_up_Form from '../../components/Sign-up-form/Sign_up_Form'
import Sign_in_Form from '../../components/sign-in-form/Sign_in_Form'

function Authentication() {
  return (
    <div className="authentication-container">
     <Sign_in_Form />
     <Sign_up_Form />
  </div>
  )
}

export default Authentication