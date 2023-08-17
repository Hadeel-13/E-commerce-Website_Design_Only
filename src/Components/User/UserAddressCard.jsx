import { DeleteOutline, EditNote } from "@mui/icons-material";
import {
    Divider,
    IconButton,
    Paper,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Information } from "../Uitily/CustomInputs";

export default function UserAddressCard() {
    return (
        <>
            <Paper className="p-3">
                <Stack gap={3}>
                    <div>
                        <Stack
                            gap={2}
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            flexWrap={"wrap"}
                            sx={{ width: "100%" }}
                        >
                            <Typography className="font-bold">
                                المنزل
                            </Typography>
                            <div>
                                <Link to={"/user/edit-address"}>
                                    <Tooltip
                                        title="تعديل"
                                        placement="top-start"
                                    >
                                        <IconButton>
                                            <EditNote />
                                        </IconButton>
                                    </Tooltip>
                                </Link>
                                <Tooltip title="حذف" placement="top-start">
                                    <IconButton
                                        sx={{
                                            ":hover": {
                                                color: "#d32f2f",
                                            },
                                        }}
                                    >
                                        <DeleteOutline />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </Stack>
                        <Divider variant="inset" />
                    </div>
                    <Information label="العنوان" value="سوريا، حلب، 20000" /> 
                    <Information label="رقم الجوال" value="+963 998 630 508" href={"tel:+963998630508"}/> 
                </Stack>
            </Paper>
        </>
    );
}
