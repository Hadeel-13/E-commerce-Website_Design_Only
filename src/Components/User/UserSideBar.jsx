import { useState } from "react";
import { Link } from "react-router-dom";
import {
    AccountCircle,
    Login,
    Logout,
    AppRegistration,
    AddShoppingCart,
    Favorite,
    ManageHistory,
    PersonPinCircle,
    AccountBox,
} from "@mui/icons-material";
import {
    Box,
    Drawer,
    Button,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    FormGroup,
    FormControlLabel,
    Switch,
    Avatar,
    Stack,
    Tooltip,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
const MenuNotLogin = [
    {
        title: "تسجيل الدخول",
        icon: <Login />,
        link: "/login",
    },
    {
        title: "إنشاء حساب جديد",
        icon: <AppRegistration />,
        link: "/register",
    },
];
export default function UserSideBar() {
    // Menu for Avatar Icon
    const [anchorElMenuAvtar, setAnchorElMenuAvtar] = useState(null);
    const handleClickMenuAvtar = (event) => {
        setAnchorElMenuAvtar(event.currentTarget);
    };
    const handleCloseMenuAvtar = () => {
        setAnchorElMenuAvtar(null);
    };
    // Auth
    const [auth, setAuth] = useState(true);
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{
                height: "100%",
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
                bgcolor: "primary.main",
                color: "white",
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {auth && (
                <Stack
                    direction={"row"}
                    justifyContent={"start"}
                    alignContent={"center"}
                    alignItems={"center"}
                    sx={{ m: 3 }}
                    gap={2}
                >
                    <Avatar sx={{ width: 50, height: 50, fontSize: 30 }}>
                        M
                    </Avatar>
                    <Stack>
                        <Typography className="font-bold">
                            مرحبا، هديل
                        </Typography>
                        <Typography className="font-light text-xs">
                            أهلا وسهلا بعودتك
                        </Typography>
                    </Stack>
                </Stack>
            )}
            <Divider className="bg-white" />
            <List>
                {[
                    {
                        title: "العربة",
                        icon: <AddShoppingCart />,
                        link: "/cart",
                    },
                    {
                        title: "إدارة الطلبات",
                        icon: <ManageHistory />,
                        link: "/user/allorders",
                    },
                    {
                        title: "قائمة المفضلة",
                        icon: <Favorite />,
                        link: "/user/favoriteproducts",
                    },
                    {
                        title: "الملف الشخصي",
                        icon: <AccountBox />,
                        link: "/user/profile",
                    },
                    {
                        title: "العناوين الشخصية",
                        icon: <PersonPinCircle />,
                        link: "/user/alladdresses",
                    },
                    {
                        title: "تسجيل الخروج",
                        icon: <Logout />,
                        link: "/login",
                    },
                ]?.map((_, index) => (
                    <div key={index}>
                        <Link to={_.link}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        ":hover": {
                                            bgcolor: "#ffffff42",
                                        },
                                    }}
                                >
                                    <ListItemIcon sx={{ color: "white" }}>
                                        {_.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{ textAlign: "right" }}
                                        primary={_.title}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        {index === 1 || index === 5 ? (
                            <Divider className="bg-white" />
                        ) : null}
                    </div>
                ))}
            </List>
            <FormGroup sx={{ width: 100 }}>
                <FormControlLabel
                    control={
                        <Switch
                            color="secondary"
                            checked={auth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    // label={auth ? "Logout" : "Login"}
                />
            </FormGroup>
        </Box>
    );
    return (
        <>
            {/* {auth && ( */}
            <Button
                sx={{ color: "white" }}
                onClick={toggleDrawer("left", true)}
            >
                <Avatar sx={{ width: 30, height: 30 }}>M</Avatar>
            </Button>
            <Drawer
                variant="temporary"
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
            >
                {list("left")}
            </Drawer>
            {/* )} */}
            {!auth && (
                <ThemeProvider theme={darkTheme}>
                    <Box>
                        <Tooltip title="">
                            <IconButton
                                onClick={handleClickMenuAvtar}
                                size="small"
                                // color="inherit"
                                aria-controls={
                                    open ? "account-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                sx={{ mr: 1 }}
                            >
                                <AccountCircle sx={{ color: "whitesmoke" }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorElMenuAvtar}
                            id="account-menu"
                            open={Boolean(anchorElMenuAvtar)}
                            onClose={handleCloseMenuAvtar}
                            onClick={handleCloseMenuAvtar}
                            transformOrigin={{
                                horizontal: "right",
                                vertical: "top",
                            }}
                            anchorOrigin={{
                                horizontal: "right",
                                vertical: "bottom",
                            }}
                        >
                            {MenuNotLogin.map((setting, i) => (
                                <Link key={i} to={setting.link}>
                                    <MenuItem
                                        onClick={handleCloseMenuAvtar}
                                        sx={{
                                            ":hover": {
                                                bgcolor: "#ffffff42",
                                            },
                                        }}
                                    >
                                        <Typography
                                            textAlign="center"
                                            sx={{
                                                color: "white",
                                            }}
                                        >
                                            {setting.icon}
                                            {"  "}
                                            {setting.title}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                </ThemeProvider>
            )}
        </>
    );
}
