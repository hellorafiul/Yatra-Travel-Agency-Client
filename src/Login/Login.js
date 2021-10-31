import { useHistory, useLocation } from 'react-router-dom';
import useAuth from "./../Hooks/useAuth";
import loginImg from '../Images/login.svg'
const Login = () => {
  const { signInWithGoogle, setUser, setIsLoading } = useAuth();

  const history = useHistory()
  const location = useLocation()

  const url = location.state?.from || "/home"

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true)
        setUser(res.user)
        history.push(url)
      }
      )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  };

  return (
    <div className="text-center">
      <img src={loginImg} alt="" className='img-fluid w-25' /><br />
      <button className='btn btn-primary mb-5' onClick={handleGoogleLogin}><i className="fab fa-google"></i> Google Sign In</button>
    </div>
  );
};

export default Login;
