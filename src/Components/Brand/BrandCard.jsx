import PropTypes from "prop-types";
export default function BrandCard({ image }) {
    return (
        <>
            <img
                src={image}
                className="shadow hover:-translate-y-1 transition-all"
                alt="brand-image"
            />
        </>
    );
}
BrandCard.propTypes = {
    image: PropTypes.string.isRequired,
};