import { Button, Rating, Stack, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";

export default function RatePost() {
    return (
        <>
            <Stack direction={"column"} gap={1}>
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
                        size="medium"
                    />
                </Stack>
                <Typography
                    component={"textarea"}
                    className="w-full p-3 bg-gray-50 border border-gray-200 focus:outline-none hover:outline-none"
                />
                <Stack justifyContent={"end"} alignItems={"end"}>
                    <Button variant="contained">
                        أضف تعليق
                        <Send className="rotate-180 text-lg ms-1" />
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}
