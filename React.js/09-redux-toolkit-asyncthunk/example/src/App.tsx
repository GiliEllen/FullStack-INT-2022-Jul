import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { userSelector } from './features/user/userSlice';
import { getUserFakeApi } from './features/user/userApi';

function App() {
  const user = useAppSelector(userSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserFakeApi())
  },[])
  
  return (
    <div className="App">
      {/* <p>This is the user: {user? <p>{user.name}</p> : <p>no user yet</p>}</p> */}
      <p>This is the user: {user? <p>{JSON.stringify(user)}</p> : <p>no user yet</p>}</p>
    </div>
  );
}

export default App;
