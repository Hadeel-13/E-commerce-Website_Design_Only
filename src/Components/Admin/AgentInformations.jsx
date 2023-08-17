import { LoadingButton } from "@mui/lab";
import {
    Divider,
    FormControl,
    FormHelperText,
    FormLabel,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Information } from "../Uitily/CustomInputs";

export default function AgentInformations() {
    const [age, setAge] = useState("10");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    //
    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(true);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Stack gap={3}>
                <Typography className="font-bold text-lg">
                    تفاصيل العميل
                </Typography>
                <Divider variant="inset" />
                <div>
                    <Information
                        label={"الاسم"}
                        value={"هديل الابراهيم"}
                    />
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
                </div>
                <Divider variant="inset" />
                <Typography className="border p-3 text-center">
                    33000 ل.س
                </Typography>
                <Divider variant="inset" />
                <form onSubmit={handleSubmit}>
                    <FormControl fullWidth sx={{ minWidth: 120,mb:3 }}>
                        <FormLabel
                            className="mb-3"
                            htmlFor="state"
                            color="secondary"
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            حالة الطلب
                        </FormLabel>
                        <Select
                            value={age}
                            id="state"
                            color="secondary"
                            onChange={handleChange}
                            // displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                        >
                            <MenuItem value={10}>قيد التنفيذ</MenuItem>
                            <MenuItem value={20}>تمّ الانتهاء</MenuItem>
                            <MenuItem value={30}>إلغاء</MenuItem>
                        </Select>
                        <FormHelperText></FormHelperText>
                    </FormControl>
                    <LoadingButton
                        onClick={handleClick}
                        loading={loading}
                        variant="contained"
                        fullWidth
                    >
                        حفظ
                    </LoadingButton>
                </form>
            </Stack>
        </>
    );
}
