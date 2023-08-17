// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "./SwiperHome.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../../../assets/images/Discount/slider1.png";
import slider2 from "../../../assets/images/Discount/slider2.png";
import slider3 from "../../../assets/images/Discount/slider3.png";
import slider4 from "../../../assets/images/Discount/slider4.png";
// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
const discounts = [
    {
        bgColor: "bg-myYellow",
        image: slider1,
        title: "هناك خصم كبير",
        subTitle: "خصم يصل ٥٠٪ عند شرائك",
    },
    {
        bgColor: "bg-myPink-200",
        image: slider2,
        title: "هناك خصم كبير",
        subTitle: "خصم يصل ٥٠٪ عند شرائك",
    },
    {
        bgColor: "bg-myYellow",
        image: slider3,
        title: "هناك خصم كبير",
        subTitle: "خصم يصل ٥٠٪ عند شرائك",
    },
    {
        bgColor: "bg-myBlue-400",
        image: slider4,
        title: "هناك خصم كبير",
        subTitle: "خصم يصل ٥٠٪ عند شرائك",
    },
];
export default function SwiperHome() {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay,Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                {discounts?.map((discount) => (
                    <SwiperSlide
                        key={discount.image}
                        className={`${discount.bgColor} h-full`}
                    >
                        <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
                            <div className="me-3">
                                <img
                                    src={discount.image}
                                    alt="image"
                                    width={400.53}
                                    height={296}
                                />
                            </div>
                            <div className="flex flex-col justify-items-center items-center text-[#915970] mb-2">
                                <div
                                    className="font-black text-lg md:text-3xl"
                                    data-swiper-parallax="-300"
                                >
                                    {discount.title}
                                </div>
                                <div
                                    className="font-medium"
                                    data-swiper-parallax="-200"
                                >
                                    {discount.subTitle}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}