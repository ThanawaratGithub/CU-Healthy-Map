import canteen from './canteenmap.jpg'
import mark from './ggmark.jpg'
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RecipeReviewCard from './components/Cardcompo';
import { List, Paper } from '@mui/material';

function App() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleclick = (event)=>{
    console.log(event)
    setOpen(true);

  }

  
  return (
        <>

        <>
      <Modal
  
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>

        <div className = 'card_container'>
  <RecipeReviewCard className = 'card'/>
  <RecipeReviewCard/>
  <RecipeReviewCard/>
  <RecipeReviewCard/>
  <RecipeReviewCard/>


      </div>

        </>
      </Modal></>
      <div className="container">
  <div className="map-container">
    <img src={canteen} className="map" alt="Map" />
    <img  src = {mark} className="marker"></img>
  </div>
</div>
        </>
    );
}

export default App;
