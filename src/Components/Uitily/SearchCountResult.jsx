import { Stack, Button, Menu, MenuItem, Fade, Typography } from "@mui/material";
import { useState } from "react";
import { Sort } from "@mui/icons-material";
import PropTypes from "prop-types";
export default function SearchCountResult({ title }) {
    //
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Stack direction="row" justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
                <Typography
                    sx={{
                        fontWeight: 800,
                    }}
                    className="text-2xl"
                >
                    {title}
                </Typography>
                <Typography component={"div"}>
                    <Button
                        id="fade-button"
                        aria-controls={open ? "fade-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        color="inherit"
                    >
                        <Sort className="me-1" />
                        الترتيب حسب
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            "aria-labelledby": "fade-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>الأكثر مبيعاً</MenuItem>
                        <MenuItem onClick={handleClose}>
                            الأعلى تقييماً
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            السعر من الأقل للأعلى
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            السعر من الأعلى للأقل
                        </MenuItem>
                    </Menu>
                </Typography>
            </Stack>
        </>
    );
}
SearchCountResult.propTypes = {
    title: PropTypes.string.isRequired,
};
