import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import samplechats from "../constans/Sampledata";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";
import { useState } from "react";

const NewGroup = () => {
  const [members, setmembers] = useState(samplechats);
  const [selectmembers, setselectmembers] = useState([]);
  const submithandlercancel = () => {
    console.log("Group clear");
  };

  const submithandlercreate = () => {
    console.log("group craeted");
  };

  const NewGroup = useInputValidation("");
  const selectMember = (id) => {
    setmembers(prev=>prev.map(user=>user._id===id ? {...user,isAdded:!user.isAdded }:
    user
    ))
    setselectmembers((prev) =>
      prev.includes(id)
        ? prev.filter((currentElement) => currentElement !== id)
        : [...prev, id]
    );
  };

  const closeHandler = () =>{

  }

  const isLoadingSendFriendRequest = false;
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={NewGroup.value}
          onChange={NewGroup.changeHandler}
        />
        <Typography>members</Typography>
        <Stack>
          {members.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMember}
              handlersLoading={isLoadingSendFriendRequest}
              isAdded={selectmembers.includes(i._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button
            variant="outlined"
            color="error"
            size="large"
            onClick={submithandlercancel}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={submithandlercreate}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
