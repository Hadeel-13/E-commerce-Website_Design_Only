import addBrandImage from "../../assets/images/svg/add_brand.svg";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { TextField, UploadImage } from "../../Components/Uitily/CustomInputs";
import CustomDesign from "../../Components/Uitily/CustomDesign";
export default function AdminAddBrandPage() {
    //
    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(true);
    }
    //Change Avtar
    const [avatar, setAvatar] = useState();
    const ChangeImage = (newAvater) => {
        setAvatar(newAvater);
    };
    //
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <CustomDesign image={addBrandImage}>
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
                        أضف ماركة جديدة
                    </Typography>
                    <UploadImage
                        id="image-brand"
                        label="صورة الماركة"
                        width={200}
                        height={125}
                        avatar={avatar}
                        ChangeImage={ChangeImage}
                    />
                    <TextField id="name-brand" label="اسم الماركة" type="text" value={""}/>
                    <LoadingButton
                        fullWidth
                        variant="contained"
                        loading={loading}
                        onClick={handleClick}
                    >
                        حفظ
                    </LoadingButton>
                </form>
            </CustomDesign>
        </>
    );
}
