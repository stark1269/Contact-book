import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlerRegisterLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handlerLogoutFulfilled = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const refreshUserPending = (state) => {
  state.isRefreshing = true;
};

const refreshUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const refreshUserRejected = (state) => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => builder
    .addCase(register.fulfilled, handlerRegisterLoginFulfilled)
    .addCase(logIn.fulfilled, handlerRegisterLoginFulfilled)
    .addCase(logOut.fulfilled, handlerLogoutFulfilled)
    .addCase(refreshUser.pending, refreshUserPending)
    .addCase(refreshUser.fulfilled, refreshUserFulfilled)
    .addCase(refreshUser.rejected, refreshUserRejected)
});

export const authReducer = authSlice.reducer;