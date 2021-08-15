import React from "react";
import { connect } from "react-redux";

import { addUser, deleteUser } from "../store/actions/basicActions";

export const HomePage = (props) => {

  const renderAllUsers = () => {
    return props.users.map(({ id, name }) => {
      return (
        <li key={id}>
          <span>
            {name}
            <button onClick={(e)=>onDeleteUserClick(e, id)}>delete</button>
          </span>
        </li>
      )
    });
  };
  
  const onAddUserClick = (e) => {
    // dont reload the page
    e.preventDefault()

    // call the action creator
    props.addUser()
  }

  const onDeleteUserClick = (e, id=String) => {
    e.preventDefault()

    // delete the user by id
    props.deleteUser(id)
  }

  // display the updated names list from the redux store
  return (
    <div>
      <h1>The Home Page</h1>
      <button onClick={(e)=>onAddUserClick(e)}>Add user</button>
      <ul>{renderAllUsers()}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state,
});

export default connect(mapStateToProps, {addUser, deleteUser})(HomePage);
