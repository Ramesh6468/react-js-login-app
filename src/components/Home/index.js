// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevValue => ({isLoggedIn: !prevValue.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logoutButton={this.onClickButton} />
          ) : (
            <Login LoginButton={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
