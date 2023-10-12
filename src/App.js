import canteen from "./image 4_auto_x2.jpg";
import mark from "./canteenmap.jpg";
import star from "./star_icon.jpg";
import logo from "./cu_healthymap_logo.png"
import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RecipeReviewCard from "./components/Cardcompo";
import { List, Paper } from "@mui/material";
import database from './data_as_of_1210.json'
import ClearIcon from '@mui/icons-material/Clear';
import { red } from "@mui/material/colors";
import nomenu from "./nomenu_logo.png"
import distress from "./distress.png"
function App() {
  const [open, setOpen] = React.useState(false);
  const [showlist, setShow] = React.useState([0]);
  const [modalname, setModaname] = React.useState("");
  const [haverec,Sethaverec] = React.useState(false)
  const no_menupage = (<>
    <div  >
    <img src = {nomenu} style={{backgroundColor:'red',width:'130px','height':'130px'}}></img>
    </div>
  </>)
  const handleClose = () => setOpen(false);
  const test_valid = (val_id)=>{
    for(let i = 0;i<database.length;i++){
      if( val_id == database[i]['id']){
        return [i,true]
      }
    }
    return [-1,false]

  }
  const handleclick = (event) => {

    
    let listofrec = [];
    let result = test_valid(event['val_id'])
    let status = result[1]
    let ind = result[0]

    
    if (status) {
      Sethaverec(status)

      let compo = database[ind];
      setModaname(compo["canteen_name"]);
      for (let i = 0; i < compo["menu"].length; i++) {
        listofrec.push(<RecipeReviewCard key={i} props={compo["menu"][i]} />);
      }

      setShow(listofrec);
      setOpen(true);
    } else {
      setModaname(" ");
      setShow([])
      setShow(listofrec)
      Sethaverec(status)
      setOpen(true);
    }
  };

  return (
    <>
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="mptjomg"
          aria-describedby="modal-modal-description"
        >
          <>
            <div className="card_container" style={{ padding: "12px" }}>
              <div >
                <div style={{ display: "flex", gap: "4px" }}>
                  <div>
                    <img src={star}></img>
                  </div>
                  <div>
                    <p>เมนูอาหารสุขภาพแนะนำ</p>
                  </div>
                  <ClearIcon sx = {{marginLeft:'auto'}} onClick ={handleClose}/>
                </div> 
                <p className="canteen_loc"> ณ {modalname} </p>

                <div
                  style={{
                    margin: "auto",
                    width: "100%",
                    height: "100%",
                    border: "1px #CBD5E1 solid",
                  }}
                ></div>
              </div>
              {haverec? <div >{showlist}</div>
                :<>
                <div style={{display:'flex',width:'100%',height:'80%',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                  <img src ={nomenu} style={{width:'130px',height:'130px'}}></img>
                  <p style={{color: '#94A3B8'}}>ยังไม่มีเมนูแนะนำในโรงอาหารนี้</p>

                </div>
                
                </>}
            </div>
          </>
        </Modal>
        
      </>
      <div className="container">
        <div className="map-container">
          <img src={canteen} className="map" alt="Map" />
          <img
            src={distress}
            className="sasin"
            id = "10"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "250px",
              left: "300px",
          
            }}
            onClick={() => handleclick({ val_id: "10" })}
            ></img>
          <img
            src={distress}
            className="student_dorm"
            id="11"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "380px",
              left: "400px",
            }}
            onClick={() => handleclick({ val_id: "11" })}
          ></img>
          <img
            src={distress}
            className="office_of_university"
            id="12"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "450px",
              left: "410px",
              
            }}
            onClick={() => handleclick({ val_id: "12" })}
          ></img>
          <img
            src={distress}
            className="edu"
            id="3"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "585px",
              left: "385px",
            }}
            onClick={() => handleclick({ val_id: "3" })}
          ></img>
          <img
            src={distress}
            className="chamchuri9"
            id="13"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "690px",
              left: "270px",
            }}
            onClick={() => handleclick({ val_id: "13" })}
          ></img>
          <img
            src={distress}
            className="commart"
            id="6"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "680px",
              left: "435px",
            }}
            onClick={() => handleclick({val_id: "6" })}
          ></img>
          <img
            src={distress}
            className="dent"
            id="15"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "160px",
              left: "710px",
            }}
            onClick={() => handleclick({ val_id: "15" })}
          ></img>
          <img
            src={distress}
            className="Rx"
            id="14"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "200px",
              left: "580px",
            }}
            onClick={() => handleclick({ val_id: "14" })}
          ></img>
          <img
            src={distress}
            className="arch"
            id="7"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "400px",
              left: "565px",
            }}
            onClick={() => handleclick({ val_id: "7" })}

          ></img>
          <img
            src={distress}
            className="art"
            id="1"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "420px",
              left: "810px",
            }}
            onClick={() => handleclick({ val_id: "1" })}
          ></img>
          <img
            src={distress}
            className="engineer"
            id="9"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "542px",
              left: "800px",
            }}
            onClick={() => handleclick({ val_id: "9" })}
          ></img>
          <img
            src={distress}
            className="science"
            id="16"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "640px",
              left: "585px",
            }}
            onClick={() => handleclick({ val_id: "16" })}
    
          ></img>
          <img
            src={distress}
            className="polscience"
            id="2"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "735px",
              left: "795px",
            }}
            onClick={() => handleclick({ val_id: "2" })}
          ></img>
          <img
            src={distress}
            className="econ"
            id="4"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "780px",
              left: "680px",
            }}
            onClick={() => handleclick({ val_id: "4" })}
          ></img>
                    <img
            src={distress}
            className="charm_square"
            id="8"
            style={{
              width: "45px",
              height: "45px",
              position: "absolute",
              top: "830px",
              left: "600px",
            }}
            onClick={() => handleclick({ val_id: "8" })}
          ></img>
   
        </div>
        <img
            src={logo}
            className="logo"
            style={{ 
              width: '130px',
              height: '43px',
              position: 'absolute',
              top: '2px',
              left: '5%',
              backgroundColor: 'white',
              padding: '12px',
              borderRadius: '4px',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            }}
          ></img>
      </div>
    </>
  );
}

export default App;
