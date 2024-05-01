import Social from './components/SocialAccounts/Social'
import UserInfo from './components/UserInfo/UserInfo'
import { avatar } from './assets'
import './index.css'


function App() {

  return (
    <div className='wrapper'>
      <UserInfo url={avatar} user="Jessica Randall" place="London, united Kingdom" />
      <Social />
    </div>
  )
}

export default App
