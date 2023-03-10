import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./CSS/creatorCard.css";
import LinkButton from './/LinkButton'

function CreatorCard({ user, handleCreatorNameChange, ...otherProps}) {
  return (
    <div className="willywonka">
    <Card className="anotherone" sx={{ maxWidth: 400, bgcolor: "#DAD7CD", paddingLeft:2, paddingRight:2, borderRadius: 5 }}>
      <CardMedia
        component="img"
        sx={{ height: 150, paddingTop: 1 }}
        src={user.image}
        title={user.username}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.username}
        </Typography>
        <Typography variant="body2">
          {user.bio}
        </Typography>
      </CardContent>
      <CardContent>
      {/* <ul>
          {user.recipes.map((recipe) => (
            <li>{recipe.name}</li>
          ))}
        </ul> */}
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
      <div {...otherProps}>
        <LinkButton username={user.username} onClick={handleCreatorNameChange}/>
      </div>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </div>
  )
}

export default CreatorCard