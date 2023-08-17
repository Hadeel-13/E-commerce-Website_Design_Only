import { Stack } from "@mui/material";
import CartItem from "../Cart/CartItem";

export default function AdminOrderDetails() {
    return (
        <>
            <Stack
                direction="column"
                justifyContent="center"
                flexWrap={"wrap"}
                rowGap={5}
            >
                {Array.from(Array(11)).map((_, i) => (
                    <CartItem key={i} />
                ))}
            </Stack>
        </>
    );
}
