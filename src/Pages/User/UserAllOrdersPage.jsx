import { Typography } from "@mui/material";
import Container from "../../Components/Uitily/Container";
import Paginate from "../../Components/Uitily/Paginate";
import UserAllOrder from "../../Components/User/UserAllOrder";

export default function UserAllOrdersPage() {
    return (
        <>
            <Container>
                <Typography className="font-black text-2xl">أهلاً هديل الابراهيم</Typography>
                <UserAllOrder />
                <Paginate />
            </Container>
        </>
    );
}
