import Container from "./Container";
import PropTypes from "prop-types";
import { Fade, Grow, Paper } from "@mui/material";

export default function CustomDesign({ image, children, smImageWidth }) {
    return (
        <>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 my-7">
                    <Fade in={true}>{children}</Fade>
                    <Grow in={true}>
                        <Paper
                            className={`m-auto order-first lg:order-last w${
                                smImageWidth ? smImageWidth : "-56"
                            } lg:w-[500px] `}
                        >
                            <img src={image} />
                        </Paper>
                    </Grow>
                </div>
            </Container>
        </>
    );
}
CustomDesign.propTypes = {
    image: PropTypes.string.isRequired,
    smImageWidth: PropTypes.string,
    children: PropTypes.element.isRequired,
};
