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
import { database } from './DB';
function App() {
  const [open, setOpen] = React.useState(false);
  const [showlist,setShow] = React.useState([0]);
  const [modalname,setModaname] = React.useState('');
  const handleClose = () => setOpen(false);
  const handleclick = (event)=>{
    console.log(event)
    let listofrec = []

    if(event['status']){
      console.log(database[event['val_id']])
      let compo = database[event['val_id']];
      setModaname(compo['canteen_name'])
      for(let i = 0; i<compo['menu'].length ;i++){
          let menu_name = compo['menu'][i]['menu_name']
          listofrec.push(<RecipeReviewCard key = {i} props = {{name:menu_name}}/>)
      }
  

      
      setShow(listofrec)
      setOpen(true)
    }else{
      setModaname('No_receipe')
      setShow([])
      setShow(listofrec)
      setOpen(true)
    }
  }

  
  return (
        <>

        <>
      <Modal
  
        open={open}
        onClose={handleClose}
        aria-labelledby = 'mptjomg'
        aria-describedby="modal-modal-description"
      >
        <>

        <div className = 'card_container'>
          <div>{modalname}</div>
        {showlist}


      </div>

        </>
      </Modal></>
      <div className="container">
  <div className="map-container">
    <img src={canteen} className="map" alt="Map" />
    <img  src = {mark} className="marker" id='sasin' style={{width:'27px',height:'37px',position:'absolute',top:'250px',left:'300px'}} onClick={handleclick}></img>
    <img  src = {mark} className="marker" id='dorm' style={{width:'27px',height:'37px',position:'absolute',top:'370px',left:'400px'}}></img>
    <img  src = {mark} className="marker" id='horklang' style={{width:'27px',height:'37px',position:'absolute',top:'450px',left:'420px'}}></img>
        <img  src = {mark} className="marker" id='cud' style={{width:'27px',height:'37px',position:'absolute',top:'600px',left:'390px'}}></img>
        <img  src = {mark} className="marker" id='jarmnine' style={{width:'27px',height:'37px',position:'absolute',top:'700px',left:'280px'}}></img>
        <img  src = {mark} className="commart" id='6' style={{width:'27px',height:'37px',position:'absolute',top:'680px',left:'420px'}}></img>
        <img  src = {mark} className="marker" id='dent' style={{width:'27px',height:'37px',position:'absolute',top:'170px',left:'730px'}}></img>
        <img  src = {mark} className="marker" id='pesad' style={{width:'27px',height:'37px',position:'absolute',top:'200px',left:'580px'}}></img>
        <img  src = {mark} className="marker" id='arch' style={{width:'27px',height:'37px',position:'absolute',top:'400px',left:'565px'}}></img>
        <img  src = {mark} className="art" id='1' style={{width:'27px',height:'37px',position:'absolute',top:'420px',left:'810px'}} onClick = { ()=> handleclick({'status':true,'val_id':0})}></img>
        <img  src = {mark} className="marker" id='eng' style={{width:'27px',height:'37px',position:'absolute',top:'555px',left:'800px'}} onClick = { ()=> handleclick({'status':false,'val_id':0})} ></img>
        <img  src = {mark} className="marker" id='science' style={{width:'27px',height:'37px',position:'absolute',top:'640px',left:'600px'}} onClick = { ()=> handleclick({'status':false,'val_id':0})}></img>
        <img  src = {mark} className="marker" id='polscience' style={{width:'27px',height:'37px',position:'absolute',top:'740px',left:'780px'}}></img>
        <img  src = {mark} className="marker" id='econ' style={{width:'27px',height:'37px',position:'absolute',top:'780px',left:'680px'}}></img>











  </div>
</div>
        </>
    );
}

export default App;
