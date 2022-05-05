import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const USERS = [
  {
    username: "Alaref",
    age: 21,
    id: "wsd2"
  },
  {
    username: "Fathi",
    age: 28,
  }
]

function App() {
  const [usersList,setUsersList] = useState(USERS)

  const addUserHandler = (uName,uAge) => { 
    setUsersList((prevUsersList) => {
      return [...prevUsersList , {username: uName, age:uAge}]
    })
  }


  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList usersList={usersList}/>
    </div>
  );
}

export default App;
