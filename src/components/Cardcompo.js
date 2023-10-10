import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Cardcompo.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  let db = props.props
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx = {{width:'98%',marginLeft:'auto',marginRight:'auto',fontFamily:'Noto Sans Thai, sans-serif'  }}>
      <div className='box_container' onClick={handleExpandClick}>
        <div className='img_container'>
          <img src= 'https://shorturl.at/dkuKU' style={{width:'74px', height:'66px',borderRadius: 4}}></img>
        </div>
        <div className='res_detail'>
          <div className='detail_head'>
          <p style={{color: '#7FCB9B', fontSize: 12, fontFamily: 'IBM Plex Sans Thai'}}>{db.restaurant_name}</p>
          <p style={{color: 'black', fontSize: 12, fontFamily: 'IBM Plex Sans Thai'}}>{db.price} บาท </p>
          </div>
          <div className='detail_tail'>
          <p style={{color: 'black', fontSize: 16, fontFamily: 'IBM Plex Sans Thai'}}>{props.props.menu_name}</p>
          </div>
        </div>
      </div>
     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><p style={{color:'#3B82F6'}}>รายละเอียด</p></Typography>
         
         
          <Typography paragraph>
            {db.menu_detail}
          </Typography>
          <Typography paragraph>
           <p style={{color:'#3B82F6'}}>รีวิว</p>
          </Typography>
          <Typography >
            <div style={{display:'inline-block'}}>
            <p>รสชาติ</p> {db.taste_review}
            </div>
          </Typography>

          <Typography>
            <p>ราคา </p> {db.price_review}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}