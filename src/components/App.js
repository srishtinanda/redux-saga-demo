import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getUsers } from '../actions/users'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  return (
    <div className="App">
          Learn React
    </div>
  );
}

export default App;
