import SubTitle from "../../Components/Uitily/SubTitle";
import brand1 from "../../assets/images/Brands/brand1.png";
import brand2 from "../../assets/images/Brands/brand2.png";
import brand3 from "../../assets/images/Brands/brand3.png";
import BrandCard from "../../Components/Brand/BrandCard";
const categories = [
    { image: brand1 },
    { image: brand3 },
    { image: brand2 },
    { image: brand1 },
    { image: brand3 },
    { image: brand2 },
    { image: brand2 },
    { image: brand2 },
    { image: brand2 },
];
export default function BrandHome() {
    return (
        <>
            <SubTitle
                title={"أشهر الماركات"}
                btnTitle={"المزيد"}
                path={"/allbrands"}
                className={"mt-12 mb-5"}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12 flex-wrap">
                {categories.slice(0, 6)?.map((cat, index) => (
                    <BrandCard key={index} image={cat.image} />
                ))}
            </div>
        </>
    );
}
