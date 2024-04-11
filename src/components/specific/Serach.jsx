import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material';
import { useInputValidation } from '6pp'; // Assuming this is a custom hook you're using
import { Search } from '@mui/icons-material';
import UserItem from '../shared/UserItem';
import { useState } from 'react';
import sampleusers from '../constans/sample.users';

const SearchComponent = () => {

  const search = useInputValidation(""); // Assuming this custom hook is correctly defined

  const isLoadingSendFriendRequest=false;
  const[users,setusers]=useState(sampleusers)

  const addFrinedhandler = (id) =>
  {
    console.log("addfriend",id)
  }

  return (
    <Dialog open>
      <Stack padding="2rem" direction="column" width="25rem">

        <DialogTitle textAlign="center">Find People</DialogTitle>
        
        <TextField 
          label="Search" 
          value={search.value} 
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
        />
        
        <List>
          {users.map((i) => (
            <UserItem user={i} key={i._id}  handler={addFrinedhandler} handlersLoading={isLoadingSendFriendRequest}/>
          ))}
        </List>

      </Stack>
    </Dialog>
  );
}

export default SearchComponent;
