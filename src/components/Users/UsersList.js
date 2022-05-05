import classes from "./UsersList.module.css";
import Card from "../UI/Card";

function UsersList(props) {
  return (
    <Card cssClass={classes.users}>
      <ul>
        {props.usersList.map((users) => (
          <li key={users.username}>
            {users.username} ({users.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
