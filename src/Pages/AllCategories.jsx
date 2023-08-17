import CategoryContainer from "../Components/Category/CategoryContainer";
import Container from "../Components/Uitily/Container";
import Paginate from "../Components/Uitily/Paginate";

export default function AllCategory() {
    return (
        <Container>
            <CategoryContainer />
            <Paginate />
        </Container>
    );
}
