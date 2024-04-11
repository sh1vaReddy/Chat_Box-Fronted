import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import UserItem from '../shared/UserItem';
import { useState } from "react";
import samplechats from "../constans/Sampledata";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const [members, setMembers] = useState(samplechats);
  const [selectMembers, setSelectMembers] = useState([]);

  const selectMember = (id) => {
    setMembers(prev => prev.map(user =>
      user._id === id ? { ...user, isAdded: !user.isAdded } : user
    ));
    setSelectMembers(prev =>
      prev.includes(id) ? prev.filter(currentElement => currentElement !== id) : [...prev, id]
    );
  };

  const closeHandler = () => {
    setSelectMembers([]);
    setMembers([]);
  };

  const addMemberHandler = () => {
    closeHandler()
  };

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItem
                key={i.id}
                user={i}
                handler={() => selectMember(i.id)}
                isAdded={selectMembers.includes(i._id)}
              />
            ))
          ) : (
            <Typography display={"flex"} alignItems={"center"} justifyContent={"center"} variant="h6">No Friends</Typography>
          )}
        </Stack>
        <Stack direction={"row"} display={"flex"} justifyContent={"space-evenly"}>
          <Button variant="contained" disabled={isLoadingAddMember} onClick={addMemberHandler}>
            Add Friend
          </Button>
          <Button color="error" onClick={closeHandler}>Cancel</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
