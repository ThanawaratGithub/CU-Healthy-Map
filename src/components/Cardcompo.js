import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Cardcompo.css";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  let db = props.props;
  console.log(db.image_path)
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          marginTop: "12px",
          fontFamily: "Noto Sans Thai, sans-serif",
          border: "1px solid var(--base-border-light, #E2E8F0)",
          borderRadius: "12px",
          box_shadow: "0px 1px 2px 0px rgba(30, 41, 59, 0.05)",
        }}
      >
        <div className="content_container" onClick={handleExpandClick}>  
          <div className="img_container" style={{
            backgroundColor:'red',
            width:'74px',
            height:'66px',
            borderRadius:'4px',
            backgroundSize:'120% 120%',
            background: 'url'+'('+ process.env.PUBLIC_URL + '/food_image/'+ db.image_path +'.jpg'+")"+ 'lightgray 50% / cover no-repeat'
          }}>    

          </div>
          <div className="res_detail">
            <div className="detail_head">
              <p className="res_name"

              >
                {db.restaurant_name}
              </p>
              <div className="price_baht">
              <p
                className="price"
              >
                {db.price}
              </p>
                <p className="baht"
              >
                    บาท
              </p>
              </div>
            </div>
            <div className="detail_tail">
              <p
                style={{
                  color: "black",
                  fontSize: 16,
                  fontFamily: "IBM Plex Sans Thai",
                  width:'90%'
                }}
              >
                {props.props.menu_name}
              </p>
            </div>
          </div>
        </div>

        <Collapse in={expanded} timeout="auto" unmountOnExit className="detail_container" sx = {{width:'95%'}} >
           <div onClick={handleExpandClick} style = {{margin:'0px 8px 8px 8px'}} className="detail" >
            รายละเอียด
           </div>
           <div onClick={handleExpandClick} style = {{margin:'8px'}} className="review">
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {db.menu_detail}
           </div>
           <div onClick={handleExpandClick} style = {{margin:'8px'}} className="cus_review">
            รีวิว
           </div>
           <div onClick={handleExpandClick} style = {{margin:'8px'}} className="review_detail">
           <p></p><strong>รสชาติ:</strong> รสชาติ ไม่จัดเกินไป ไม่เค็มเกิน และไม่ใส่ผงชูรส แต่บางเมนูอาจจะจืดไปหน่อย
           <p></p><strong>ราคา:</strong>  ราคาน่ารักเหมาะกับนิสิตในงบจำกัด และได้กับข้าวถึง3อย่าง
           </div>
        </Collapse>
      </Card>
    </>
  );
}
