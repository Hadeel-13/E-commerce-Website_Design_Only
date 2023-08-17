import {
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Input,
    Stack,
    Typography,
} from "@mui/material";
export default function SideFilter() {
    return (
        <Stack
            sx={{
                minWidth: { xs: "100%", sm: 200 },
            }}
            direction={"column"}
        >
            {["الفئة", "الماركة"].map((label) => (
                <>
                    <Typography key={label} sx={{ fontWeight: 700 }}>
                        {label}
                    </Typography>
                    {Array.from(Array(3)).map((_,) => (
                        <FormGroup key={_}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="secondary"
                                        defaultChecked
                                        size="small"
                                    />
                                }
                                label="Label"
                                sx={{ color: "GrayText" }}
                            />
                        </FormGroup>
                    ))}
                    <Divider sx={{ my: 2 }} />
                </>
            ))}
            <Typography sx={{ fontWeight: 700 }}>السعر</Typography>
            {[
                { label: "من", id: "priceFrom" },
                { label: "إلى", id: "priceTo" },
            ]?.map((_, i) => (
                <FormControl key={i}>
                    <Stack
                        direction={"row"}
                        alignItems={"end"}
                        justifyContent={"center"}
                    >
                        <FormLabel
                            htmlFor={_.id}
                            sx={{
                                fontWeight: 700,
                            }}
                            color="secondary"
                            className="me-3 mb-1"
                        >
                            {_.label}
                        </FormLabel>
                        <Input
                            color="secondary"
                            inputProps={{ "aria-label": "description" }}
                            className=""
                            id={_.id}
                            type="number"
                        />
                    </Stack>
                    {/* <FormHelperText id="my-helper-text"></FormHelperText> */}
                </FormControl>
            ))}
        </Stack>
    );
}