import { Divider, Rating, Stack, Typography } from "@mui/material";

export default function RateItem() {
    return (
        <>
            <Stack
                direction={"row"}
                justifyContent={"start"}
                alignItems={"center"}
                flexWrap={"wrap"}
                gap={1}
            >
                <Typography className="font-medium">علي محمد</Typography>
                <Rating
                    dir="ltr"
                    name="rate"
                    defaultValue={2.5}
                    // value={4.3}
                    precision={0.5}
                    size="small"
                    readOnly
                />
            </Stack>
            <Typography>
                منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة
            </Typography>
            <Divider variant="fullWidth" className="my-3" />
        </>
    );
}
