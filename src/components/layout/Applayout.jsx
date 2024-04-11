import { Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import Chatlist from "../specific/Chatlist";
import { useParams } from "react-router-dom";
import samplechats from '../constans/Sampledata'
import Profile from "../specific/Profile";

const Applayout = (WrappedComponent) => {
  return (props) => {
    const { chatId } = useParams();

    const handleDeleteChat = (e,_id,groupChat) =>{
      e.preventDefault()
      console.log("Delete chat",_id,groupChat)
    }

    return (
      <>
        <Title />
        <Header />
        <Grid
          container
          sx={{
            height: "calc(100vh - 4rem)",
            padding: "1rem",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f0f0f0",
          }}
        >
          {/* Left sidebar */}
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
              height: "100%",
              padding: "1rem",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Chatlist
              chats={samplechats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
              onlineUsers={["26", "23"]}
            />
          </Grid>

          {/* Main content */}
          
          <Grid item xs={12}
  sm={8}
  md={9} // Change md={9} to occupy the entire right side
  sx={{
    height: "100%",
    padding: "2rem",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end", // Align content to the bottom
  }}>
          <WrappedComponent {...props} />
            
          </Grid>
             

       
         
        </Grid>
      </>
    );
  };
};

export default Applayout;
