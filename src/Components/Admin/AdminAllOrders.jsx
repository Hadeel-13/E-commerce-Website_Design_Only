import { Stack } from "@mui/material";
import AdminCartItem from "./AdminCartItem";

export default function AdminAllOrders() {
    return (
        <>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                flexWrap={"wrap"}
                rowGap={5}
            >
                {Array.from(Array(11)).map((_, i) => (
                    <AdminCartItem key={i} />
                ))}
            </Stack>
        </>
    );
}
