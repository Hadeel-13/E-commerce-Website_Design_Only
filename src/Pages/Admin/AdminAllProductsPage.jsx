import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Paginate from "../../Components/Uitily/Paginate";
import Container from "../../Components/Uitily/Container";
import { Typography } from "@mui/material";

export default function AdminAllProductsPage() {
    return (
        <>
            <Container>
                <Typography className="font-black text-2xl">إدارة جميع المنتجات</Typography>
                <AdminAllProducts />
                <Paginate />
            </Container>
        </>
    );
}
