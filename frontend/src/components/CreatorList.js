import React from 'react'
import {useState, useEffect} from 'react'
import CreatorCard from "./CreatorCard"
import "./CSS/creatorCard.css"

function CreatorList({ handleCreatorNameChange }) {

    const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);
  if (typeof users !== 'object' || !users.length) {
    return <p>No users found</p>;
  }
  return (
    <div>
      <h1>Foodies: </h1>
        <div className="dash__content">
        {users.map(user => {
        return <CreatorCard className="willywonka" key={user.username} user={user} username={user.usernamename} handleCreatorNameChange={handleCreatorNameChange} />
    })}
      </div>
    </div>
  )
}

export default CreatorList