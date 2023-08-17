import addProductImage from "../../assets/images/svg/add_product.svg";
import Container from "../../Components/Uitily/Container";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import {
    Select,
    TextField,
    UploadImage,
} from "../../Components/Uitily/CustomInputs";
import {
    FormControl,
    FormLabel,
    Typography,
    Input,
    Autocomplete,
    TextField as InputA,
    Grow,
    Paper,
    Fade,
} from "@mui/material";
export default function AdminAddProductPage() {
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
    // Select
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
            <Container>
                <Typography
                    sx={{
                        fontWeight: 800,
                        fontSize: "2.25rem",
                        lineHeight: "2.5rem",
                    }}
                >
                    أضف منتج جديد
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-9">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 my-7">
                        <Fade in={true}>
                            <div className="my-auto mx-0 sm:mx-0 space-y-9 w-auto sm:w-96">
                                <UploadImage
                                    width={250}
                                    height={"100%"}
                                    id="image-product"
                                    label="صور المنتج"
                                    avatar={avatar}
                                    ChangeImage={ChangeImage}
                                />
                            </div>
                        </Fade>
                        <Grow in={true}>
                            <Paper className="m-auto hidden lg:block w-56 lg:w-[500px]">
                                <img src={addProductImage} />
                            </Paper>
                        </Grow>
                    </div>
                    <TextField
                        id="name-product"
                        label="اسم المنتج"
                        type="text"
                        value={""}
                    />
                    <FormControl fullWidth>
                        <FormLabel
                            htmlFor="description-product"
                            color="secondary"
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            وصف المنتج
                        </FormLabel>
                        <Input
                            fullWidth
                            id="description-product"
                            maxRows={4}
                            type="text"
                            value={""}
                            // rows={2}
                            multiline
                            size="medium"
                            color="secondary"
                            inputProps={{ "aria-label": "description" }}
                            className="shadow-md border rounded-sm p-1"
                        />
                        {/* <FormHelperText id="my-helper-text"></FormHelperText> */}
                    </FormControl>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-7">
                        <TextField
                            id="price-before-discount"
                            label="سعر المنتج قبل الخصم"
                            type="text"
                            value={""}
                        />
                        <TextField
                            id="price-product"
                            label="سعر المنتج"
                            type="text"
                            value={""}
                        />
                        <Select
                            id="category"
                            label="الصنف الرئيسي"
                            onChange={handleChange}
                            value={category}
                            array={categories}
                        />
                        <TextField
                            id="brand-product"
                            label="الماركة"
                            type="text"
                            value={""}
                        />
                    </div>
                    <div>
                        <FormLabel
                            className="mb-5"
                            htmlFor="H"
                            color="secondary"
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            التصنيفات الفرعية
                        </FormLabel>
                        <Autocomplete
                            multiple
                            id="tags-standard"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            // defaultValue={[top100Films[0].title]}
                            renderInput={(params) => (
                                <InputA
                                    {...params}
                                    id="H"
                                    label=""
                                    size="small"
                                    color="secondary"
                                    variant="outlined"
                                    placeholder=" اختر ..."
                                    className="mt-3 shadow-md"
                                />
                            )}
                        />
                    </div>
                    <div className="flex justify-end">
                        <LoadingButton
                            variant="contained"
                            onClick={handleClick}
                            loading={loading}
                        >
                            حفظ
                        </LoadingButton>
                    </div>
                </form>
            </Container>
        </>
    );
}
const top100Films = [
    { title: "رجالي" },
    { title: "نسائي" },
    { title: "ولادي" },
];
