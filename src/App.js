// Import necessary dependencies and assets.
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/authSlice';

// Define the main component of the React application.
function App() {
  // Use the 'useSelector' and 'useDispatch' hooks from React-Redux to interact with the Redux store.
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  // Define a function to handle user login.
  const handleLogin = () => {
    // Simulate a login action by creating a user data object.
    const userData = { username: 'exampleUser' };
    // Dispatch the 'login' action from the 'authSlice' with the user data.
    dispatch(login(userData));
  };

  // Define a function to handle user logout.
  const handleLogout = () => {
    // Simulate a logout action by dispatching the 'logout' action from 'authSlice'.
    dispatch(logout());
  };

  // Render the React component.
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

// Export the 'App' component as the default export.
export default App;
