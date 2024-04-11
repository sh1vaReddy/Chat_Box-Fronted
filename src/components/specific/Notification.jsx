import { Dialog, DialogTitle, Stack, Typography, ListItem, Avatar, IconButton, Button } from "@mui/material"
import { sampleNotifications } from "../constans/SampleNotifications"
import { memo } from "react"


const Notification = () => {

  const friendRequesthandler = ({ _id, accept }) => {

  }
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>
          Notifications
        </DialogTitle>
        {
          sampleNotifications.length > 0 ? (
            sampleNotifications.map((i) => <NotificationItem sender={i.sender} _id={i._id} handler={friendRequesthandler} key={i._id} />)
          )
            : <Typography textAlign={"center"}>No Notification</Typography>

        }
      </Stack>

    </Dialog>
  )
}


const NotificationItem = memo(({ sender, _id, handler }) => {
  return (
    <ListItem>
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={'100%'}>
        <Avatar src={sender.avatar}/>
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1, 
            display: "-webkit-flex",
            WebkitLineClamp: 1,
            WebkitBoxOrinent: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width:"100%"
          }}

        >
          {`${sender.name}`}
        </Typography>
        <Stack direction={{
          xs:"column",
          sm:"row"
        }}>
          <Button onClick={()=>handler({_id,accept:true})}>
          Accept
          </Button>
          <Button  onClick={()=>handler({_id,accept:false})} color="error">
            Rejected
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  )
})

export default Notification
