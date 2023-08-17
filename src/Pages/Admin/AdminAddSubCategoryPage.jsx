import addSubCategoryImage from "../../assets/images/svg/add_subcategory.svg";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import {
    Typography,
} from "@mui/material";
import { Select, TextField } from "../../Components/Uitily/CustomInputs";
import CustomDesign from "../../Components/Uitily/CustomDesign";
export default function AdminAddSubCategoryPage() {
    //
    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(true);
    }
    //
    const categories = ["الإلكترونيات", "ملابس"];
    const [category, setCategory] = useState(categories[0]);
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    //
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <CustomDesign image={addSubCategoryImage}>
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
                        أضف تصنيف فرعي جديد
                    </Typography>
                    <TextField
                        id="name-subcategory"
                        label="اسم التصنيف الفرعي"type="text" value={""}
                    />
                    <Select label="التصنيف الرئيسي" id={"category"} value={category} onChange={handleChange} array={categories}/>
                    <LoadingButton
                        onClick={handleClick}
                        loading={loading}
                        variant="contained"
                        fullWidth
                    >
                        حفظ
                    </LoadingButton>
                </form>
            </CustomDesign>
        </>
    );
}
