import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CachedOutlinedIcon from "@material-ui/icons/CachedOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import HomePage from "../HomePage/HomePage";
import PostponementPage from "../PostponementPage/PostponementPage";
import Progress from "../Progress/Progress";
import StaffHomePage from "../StaffHomePage/StaffHomePage";
import RequestApproval from "../RequestApproval/RequestApproval";
import Signin from "../Signin/Signin";
// import Register from "../Register/Register";
import { useState } from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function StudentHome({ user, changeRoute }) {
  const [localRoute, setLocalRoute] = useState("Home");
  const [info, setInfo] = useState({});

  const updateInfo = (result) => {
    setInfo({ ...result });
  };

  const handleLocalRoute = (localRoute) => {
    setLocalRoute(localRoute);
  };

  const handleLogout = () => {
    changeRoute("Signin");
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Postponement Request Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        {!user.role_id ? (
          <List>
            <ListItem button onClick={() => handleLocalRoute("Home")}>
              <ListItemIcon>
                <HomeOutlinedIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>

            <ListItem button onClick={() => handleLocalRoute("Postponement")}>
              <ListItemIcon>
                <CreateNewFolderIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Postponement"} />
            </ListItem>

            <ListItem button onClick={() => handleLocalRoute("View Progress")}>
              <ListItemIcon>
                <CachedOutlinedIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"View Progress"} />
            </ListItem>

            <ListItem button onClick={handleLogout} > 
              <ListItemIcon>
                <ExitToAppOutlinedIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Log Out"} />
            </ListItem>
          </List>
        ) : (
          <List>
            <ListItem button onClick={() => handleLocalRoute("Staff Home")}>
              <ListItemIcon>
                <HomeOutlinedIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Staff Home"} />
            </ListItem>
            <ListItem
              button
              onClick={() => handleLocalRoute("Approve/Deny Request")}
            >
              <ListItemIcon>
                <DescriptionOutlinedIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Approve/Deny Request"} />
            </ListItem>
            <ListItem button onClick={handleLogout} >
              <ListItemIcon>
                <ExitToAppOutlinedIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Log Out"} />
            </ListItem>
            {/* <ListItem button onClick={() => handleLocalRoute("Register user")}>
              <ListItemIcon>
                <ExitToAppOutlinedIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Register user"} />
            </ListItem> */}
          </List>
        )}

        {/* <Divider /> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {localRoute === "Home" ? (
          <HomePage />
        ) : localRoute === "Postponement" ? (
          <PostponementPage updateInfo={updateInfo} />
        ) : localRoute === "View Progress" ? (
          <Progress info={info} />
        ) : localRoute === "Staff Home" ? (
          <StaffHomePage />
        ) : localRoute === "Approve/Deny Request" ? (
          <RequestApproval />
        ) : (
             <Signin />
        )
          // : (
          //   <Register />
          // )
        }
      </main>
    </div>
  );
}
