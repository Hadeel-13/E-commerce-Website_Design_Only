import ProductCard from "../Product/ProductCard";
export default function UserFavoriteProducts() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-7 place-items-center">
                {Array.from(Array(11)).map((_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>
        </>
    );
}
