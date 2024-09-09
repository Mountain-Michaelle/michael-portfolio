import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard({data, handleToggle}) {
  return (
    <Card  sx={{ maxWidth: 400}}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.proj_name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {data.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={() => handleToggle(data.url)} variant='outlined' color="warning"  size="small">Visit Site</Button>
        <Link to={data.git_url} target='_blank' rel='noopener noreferer'><Button size="small"> See repo</Button></Link> 
      </CardActions>
    </Card>
  );
}
