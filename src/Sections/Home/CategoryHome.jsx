import CategoryCard from "../../Components/Category/CategoryCard";
import SubTitle from "../../Components/Uitily/SubTitle";
import clothe from "../../assets/images/Category/clothe.png";
import cat2 from "../../assets/images/Category/cat2.png";
import labtop from "../../assets/images/Category/labtop.png";
import sale from "../../assets/images/Category/sale.png";
import pic from "../../assets/images/Category/pic.png";
const categories = [
    { image: clothe, title: "ملابس", background: "bg-myBlue-400" },
    { image: cat2, title: "", background: "bg-myYellow" },
    { image: labtop, title: "", background: "bg-myPink-300" },
    { image: sale, title: "تخفيضات", background: "bg-myYellow" },
    { image: pic, title: "", background: "bg-myBlue-400" },
];
export default function CategoryHome() {
    return (
        <>
            <SubTitle title={"التصنيفات"} btnTitle={"المزيد"} path={'/allcategories'} className={"mt-12 mb-5"} />
            <div className="flex flex-row flex-wrap justify-around items-center gap-5">
                {categories?.map((cat) => (
                    <CategoryCard
                        key={cat.image}
                        image={cat.image}
                        title={cat.title}
                        background={cat.background}
                    />
                ))}
            </div>
        </>
    );
}