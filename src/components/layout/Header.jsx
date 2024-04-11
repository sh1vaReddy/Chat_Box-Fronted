import {
  AppBar,
  Avatar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import {Link} from 'react-router-dom'
import {
  Menu,
  Search,
  Add,
  Group,
  Logout,
  NotificationAdd,
} from "@mui/icons-material";
import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";

const SerachDiloga = lazy(() => import("../specific/Serach"));
const Notification = lazy(() => import("../specific/Notification"));
const NewGroup = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const [isMobile, setisMobile] = useState(false);
  const [isSerach, setisSerach] = useState(false);
  const [isGroup, setisGroup] = useState(false);
  const [isNotification, setisNotification] = useState(false);
  const nav = useNavigate();

  const handleMobile = () => {
    setisMobile((prev) => !prev);
  };

  const addOption = () => {
    setisGroup((prev) => !prev);
  };

  const searchDialogue = () => {
    setisSerach((prev) => !prev);
  };

  const openNotification = () => {
    setisNotification((prev) => !prev);
  };

  const groupage = () => {
    nav("/Groups");
  };

  const Logouthandler = () => {
    console.log("logout");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton component={Link} to="/profile">
              <Avatar sx={{width:40,height:40}}>
                </Avatar>
            </IconButton>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <Menu />
              </IconButton>
            </Box>

            <Box>
              <IconBtn
                title={"Search"}
                icon={<Search />}
                onClick={searchDialogue}
              />

              <IconBtn
                title={"Create a new group"}
                icon={<Add />}
                onClick={addOption}
              />
              <IconBtn
                title={"Create an add group"}
                icon={<Group />}
                onClick={groupage}
              />
              <IconBtn
                title={"Notifications"}
                icon={<NotificationAdd />}
                onClick={openNotification}
              />

              <IconBtn
                title={"Logout"}
                icon={<Logout />}
                onClick={Logouthandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSerach && (
        <Suspense fallback={<Backdrop open />}>
          <SerachDiloga />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <Notification />
        </Suspense>
      )}

      {isGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroup />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
