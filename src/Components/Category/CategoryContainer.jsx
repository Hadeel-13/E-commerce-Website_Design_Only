import CategoryCard from "../../Components/Category/CategoryCard";
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
    { image: clothe, title: "ملابس", background: "bg-myBlue-400" },
    { image: cat2, title: "", background: "bg-myYellow" },
    { image: labtop, title: "", background: "bg-myPink-300" },
    { image: sale, title: "تخفيضات", background: "bg-myYellow" },
    { image: pic, title: "", background: "bg-myBlue-400" },
    { image: clothe, title: "ملابس", background: "bg-myBlue-400" },
    { image: cat2, title: "", background: "bg-myYellow" },
    { image: labtop, title: "", background: "bg-myPink-300" },
    { image: sale, title: "تخفيضات", background: "bg-myYellow" },
    { image: pic, title: "", background: "bg-myBlue-400" },
];
export default function CategoryContainer() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-9">
            {categories?.map((cat,index) => (
                <CategoryCard
                    key={index}
                    image={cat.image}
                    title={cat.title}
                    background={cat.background}
                />
            ))}
        </div>
    );
}
