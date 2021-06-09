import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import NotesOutlinedIcon from "@material-ui/icons/NotesOutlined";
import { useHistory, useLocation } from "react-router";
const drawerWidth = 220;
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      backgroundColor: "#f4f4f4",
    },
    drawerTitle: {
      padding: theme.spacing(3),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
  };
});
const Layout = ({ children }) => {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  const menuItems = [
    {
      text: "Show note",
      icon: <NotesOutlinedIcon color="primary" />,
      link: "/",
    },
    {
      text: "Create note",
      icon: <BorderColorOutlinedIcon color="primary" />,
      link: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5">Welcome to NotesApp</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        // to override the default classes of the elemets which is inside the drawer
        //here the paper element is inside the drawer by default mui
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Typography variant="h5" className={classes.drawerTitle}>
          My Notes
        </Typography>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              onClick={() => {
                history.push(item.link);
              }}
              key={item.text}
              className={location.pathname === item.link ? classes.active : ""}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
