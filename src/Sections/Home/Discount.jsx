import laptops from '../../assets/images/Products/laptops.png'
export default function Discount() {
    return (
        <>
            <div className="bg-gradient-to-r from-slate-500 to-slate-800 shadow-lg rounded-2xl flex flex-wrap justify-around items-center py-3 mt-12 space-y-3">
                <div className="text-slate-200">خصم يصل حتى ٣٠٪ على أجهزة اللاب توب</div>
                <img className="h-36" src={laptops} alt="" />
            </div>
        </>
    );
}
