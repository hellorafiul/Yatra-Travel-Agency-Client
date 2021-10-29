import { useHistory, useLocation } from 'react-router-dom';
import useAuth from "./../Hooks/useAuth";

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
      <h2>This is Login </h2>
      <button onClick={handleGoogleLogin}>Google Sign In</button>
    </div>
  );
};

export default Login;
