import { Rating, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Paginate from "../Uitily/Paginate";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
export default function RateContainer() {
    return (
        <>
            <Paper className="p-2 sm:p-3">
                <Stack
                    direction={"row"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    gap={2}
                >
                    <Typography className="font-bold text-lg">
                        التقييمات
                    </Typography>
                    <Rating
                        dir="ltr"
                        name="readOnly "
                        value={4.3}
                        precision={0.1}
                        size="small"
                        readOnly
                    />
                    <Typography className="font-normal text-xs text-gray-500">
                        {`(${160} تقييم)`}
                    </Typography>
                </Stack>
                <Stack direction={"column"} gap={6} className="mt-6 px-1 sm:px-6">
                    <RatePost />
                    <Stack direction={"column"} gap={1}>
                        {Array.from(Array(4)).map((_, i) => (
                            <RateItem key={i} />
                        ))}
                    </Stack>
                    <Paginate />
                </Stack>
            </Paper>
        </>
    );
}
