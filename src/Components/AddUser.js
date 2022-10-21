import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please, enter a valid name and age (non-empty values)!",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age!",
        message: "Please, enter a valid age greater than 0!",
      });
      return;
    }
    // console.log(username, age);
    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value.trim());
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = (event) => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              onChange={usernameHandler}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" onChange={ageHandler} value={age} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
