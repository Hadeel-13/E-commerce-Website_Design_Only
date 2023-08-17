import { useState } from "react";
import addAddressImage from "../../assets/images/svg/add-address.svg";
import CustomDesign from "../../Components/Uitily/CustomDesign";
import { FormControl, FormLabel, Input, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Select, TextField } from "../../Components/Uitily/CustomInputs";

export default function UserEditAddress() {
    const [addressType, setAddressType] = useState("المنزل");
    const handleChange = (event) => {
        setAddressType(event.target.value);
    };
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
            <CustomDesign image={addAddressImage}>
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
                        تعديل العنوان
                    </Typography>
                    <Select
                        id="address-type"
                        label="نوع العنوان"
                        value={addressType}
                        array={["المنزل", "العمل", "آخر"]}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth>
                        <FormLabel
                            htmlFor="description-address"
                            color="secondary"
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            العنوان بالتفصيل
                        </FormLabel>
                        <Input
                            fullWidth
                            multiline
                            // maxRows={4}
                            rows={4}
                            size="medium"
                            color="secondary"
                            id="description-address"
                            inputProps={{ "aria-label": "description" }}
                            className="shadow-md border rounded-sm p-1"
                        />
                        {/* <FormHelperText id="my-helper-text"></FormHelperText> */}
                    </FormControl>
                    <TextField id="phone" label="رقم الجوال" type="number"/>
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
