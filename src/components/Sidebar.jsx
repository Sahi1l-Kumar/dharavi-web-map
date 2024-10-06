import * as React from "react";
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WaterIcon from "@mui/icons-material/Water";
import HouseIcon from "@mui/icons-material/House";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import { useMediaQuery } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import FactoryIcon from "@mui/icons-material/Factory";
import DeleteIcon from "@mui/icons-material/Delete";
import ConstructionIcon from "@mui/icons-material/Construction";
import MapIcon from "@mui/icons-material/Map";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ setDrawerOpen }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setDrawerOpen(false);
  };

  const handleNavigation = (path) => {
    isMobile ? handleDrawerClose() : "";
    isMobile ? navigate(path) : (window.location.href = path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dharavi Map
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isMobile ? "100%" : drawerWidth,
            height: "100vh",
            boxSizing: "border-box",
          },
        }}
        variant={isMobile ? "temporary" : "persistent"}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("/")}>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Map" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          {[
            { text: "History", icon: <HistoryEduIcon />, path: "/history" },
            { text: "Industries", icon: <FactoryIcon />, path: "/industries" },
            {
              text: "Living Conditions & Sanitation",
              icon: <HouseIcon />,
              path: "/living",
            },
            { text: "Covid 19", icon: <CoronavirusIcon />, path: "/covid" },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleNavigation(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            {
              text: "Garbage Disposal",
              icon: <DeleteIcon />,
              path: "/garbage",
            },
            {
              text: "Water System & Drainage",
              icon: <WaterIcon />,
              path: "/water-drainage",
            },
            { text: "Diseases", icon: <CoronavirusIcon />, path: "/diseases" },
            {
              text: "Redevelopment Project",
              icon: <ConstructionIcon />,
              path: "/redevelopment",
            },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleNavigation(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph></Typography>
      </Main>
    </Box>
  );
}

Sidebar.propTypes = {
  setDrawerOpen: PropTypes.func.isRequired,
};
