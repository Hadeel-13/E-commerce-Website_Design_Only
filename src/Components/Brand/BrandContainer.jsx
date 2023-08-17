import BrandCard from "./BrandCard";
import brand1 from "../../assets/images/Brands/brand1.png";
import brand2 from "../../assets/images/Brands/brand2.png";
import brand3 from "../../assets/images/Brands/brand3.png";
const categories = [
    { image: brand1 },
    { image: brand3 },
    { image: brand2 },
    { image: brand1 },
    { image: brand3 },
    { image: brand2 },
    { image: brand2 },
];
export default function BrandContainer() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-between gap-3">
                {categories?.map((cat, index) => (
                    <BrandCard key={index} image={cat.image} />
                ))}
            </div>
        </>
    );
}
