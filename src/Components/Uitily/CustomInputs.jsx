import upload from "../../assets/images/Icons/avatar.png";
import PropTypes from "prop-types";
import { useRef } from "react";
import {
    Input,
    FormControl,
    FormLabel,
    Stack,
    Typography,
    Button,
    FormHelperText,
    MenuItem,
    Select as SelectMUI,
} from "@mui/material";
export function Information({ label, href, value }) {
    return (
        <Typography className="mb-2" color={"GrayText"}>
            {label}:{" "}
            <Typography
                dir="ltr"
                href={href}
                component={"a"}
                className="font-medium"
                color={"ActiveBorder"}
            >
                {value}
            </Typography>
        </Typography>
    );
}
Information.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    value: PropTypes.string.isRequired,
}; //
export function InputWithIcon({ id, label, value, type, children }) {
    return (
        <>
            <FormControl fullWidth>
                <FormLabel
                    className="mb-3"
                    htmlFor={id}
                    sx={{
                        fontWeight: 700,
                    }}
                    color="secondary"
                >
                    {label}
                </FormLabel>
                <Stack direction={"row"} alignItems={"flex-end"}>
                    {children}
                    <Input
                        id={id}
                        value={value}
                        type={type}
                        fullWidth
                        color="secondary"
                        className="shadow px-1"
                        inputProps={{ "aria-label": "description" }}
                    />
                </Stack>
                {/* <FormHelperText id="my-helper-text"></FormHelperText> */}
            </FormControl>
        </>
    );
}
InputWithIcon.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.oneOf(["text", "password", "email", "number"]).isRequired,
    children: PropTypes.any.isRequired,
}; //
export function TextField({ id, label, value, type }) {
    return (
        <>
            <FormControl fullWidth>
                <FormLabel htmlFor={id} color="secondary" className="font-bold">
                    {label}
                </FormLabel>
                <Input
                    fullWidth
                    id={id}
                    value={value}
                    type={type}
                    color="secondary"
                    inputProps={{ "aria-label": "description" }}
                    className="shadow-md border rounded-sm p-1"
                />
                {/* <FormHelperText id="my-helper-text"></FormHelperText> */}
            </FormControl>
        </>
    );
}
TextField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.oneOf(["text", "password", "email", "number"]).isRequired,
}; //
export function Select({ id, label, value, onChange, array }) {
    return (
        <>
            <FormControl fullWidth sx={{ minWidth: 120 }}>
                <FormLabel
                    className="mb-4"
                    htmlFor={id}
                    color="secondary"
                    sx={{
                        fontWeight: 700,
                    }}
                >
                    {label}
                </FormLabel>
                <SelectMUI
                    // id={id}
                    size="small"
                    value={value}
                    labelId={id}
                    color="secondary"
                    onChange={onChange}
                    className="shadow-md"
                    // displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                >
                    {array?.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                            {cat}
                        </MenuItem>
                    ))}
                </SelectMUI>
                <FormHelperText></FormHelperText>
            </FormControl>
        </>
    );
}
Select.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    array: PropTypes.any.isRequired,
}; //
export function UploadImage({ id, label, avatar, ChangeImage, width, height }) {
    //Change Avtar
    const inputFile = useRef(null);
    const fileSelectedHandler = (event) => {
        // console.log(event.target.files[0]);
        ChangeImage(event.target.files[0]);
    };
    return (
        <>
            <FormControl fullWidth>
                <Stack
                    direction={"column"}
                    alignContent={"center"}
                    alignItems={"center"}
                    gap={3}
                >
                    <FormLabel
                        htmlFor={id}
                        color="secondary"
                        className="font-bold self-start"
                    >
                        {label}
                    </FormLabel>
                    <input
                        id={id}
                        type="file"
                        ref={inputFile}
                        className="shadow px-1 hidden"
                        onChange={fileSelectedHandler}
                        accept=".jpg,.png,.jpeg,.gif,.svg"
                    />
                    <Typography
                        width={avatar ? width : 200}
                        height={avatar ? height : 120}
                        alt="image"
                        component={"img"}
                        className={`${avatar ? "shadow border" : ""}`}
                        src={avatar ? URL.createObjectURL(avatar) : upload}
                    />
                    <Button
                        size="small"
                        variant="outlined"
                        sx={{ width: avatar ? width : 200 }}
                        onClick={() => {
                            // console.log(inputFile.current);
                            inputFile.current.click();
                        }}
                    >
                        اختر صورة
                    </Button>
                </Stack>
                {/* <FormHelperText id="my-helper-text"></FormHelperText> */}
            </FormControl>
        </>
    );
}
UploadImage.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    avatar: PropTypes.object,
    ChangeImage: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.any.isRequired,
}; //
