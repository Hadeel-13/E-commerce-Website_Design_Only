import { Typography } from "@mui/material";
import Container from "../../Components/Uitily/Container";
import Paginate from "../../Components/Uitily/Paginate";
import UserFavoriteProducts from "../../Components/User/UserFavoriteProducts";

export default function UserFavoriteProductsPage() {
    return (
        <>
            <Container>
                <Typography className="font-black text-2xl">
                    قائمة المفضلة
                </Typography>
                <UserFavoriteProducts />
                <Paginate />
            </Container>
        </>
    );
}
