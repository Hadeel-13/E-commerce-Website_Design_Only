import logo from "../../assets/images/Icons/logo.png";
import {
    Inbox,
    ProductionQuantityLimits,
    LoupeOutlined, 
    Category,
    PlaylistAddCircle,
    PostAdd,
    Segment,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
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
} from "@mui/material";
export default function AdminSideBar() {
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
            <Link to={"/"}>
                <Typography
                    component={"img"}
                    src={logo}
                    alt="logo"
                    width={75}
                    className="mx-auto my-7"
                />
            </Link>
            <Divider className="bg-white" />
            <List>
                {[
                    {
                        title: "إدارة الطلبات",
                        icon: <Inbox />,
                        link: "/admin/allorders",
                    },
                    {
                        title: "إدارة المنتجات",
                        icon: <ProductionQuantityLimits />,
                        link: "/admin/allproducts",
                    },
                    {
                        title: "أضف ماركة",
                        icon: <LoupeOutlined />,
                        link: "/admin/addbrand",
                    },
                    {
                        title: "أضف تصنيف",
                        icon: <Category />,
                        link: "/admin/addcategory",
                    },
                    {
                        title: "أضف تصنيف فرعي",
                        icon: <PlaylistAddCircle />,
                        link: "/admin/addsubcategory",
                    },
                    {
                        title: "أضف منتج",
                        icon: <PostAdd />,
                        link: "/admin/addproduct",
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
        </Box>
    );
    return (
        <div>
            <>
                <Button sx={{color:"white"}} onClick={toggleDrawer("right", true)}>
                    <Segment/>
                </Button>
                <Drawer
                    variant="temporary"
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                >
                    {list("right")}
                </Drawer>
            </>
        </div>
    );
}
