import { Button, FilledInput, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CartCheckout() {
    return (
        <>
            <Stack direction={"column"} gap={3}>
                <Stack direction={"row"}>
                    <FilledInput fullWidth placeholder="كود الخصم" />
                    <Button
                        variant="contained"
                        sx={{ borderRadius: 0 }}
                    >
                        تطبيق
                    </Button>
                </Stack>
                <Typography className="border p-3 text-center">
                    33000 جنية
                </Typography>
                <Link to={"/order/paymethod"}>
                    <Button
                        variant="contained"
                        className="w-full"
                    >
                        اتمام الشراء
                    </Button>
                </Link>
            </Stack>
        </>
    );
}
