import React, { useState } from 'react';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ResponsiveAppBar from './Navigator';

const RecipeReviewCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    
    <div
      style={{
        maxWidth: '700px',
        border : '2px solid #512B81',
        margin: 'auto',
        borderRadius: '10px'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          padding: '10px',
          borderRadius: '50px',
        }}
      >
        <Avatar
          sx={{ bgcolor: red[500] }}
          aria-label="recipe"
          style={{ marginRight: '10px' }}
        >
          R
        </Avatar>
        <div style={{ flex: '1' }}>
          <Typography variant="h6">Shrimp and Chorizo Paella</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            September 14, 2016
          </Typography>
        </div>
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      </div>
      <img
        src="/static/images/cards/paella.jpg"
        alt="Paella dish"
        style={{
          width: '100%',
          marginTop: '10px',
        }}
      />
      <div
        style={{
          padding: '15px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          backgroundColor: '#f5f5f5',
          borderRadius: '10px',
          backgroundColor: '#80B3FF',
          innerHeight: '1px',
          
        }}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton onClick={handleExpandClick} aria-expanded={expanded}>
          <ExpandMoreIcon
            style={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          />
        </IconButton>
      </div>
      <div
        style={{
          display: expanded ? 'block' : 'none',
          padding: '10px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
          aside for 10 minutes.
        </Typography>
        <Typography paragraph>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          large plate and set aside, leaving chicken and chorizo in the pan. Add
          pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
          stirring often until thickened and fragrant, about 10 minutes. Add
          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </Typography>
        <Typography paragraph>
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is absorbed,
          15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
          mussels, tucking them down into the rice, and cook again without
          stirring, until mussels have opened and rice is just tender, 5 to 7
          minutes more. (Discard any mussels that don&apos;t open.)
        </Typography>
        <Typography>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </div>
    </div>

    
  );
}

export default RecipeReviewCard;
