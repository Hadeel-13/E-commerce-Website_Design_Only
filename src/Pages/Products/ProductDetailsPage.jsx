import { Stack } from "@mui/material";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductGallery from "../../Components/Product/ProductGallery";
import ProductDetails from "../../Components/Product/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import ProductsHome from "../../Sections/Home/ProductsHome";
import Container from "../../Components/Uitily/Container";

export default function ProductDetailsPage() {
    return (
        <>
            <Container>
                <CategoryHeader />
                <Stack
                    direction={"row"}
                    rowGap={5}
                    sx={{
                        columnGap: { xs: 1, sm: 7 },
                        flexWrap: { xs: "wrap", md: "nowrap" },
                        justifyContent: { xs: "center", md: "start" },
                    }}
                >
                    <ProductGallery />
                    <ProductDetails />
                </Stack>
                <RateContainer />
                <ProductsHome title={"منتجات قد تعجبك"} btnTitle="" path={"/products"} />
            </Container>
        </>
    );
}
