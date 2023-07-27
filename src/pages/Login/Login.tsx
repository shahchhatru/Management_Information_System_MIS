import Hi_anime from "../../components/animation/Hi_anime";
import './styles.css'

const Login = () => {
  return (
    <div className="login-container">
       <div className="welcome-back">
            <Hi_anime />
       </div>
       <div className="login-section">
        <h1 className="header">Sign In</h1>
        <form className="signIn-form">
            <div className="iptContainer">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password" />
            </div>
            <div className="forget-block">
            <p>Forget your password? <span>click here</span></p>
            </div>
            <div className="btnContainer">
                
                <button className="button-77">Sign In</button>
            </div>
            
        </form>
       </div>
    </div>
  )
}

export default Login