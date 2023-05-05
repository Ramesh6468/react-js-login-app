// Write your code here

import './index.css'

const Logout = props => {
  const {logoutButton} = props
  return (
    <button className="button2" type="button" onClick={logoutButton}>
      Logout
    </button>
  )
}

export default Logout
