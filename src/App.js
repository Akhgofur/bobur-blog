import React, { useContext} from 'react';
import LoginPage from './components/login/login.component';
import SiteMain from './components/main/main.component';
import { AuthContext } from './context/auth-context';

function App() {
  const {token} = useContext(AuthContext)
    if(token) {
      return(
        <SiteMain/>
      )
    }else{
      return(
        <LoginPage/>
      )
    }
  
}

export default App;
