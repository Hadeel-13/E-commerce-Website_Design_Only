import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function SubTitle({ title, btnTitle, path, className }) {
    return (
        <>
            <div
                className={`flex flex-row flex-wrap gap-7 items-center justify-between ${className}`}
            >
                <div className="text-2xl font-black">{title}</div>
                {btnTitle ? (
                    <Link to={`${path}`}>
                        <Button
                            color="secondary"
                            variant="outlined"
                            className="rounded-xl"
                        >
                            {btnTitle}
                        </Button>
                    </Link>
                ) : null}
            </div>
        </>
    );
}
SubTitle.propTypes = {
    title: PropTypes.string.isRequired,
    btnTitle: PropTypes.string,
    path: PropTypes.string,
    className: PropTypes.string,
};
