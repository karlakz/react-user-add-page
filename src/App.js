import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import UsersList from "./Components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    { name: "Venera", age: 35, id: "hgftr" },
  ]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
