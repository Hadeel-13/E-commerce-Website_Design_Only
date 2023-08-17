import BrandContainer from "../Components/Brand/BrandContainer";
import Container from "../Components/Uitily/Container";
import Paginate from "../Components/Uitily/Paginate";

export default function AllBrands() {
    return (
        <>
            <Container>
                <BrandContainer />
                <Paginate />
            </Container>
        </>
    );
}
