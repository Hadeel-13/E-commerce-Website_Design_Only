import WalletImage from "../../assets/images/svg/Wallet.svg";
import CustomDesign from "../../Components/Uitily/CustomDesign";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Paper,
} from "@mui/material";
export default function PayMethod() {
    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(true);
    }
    //
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState("");
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(" ");
        setError(false);
    };
    //
    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === "") {
            setHelperText("الرجاء تحديد خيار.");
            setError(true);
        } else {
            setError(false);
            handleClick();
        }
    };
    return (
        <>
            <CustomDesign image={WalletImage}>
                <form
                    className="my-auto mx-3 sm:mx-auto space-y-9 w-auto sm:w-96"
                    onSubmit={handleSubmit}
                >
                    <FormControl
                        error={error}
                        variant="standard"
                        className="w-full"
                        color="secondary"
                    >
                        <FormLabel
                            className="font-black mb-3"
                            id="demo-error-radios"
                        >
                            اختر طريقة الدفع
                        </FormLabel>
                        <Paper>
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                                value={value}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel
                                    value="best"
                                    control={<Radio color="secondary" />}
                                    label="الدفع عن طريق الفيزا"
                                />
                                <FormControlLabel
                                    value="worst"
                                    control={<Radio color="secondary" />}
                                    label="الدفع عند الاستلام"
                                />
                            </RadioGroup>
                        </Paper>
                        <FormHelperText className="text-right mb-3">
                            {helperText}
                        </FormHelperText>
                        <Typography className="border p-3 text-center mb-3">
                            33000 جنية
                        </Typography>
                        <LoadingButton
                            type="submit"
                            // onClick={handleClick}
                            loading={loading}
                            variant="contained"
                        >
                            اتمام الشراء
                        </LoadingButton>
                    </FormControl>
                </form>
            </CustomDesign>
        </>
    );
}
