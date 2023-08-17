import { Typography, Grid, Paper, Stack, Slide } from "@mui/material";
import Container from "../../Components/Uitily/Container";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";

export default function CartPage() {
    return (
        <>
            <Container>
                <Typography className="font-black text-2xl">
                    عربة التسوق
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} lg={9}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            flexWrap={"wrap"}
                            rowGap={3}
                        >
                            {Array.from(Array(8)).map((_, i) => (
                                <CartItem key={i} />
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Slide in={true} direction="right">
                            <Paper className="sticky top-20 p-3">
                                <CartCheckout />
                            </Paper>
                        </Slide>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
