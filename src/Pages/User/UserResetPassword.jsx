import { Typography } from "@mui/material";
import resetPasswordImage from "../../assets/images/svg/reset-password.svg";
import CustomDesign from "../../Components/Uitily/CustomDesign";
import { TextField } from "../../Components/Uitily/CustomInputs";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

export default function UserResetPassword() {
    //
    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(true);
    }
    //
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <CustomDesign image={resetPasswordImage}>
                <form
                    className="my-auto mx-0 sm:mx-auto space-y-9 w-auto sm:w-96"
                    onSubmit={handleSubmit}
                >
                    <Typography className="font-black text-2xl">
                        تعديل كلمة السر
                    </Typography>
                    <TextField
                        id="current-password"
                        label="كلمة السر الحالية"
                        type="password"
                    />
                    <TextField
                        id="new-password"
                        label="كلمة السر الجديدة"
                        type="password"
                    />
                    <TextField
                        id="confirm-password"
                        label="تأكيد كلمة السر"
                        type="password"
                    />
                    <LoadingButton
                        fullWidth
                        onClick={handleClick}
                        loading={loading}
                        variant="contained"
                    >
                        حفظ
                    </LoadingButton>
                </form>
            </CustomDesign>
        </>
    );
}
