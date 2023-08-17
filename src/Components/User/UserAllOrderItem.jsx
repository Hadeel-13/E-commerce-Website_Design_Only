import { Paper, Stack, Typography } from "@mui/material";
import UserOrderCard from "./UserOrderCard";

export default function UserAllOrderItem() {
    return (
        <>
        <Paper className="p-3 space-y-5">
            <Typography className="font-black text-lg">
                رقم الطلب #123
            </Typography>
            <Stack direction={"column"} gap={5}>
                {Array.from(Array(6)).map((_, i) => (
                    <UserOrderCard key={i} />
                ))}
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"} flexWrap={"wrap"}>
                <Typography>الحالة: <span className="text-gray-500 font-semibold">قيد التنفيذ</span></Typography>
                <Typography><span className="font-semibold">400000</span> ل.س</Typography>
            </Stack>
        </Paper>
            
        </>
    );
}
