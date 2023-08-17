
import AdminAllOrders from "../../Components/Admin/AdminAllOrders";
import Paginate from "../../Components/Uitily/Paginate";
import Container from "../../Components/Uitily/Container";
import { Typography } from "@mui/material";

export default function AdminAllOrdersPage() {
    return (
        <>
            <Container>
                <Typography className="font-black text-2xl">إدارة جميع الطلبات</Typography>
                <AdminAllOrders />
                <Paginate />
            </Container>
        </>
    );
}
