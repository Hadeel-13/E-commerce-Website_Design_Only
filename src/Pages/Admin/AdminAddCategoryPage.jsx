import addCategoryImage from "../../assets/images/svg/add_category.svg";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { TextField, UploadImage } from "../../Components/Uitily/CustomInputs";
import CustomDesign from "../../Components/Uitily/CustomDesign";
export default function AdminAddCategoryPage() {
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
            <CustomDesign image={addCategoryImage}>
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
                        أضف تصنيف جديد
                    </Typography>
                    <UploadImage
                        width={250}
                        height={"100%"}
                        id="image-category"
                        label="صورة التصنيف"
                        avatar={avatar}
                        ChangeImage={ChangeImage}
                    />
                    <TextField id="name-category" label="اسم التصنيف" type="text" value={""}/>
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
