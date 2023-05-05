// Write your code here
import './index.css'

const Login = props => {
  const {LoginButton} = props

  return (
    <button className="button1" type="button" onClick={LoginButton}>
      Login
    </button>
  )
}

export default Login
