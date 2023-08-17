import mobile from "../../assets/images/Products/mobile.png";
import { Box, Divider, Grow, Rating, Stack, Typography } from "@mui/material";

export default function UserOrderCard() {
    return (
        <Grow in={true}>
            <Box>
                <Stack
                    direction={"row"}
                    gap={1}
                    sx={{
                        flexWrap: { xs: "wrap", sm: "nowrap" },
                        justifyContent: { xs: "center", sm: "start" },
                        maxWidth: "100%",
                        mb: 1,
                    }}
                >
                    <div className="h-28 w-28 my-auto">
                        <Typography width={"100%"} height={"100%"} component={"img"} src={mobile} />
                    </div>
                    <Stack
                        gap={1}
                        justifyContent={"start"}
                        alignContent={"start"}
                        direction={"column"}
                        className="w-full"
                        flexWrap={"wrap"}
                    >
                        <Typography className="font-bold text-gray-500">
                            الإلكترونيات
                        </Typography>
                        <Divider variant="inset" />
                        <Typography>
                            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE
                            مع تطبيق فيس
                        </Typography>
                        <Rating
                            className="self-start"
                            dir="ltr"
                            name="rate"
                            defaultValue={2.5}
                            // value={4.3}
                            precision={0.5}
                            size="small"
                            readOnly
                        />
                        <Typography className="font-bold text-gray-500">
                            الماركة: <span className="text-black">آبل</span>
                        </Typography>
                    </Stack>
                </Stack>
                <Divider variant="inset" className="shadow" />
            </Box>
        </Grow>
    );
}
