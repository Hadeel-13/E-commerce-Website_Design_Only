import mobileImg from "../../assets/images/Products/mobile.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ProductGallery.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Paper, Typography } from "@mui/material";

export default function ProductGallery() {
    return (
        <>
            <Paper sx={{ width: { xs: "100%", sm: 350 } }}>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#3AA6B9",
                        "--swiper-pagination-color": "#3AA6B9",
                    }}
                    navigation={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper2"
                >
                    {Array.from(Array(6)).map((_, i) => (
                        <SwiperSlide key={i} className="shadow">
                            <Typography
                                component={"img"}
                                sx={{ height: { xs: 250, sm: 350 } }}
                                // width={300}
                                height={250}
                                src={mobileImg}
                                alt="image"
                            />{" "}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Paper>
        </>
    );
}
