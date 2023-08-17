import signUpImage from "../../assets/images/svg/Signup-amico.svg";
import { AccountCircle, Email, EnhancedEncryption } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { InputWithIcon } from "../../Components/Uitily/CustomInputs";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Typography} from "@mui/material";
import CustomDesign from "../../Components/Uitily/CustomDesign";
export default function Register() {
    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(true);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <CustomDesign image={signUpImage}>
                <form
                    className="my-auto mx-0 sm:mx-auto space-y-9 w-auto sm:w-96"
                    onSubmit={handleSubmit}
                >
                    <Typography
                        sx={{
                            fontWeight: 800,
                            fontSize: "2.25rem",
                            lineHeight: "2.5rem",
                        }}
                    >
                        إنشاء حساب جديد
                    </Typography>
                    <InputWithIcon id="UserName" label="اسم المستخدم" type={"text"}>
                        <AccountCircle sx={{ ml: 1, my: 0.5 }} />
                    </InputWithIcon>
                    <InputWithIcon id="Email" label="البريد الإلكتروني" type={"email"}>
                        <Email sx={{ ml: 1, my: 0.5 }} />
                    </InputWithIcon>
                    <InputWithIcon id="password" label="كلمة السر" type={"password"}>
                        <EnhancedEncryption sx={{ ml: 1, my: 0.5 }} />
                    </InputWithIcon>
                    <LoadingButton
                        onClick={handleClick}
                        loading={loading}
                        variant="contained"
                        fullWidth
                    >
                        إنشاء حساب جديد
                    </LoadingButton>
                    <Typography className="text-sm text-gray-400 hover:text-gray-500">
                        <Link to={"/login"}>هل لديك حساب مسبقاً؟</Link>
                    </Typography>
                </form>
            </CustomDesign>
        </>
    );
}
