import { Container as ContainerMUI } from "@mui/material";
import PropTypes from "prop-types";
export default function Container({ children }) {
    return (
        <ContainerMUI maxWidth={"lg"} className="min-h-[65vh] space-y-7 my-7">
            {/*  */}
            {children}
        </ContainerMUI>
    );
}

Container.propTypes = {
    children: PropTypes.any.isRequired,
};
