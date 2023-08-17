import Container from "../../Components/Uitily/Container";
import { Typography, Paper, Grid, Slide } from "@mui/material";
import AdminOrderDetails from "../../Components/Admin/AdminOrderDetails";
import AgentInformations from "../../Components/Admin/AgentInformations";
export default function AdminOrderDetailsPage() {
    return (
        <>
            <Container>
                <Typography className="font-black text-2xl">
                    تفاصيل الطلب رقم <span>#123</span>
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <Slide in={true} direction="left">
                            <Paper className="sticky top-20 p-3">
                                <AgentInformations />
                            </Paper>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <AdminOrderDetails />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
