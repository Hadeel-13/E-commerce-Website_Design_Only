import profileImage from "../../assets/images/svg/personal_info.svg";
import { EditNote } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CustomDesign from "../../Components/Uitily/CustomDesign";
import { Information } from "../../Components/Uitily/CustomInputs";
import {
    Button,
    Divider,
    IconButton,
    Paper,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
export default function UserProfilePage() {
    return (
        <>
            <CustomDesign image={profileImage} Class={"full sm:w-56"}>
                <Paper className="my-auto mx-0 space-y-9 w-auto sm:w-full p-3">
                    <Stack gap={3}>
                        <Stack
                            gap={2}
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            flexWrap={"wrap"}
                            sx={{ width: "100%" }}
                        >
                            <Typography className="font-black text-lg sm:text-2xl">
                                الملف الشخصي
                            </Typography>
                            <Link to={"/user/edit-address"}>
                                <Tooltip title="تعديل">
                                    <IconButton>
                                        <EditNote />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </Stack>
                        <Divider variant="inset" />
                        <Information label={"الاسم"} value={"هديل الابراهيم"} />
                        <Information
                            label={"رقم الجوال"}
                            href={"tel:+963998630508"}
                            value={"+963 998 630 508"}
                        />
                        <Information
                            label={"الإيميل"}
                            href={"mailto:mira13ha@gmail.com"}
                            value={"mira13ha@gmail.com"}
                        />
                        <Divider />
                        <Link to={"/user/reset-password"}>
                            <Button variant="outlined">تعديل كلمة السر</Button>
                        </Link>
                    </Stack>
                </Paper>
            </CustomDesign>
        </>
    );
}
