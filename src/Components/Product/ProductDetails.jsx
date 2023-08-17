import { AddShoppingCart } from "@mui/icons-material";
import { Box, Stack, Typography, Rating, Button } from "@mui/material";
import PropTypes from "prop-types";
export default function ProductDetails() {
    return (
        <>
            <Stack rowGap={3} alignItems={"start"}>
                <Information
                    lebel={"الالكترونيات:"}
                    description={
                        "آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر"
                    }
                />
                <Rating
                    dir="ltr"
                    name="readOnly "
                    value={4.3}
                    precision={0.1}
                    size="medium"
                    readOnly
                />
                <Information lebel={"الماركة:"} description={"سامسنوج"} />
                <Stack direction={"row"} flexWrap={"wrap"} gap={3}>
                    <ProductColor bgcolor="GrayText" />
                    <ProductColor bgcolor="White" />
                    <ProductColor bgcolor="black" />
                </Stack>
                <Information
                    lebel={"المواصفات:"}
                    description={
                        "يتميز بوجود بطاقة SIM مزدوجة بطاقة فعلية وبطاقة e-SIM يمكنك فتح قفل هاتفك الآيفون وتسجيل الدخول إلى التطبيقات والحسابات وغيرها بسهولة، وتعدّ خاصية معرَف الوجه الأسرع والأكثر أماناً للمصادقة عن طريق بصمة الوجه يتميز بشريحة A12 بايونيك والتي تعد أذكى وأقوى شريحة في الهواتف الذكية شكلت أكثر كاميرات العالم شهرة عصراً جديداً من التصوير الفوتوغرافي حيث يعمل جهاز الاستشعار الابتكاري بخاصية ISP والمحرك العصبي، ما يمكّنك من التقاط صور لم يسبق لها مثيل كاميرا بعدسة واحدة تجعل الأشخاص الموجودين في الأمام في نطاق تركيز دقيق على عكس نطاق الخلفية غير الواضح نظرة عامة"
                    }
                />
                <Stack direction={"row"} columnGap={3}>
                    <Button variant="outlined">34000 جنيه</Button>
                    <Button variant="contained">
                        <AddShoppingCart className="text-lg me-1" />
                        أضف للعربة
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}
function ProductColor({ bgcolor }) {
    return (
        <Box
            sx={{
                width: 30,
                height: 30,
                border: 1,
                borderColor: "GrayText",
                borderRadius: "50%",
                bgcolor: bgcolor,
            }}
        />
    );
}
ProductColor.propTypes = {
    bgcolor: PropTypes.string.isRequired,
};
function Information({ lebel, description }) {
    return (
        <Box>
            <Typography className="text-gray-500 text-lg">{lebel}</Typography>
            <Typography className="text-justify">{description}</Typography>
        </Box>
    );
}
Information.propTypes = {
    lebel: PropTypes.string.isRequired,
    description: PropTypes.any.isRequired,
};
