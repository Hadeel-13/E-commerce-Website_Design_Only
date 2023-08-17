import { Stack } from "@mui/material";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import SideFilter from "../../Components/Uitily/SideFilter";
import ProductsContainer from "../../Components/Product/ProductsContainer";
import Container from "../../Components/Uitily/Container";
export default function ShopProducts() {
    return (
        <>
            <Container>
                <CategoryHeader />
                <SearchCountResult title={"400 نتيجة بحث"} />
                {/* <Grid container spacing={1}>
                    <Grid item xs={12} lg={2}>
                        <SideFilter />
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <ProductsContainer />
                    </Grid>
                </Grid> */}
                <Stack
                    direction={"row"}
                    rowGap={5}
                    flexWrap={"wrap"}
                    sx={{
                        columnGap: { xs: 1, sm: 3 },
                        flexWrap: { xs: "wrap", sm: "nowrap" },
                    }}
                >
                    <SideFilter />
                    <ProductsContainer />
                </Stack>
            </Container>
        </>
    );
}
