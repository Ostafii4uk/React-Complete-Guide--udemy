import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredUserage, setEnteredUserage] = useState('')
  const [error, setError] = useState()
  
  const addUserHandler = (event) => {
    event.preventDefault()

    if (enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0) {
      setError({
        title: 'Недійсний input',
        massage: 'Введіть дійсне ім’я та вік'
      })
      return;
    }

    if (+enteredUserage < 1) {
      setError({
        title: 'Недійсний вік',
        massage: 'Введіть дійсний вік (> 0)'
      })
      return
    }

    props.onAddUser(enteredUsername, enteredUserage)

    setEnteredUsername('')
    setEnteredUserage('');
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const userageChangeHandler = (event) => {
    setEnteredUserage(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal title={error.title} massage={error.massage} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User name</label>
          <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername} />
          <label htmlFor="userage">Age (Years)</label>
          <input id="userage" type="number" onChange={userageChangeHandler} value={enteredUserage} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser;