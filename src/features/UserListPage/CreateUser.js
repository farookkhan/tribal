import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import LetterDivider from './LetterDivider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const CreateUser = (user, index, users, sortBy, handleCardSelect) => {
  return (
    <span key={user.id}>
      
      {(index === 0 || user[`${sortBy}Name`][0] !== users[index-1][`${sortBy}Name`][0]) && 
        <LetterDivider letter={user[`${sortBy}Name`][0]} />}
        
      <Card 
        className="user"
        onTouchTap={() => handleCardSelect(user.id)} 
      >
        <CardMedia>
          <img src={user.picture} alt="" />
        </CardMedia>
        <CardTitle 
          title={sortBy === "last" ? user.lastName + ", " + user.firstName : user.firstName + " " + user.lastName}
          subtitle={ <div> DOB: {user.dob} <br/> City: {user.city} </div> } 
        />
      </Card>
    </span>
  );
};

export default CreateUser;
