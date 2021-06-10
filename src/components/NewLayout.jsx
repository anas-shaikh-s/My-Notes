import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import React from "react";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import NotesOutlinedIcon from "@material-ui/icons/NotesOutlined";
import { useHistory, useLocation } from "react-router";
import { deepPurple } from "@material-ui/core/colors";
import Hidden from "@material-ui/core/Hidden";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      backgroundColor: "#f9f9f9",
      padding: theme.spacing(3),
    },
    active: {
      backgroundColor: deepPurple[100],
    },
    drawerTitle: {
      padding: theme.spacing(3),
    },
  };
});

const NewLayout = ({ children, window }) => {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
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
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">Welcome to NotesApp</Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            className={classes.drawer}
            container={container}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            // to override the default classes of the elemets which is inside the drawer
            //here the paper element is inside the drawer by default mui
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};
NewLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NewLayout;
