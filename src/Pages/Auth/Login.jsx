import loginImage from "../../assets/images/svg/login-amico.svg";
import { AccountCircle, Email, EnhancedEncryption } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { InputWithIcon } from "../../Components/Uitily/CustomInputs";
import { Fade, Grow, Paper, Typography } from "@mui/material";
import Container from "../../Components/Uitily/Container";
export default function Login() {
    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(true);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 my-7">
                    <Grow in={true}>
                        <Paper className="m-auto w-56 lg:w-[500px]">
                            <img src={loginImage} />
                        </Paper>
                    </Grow>
                    <Fade in={true}>
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
                                تسجيل الدخول
                            </Typography>
                            <InputWithIcon id="UserName" label="اسم المستخدم" type="text">
                                <AccountCircle sx={{ ml: 1, my: 0.5 }} />
                            </InputWithIcon>
                            <InputWithIcon
                                id="Email"
                                label="البريد الإلكتروني:"
                                type="email"
                            >
                                <Email sx={{ ml: 1, my: 0.5 }} />
                            </InputWithIcon>
                            <InputWithIcon id="password" label="كلمة السر:" type="password">
                                <EnhancedEncryption sx={{ ml: 1, my: 0.5 }} />
                            </InputWithIcon>
                            <LoadingButton
                                onClick={handleClick}
                                loading={loading}
                                variant="contained"
                                fullWidth
                            >
                                تسجيل الدخول
                            </LoadingButton>
                            <Typography className="text-sm text-gray-400 hover:text-gray-500">
                                <Link to={"/register"}>أليس لديك حساب؟</Link>
                            </Typography>
                        </form>
                    </Fade>
                </div>
            </Container>
        </>
    );
}
