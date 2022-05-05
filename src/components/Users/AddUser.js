import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css'
import { useState , Fragment } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Wrapper/Wrapper";

const AddUser = props => {
    const [enteredUsername , setEnteredUsername] = useState('')
    const [enteredAge , setEnteredAge] = useState('')
    const [error,setError] = useState()
    
    const addUserHandler = event => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:"Error Occured",
                message: "Something went wrong"
            })
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title:"Error Occured",
                message: "Age must be more than 1 year"
            })
            return;
        }
        props.onAddUser(enteredUsername , enteredAge)

    }

    const usernameChange = event => {
        setEnteredUsername(event.target.value)
        console.log(event.target.value);
    }
    
    const ageChange = event => {
        setEnteredAge(event.target.value)
    }

    const cancelHandler = () => {
        setError(null)
    }

    return (
        <Fragment>
            {error &&<ErrorModal onConfirm={cancelHandler} title={error.title} message={error.message}/>}
            <Card cssClass={classes.input} >
                <form onSubmit={addUserHandler} >
                    <label htmlFor="username" >Username</label>
                    <input type="text" id="username" value={enteredUsername} onChange={usernameChange} />
                    <label htmlFor="age" >Age (Years)</label>
                    <input type="text" id="age" value={enteredAge} onChange={ageChange} />
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddUser;