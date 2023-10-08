import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/authSlice';


function App() {

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Simulate a login action
    const userData = { username: 'exampleUser' };
    dispatch(login(userData));
  };

  const handleLogout = () => {
    // Simulate a logout action
    dispatch(logout());
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
