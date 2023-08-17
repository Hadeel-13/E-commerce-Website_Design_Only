import { Stack } from "@mui/material";
import UserAllOrderItem from "./UserAllOrderItem";

export default function UserAllOrder() {
    return (
        <>
            <Stack direction={"column"} gap={5}>
                {Array.from(Array(2)).map((_, i) => (
                    <UserAllOrderItem key={i} />
                ))}
            </Stack>
        </>
    );
}
