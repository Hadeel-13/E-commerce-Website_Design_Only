// import WelcomeSection from '../Sections/Home/WelcomeSection';
import { Container } from '@mui/material';
import CategoryHome from '../Sections/Home/CategoryHome';
import SwiperHome from '../Sections/Home/SwiperHome/SwiperHome';
import ProductsHome from '../Sections/Home/ProductsHome';
import Discount from '../Sections/Home/Discount';
import BrandHome from '../Sections/Home/BrandHome';
export default function Home() {
    return (
        <>
            <SwiperHome />
            <Container maxWidth={'lg'}>
                <CategoryHome />
                <ProductsHome title={'الأكثر مبيعاً'} btnTitle={'المزيد'} path={'/products'} />
                <Discount />
                <ProductsHome title={'أحدث الأزياء'} btnTitle={'المزيد'} path={'/products'} />
                <BrandHome />
            </Container>
        </>
    );
}
