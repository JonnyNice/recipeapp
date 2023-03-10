import React from 'react'
import CreatorList from "./CreatorList"
import { useHistory } from 'react-router-dom';

const Creators = (props) => {
  const history = useHistory();

  const { handleCreatorNameChange } = props;

  function handleClick(username) {
    const creatorName = handleCreatorNameChange(username);
    history.push(`/userpage?username=${creatorName}`);
  }

  return (
    <CreatorList handleCreatorNameChange={handleClick} />
  )
}

export default Creators;