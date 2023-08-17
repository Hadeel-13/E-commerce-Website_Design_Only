import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";
export default function Paginate() {
    const [page, setPage] = useState(1);
    const handlePageClick = async (event, value) => {
        setPage(value);
        console.log(value);
        console.log(event);
    };
    return (
        <>
            {/* {page} */}
            <div className="flex justify-center items-center">
                <Pagination
                    page={page}
                    count={10}
                    variant="outlined"
                    color="secondary"
                    siblingCount={0}
                    size="medium"
                    // boundaryCount={1}
                    onChange={handlePageClick}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{
                                previous: ArrowForwardIos,
                                next: ArrowBackIosNew,
                            }}
                            {...item}
                        />
                    )}
                />
            </div>
        </>
    );
}
