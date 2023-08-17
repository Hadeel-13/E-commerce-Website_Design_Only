import PropTypes from "prop-types";
import SubTitle from "../../Components/Uitily/SubTitle";
import ProductCard from "../../Components/Product/ProductCard";
export default function ProductsHome({ title, btnTitle, path }) {
    return (
        <>
            <SubTitle title={title} btnTitle={btnTitle} path={path} className={"mt-12 mb-5"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-7 place-items-center">
                {Array.from(Array(6))
                    .slice(0, 4)
                    ?.map((cat, index) => (
                        <ProductCard key={index} />
                    ))}
            </div>
        </>
    );
}
ProductsHome.propTypes = {
    title: PropTypes.string.isRequired,
    btnTitle: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};
