import { Stack } from "@mui/material";
import ProductCard from "../Product/ProductCard";
import Paginate from "../Uitily/Paginate";
export default function ProductsContainer() {
    return (
        <>
            <Stack gap={5} justifyContent={"center"}>
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    flexWrap={"wrap"}
                    rowGap={3}
                    columnGap={1}
                >
                    {Array.from(Array(10))
                        .slice(0, 6)
                        ?.map((cat, index) => (
                            <ProductCard key={index} />
                        ))}
                </Stack>
                <Paginate />
            </Stack>
        </>
    );
}
