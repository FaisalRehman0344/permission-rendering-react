import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkIcon from '@mui/icons-material/Work';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import { Avatar } from '@mui/material';

const drawerWidth = 260;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    margin: 10,
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    justifyContent: 'space-evenly',
}));

const navItems = [
    {
        title: "Dashboard",
        icon: <DashboardIcon style={{ color: "white" }} />,
        link: "/dashboard"
    },
    {
        title: "Department",
        icon: <ConnectWithoutContactIcon style={{ color: "white" }} />,
        link: "/department"
    },
    {
        title: "Designation",
        icon: <WorkIcon style={{ color: "white" }} />,
        link: "/designation"
    },
    {
        title: "Employee",
        icon: <PersonIcon style={{ color: "white" }} />,
        link: "/employee"
    },
    {
        title: "Attendance",
        icon: <CheckCircleIcon style={{ color: "white" }} />,
        link: "/attendance"
    },
]

const App = function () {
    return (
        <Router>
            <Box sx={{ display: 'flex', boxSizing: 'border-box', overflow: 'hidden' }}>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={true}
                >
                    <DrawerHeader>
                        <Link to="/">
                            <img src="https://usindh.edu.pk/wp-content/uploads/2018/10/2logo-usindh.png" alt="image" style={{ marginTop: 5, width: "90%", height: "70px" }}></img>
                        </Link>
                    </DrawerHeader>
                    <List style={{ marginLeft: 5, marginRight: 5, marginTop: -15 }}>
                        {navItems.map((text, index) => (
                            <Link to={text["link"]}>
                                <ListItem button key={index} style={{ fontWeight: 20, boxShadow: "0 0 15px #1F51FF" }} className="mt-3 border border-primary bg-primary rounded text-light">
                                    <ListItemIcon>
                                        {text["icon"]}
                                    </ListItemIcon>
                                    <ListItemText primary={text["title"]} />
                                </ListItem>
                                {index == 0 ? <hr height="10px" /> : null}
                            </Link>
                        ))}
                    </List>
                </Drawer>
                <Main open={true}>
                    <DrawerHeader className="text-white pl-3 pr-3 bg-primary rounded" style={{height:"60px", boxShadow: "0 0 15px #1F51FF", display:"flex",justifyContent:"space-between",alignItems:"center"}} >
                            <h3>Attendance Management System</h3>
                            <Avatar style={{height:40, width:40}}></Avatar>
                    </DrawerHeader>
                    <Routes>
                        <Route exact path='/' element={<Dashboard />} />
                        <Route exact path='/dashboard' element={<Dashboard />} />
                        <Route path="*" element={<div>No route found</div>}/>
                    </Routes>
                </Main>
            </Box>
        </Router>
    );
}
export default App;