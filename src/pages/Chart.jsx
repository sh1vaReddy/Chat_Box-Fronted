import { useRef } from "react";
import Applayout from "../components/layout/Applayout";
import { IconButton, Stack,Tooltip } from "@mui/material";
import { AttachFile,  Send } from "@mui/icons-material";
import { InputBox } from "../components/Stylecomponent";
import FielMenu from "../components/diglogs/FielMenu";
import { sampleMessage } from "../components/constans/SmapleMessage";
import MessageComponent from "../components/shared/MessageComponent";

const Chart = () => {

  const user={
    _id:"12345678",
    name:"shiva reddy"
  }
  const containerRef = useRef(null);
 
  return (
    <>
    <Stack
      ref={containerRef}
      boxSizing={"border-box"}
      padding={"1rem"}
      spacing={"1rem"}
      height={"90%"}
      sx={{
        overflowX: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {
        sampleMessage.map((i)=>(
          <MessageComponent message={i} user={user}/>
        ))
      }
     
    </Stack>
    <form style={{borderWidth: "0.25rem", borderStyle: "solid", borderRadius:"25rem"}}>
        <Stack direction={"row"} 
        alignItems="center"
         height={"100%"}
        padding={"0.5rem"}
        position={"relative"}

        >
          <IconButton sx={{
            position:"absolute",
            left:"1.5rem",
            rotate:"30deg"
          }}
         
          >
           <Tooltip title="Attach File">
  <AttachFile />
</Tooltip>
          </IconButton>
          <InputBox placeholder="Message"
          sx={{
            flexGrow: 1, 
            minWidth: 200, 
            minHeight: 40, 
            fontSize: "1.1rem", 
          }}
          />
          <IconButton type="submit" sx={
            {
              rotate:"-30deg",
              backgroundColor:"#ea7070",
              color:"white",
              marginLeft:"1rem",
              padding:"0.5rem",
              "&:hover":{
                bgcolor:"error.dark"
              }
            }
          }>
            <Tooltip title="Send Message">
            <Send />
            </Tooltip>
          
          </IconButton>
        </Stack>
      </form>
    <FielMenu/>

    </>
    
  );
};

export default Applayout(Chart);
