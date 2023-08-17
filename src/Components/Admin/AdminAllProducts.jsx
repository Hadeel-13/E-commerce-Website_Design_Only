import AdminProductCard from "./AdminProductCard";
export default function AdminAllProducts() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-7 place-items-center">
                {Array.from(Array(11)).map((_, i) => (
                    <AdminProductCard key={i} />
                ))}
            </div>
        </>
    );
}
