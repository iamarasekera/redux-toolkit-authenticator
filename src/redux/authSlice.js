// Import the createSlice function from Redux Toolkit.
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the 'auth' slice.
const initialState = {
  isAuthenticated: false, // Indicates whether a user is logged in or not.
  user: null, // Represents the authenticated user (null if not logged in).
};

// Create a 'slice' of the Redux store for managing authentication state.
const authSlice = createSlice({
  name: 'auth', // A unique name for this slice, used in the Redux store.
  initialState,  // The initial state of the 'auth' slice.
  reducers: {
    // When a 'login' action is dispatched, update the state.
    login: (state, action) => {
      state.isAuthenticated = true; // Set 'isAuthenticated' to 'true'.
      state.user = action.payload; // Set 'user' to the payload provided in the action.
    },
    // When a 'logout' action is dispatched, update the state.
    logout: (state) => {
      state.isAuthenticated = false;// Set 'isAuthenticated' to 'false'.
      state.user = null; // Set 'user' to 'null'.
    },
  },
});

// Export the 'login' and 'logout' action creators for external use.
export const { login, logout } = authSlice.actions;

// Define a selector function to extract the 'auth' state from the Redux store.
export const selectAuth = (state) => state.auth;

// Export the 'authSlice.reducer' as the default export.
export default authSlice.reducer;
