import logo from "../../assets/images/Icons/logo.png";
import { Link } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import {
    Toolbar,
    Typography,
    InputBase,
    Box,
    AppBar,
} from "@mui/material";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import UserSideBar from "../../Components/User/UserSideBar";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "100%",
        },
    },
}));

export default function Navbar() {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="primary" enableColorOnDark>
                <Toolbar>
                    <AdminSideBar />
                    <Link to={"/"}>
                        <Typography
                            component={"img"}
                            src={logo}
                            alt="logo"
                            width={55}
                        />
                    </Link>
                    <Search>
                        <StyledInputBase
                            placeholder="ابحث ..."
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                    <Box
                        sx={{
                            flexGrow: 1,
                        }}
                    ></Box>                    
                    <UserSideBar/>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}
