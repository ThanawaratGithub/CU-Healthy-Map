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
        <div className='container'>
      
        <img src={canteen} style={{width:'100%' , height:'100%' , maxWidth:'802px',maxHeight:'844px'}} className="map"/>
          <div className='marker' style={{top: '30%' , left: '35%'}}   onClick={(e)=>handleclick({name:'blue'})}>
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '40%' , left: '47%'}} onClick={(e)=>handleclick({name:'student_dorm'})}>
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '52%' , left: '47%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '52%' , left: '47%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '65%' , left: '42%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '75%' , left: '50%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          
          <div className='marker' style={{top: '75%' , left: '32%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '73%' , left: '66%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '90%' , left: '73%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '85%' , left: '85%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '63%' , left: '90%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '48%' , left: '90%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '45%' , left: '65%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '23%' , left: '65%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>

          <div className='marker' style={{top: '19%' , left: '80%'}} >
          <img src={mark} style={{width:'5%',maxWidth:'700px',maxHeight:'700px'}} />
          </div>
        </div>
        </>
    );
}

export default App;
