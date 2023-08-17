import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
export default function CategoryHeader() {
    let categories = [
        "الكل",
        "ملابس",
        "إلكترونيات",
        "كهربائية",
        "تخفيضات",
        "المزيد",
    ];
    //
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ maxWidth: "100%" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    className="shadow-sm"
                    // visibleScrollbar
                    // textColor="secondary"
                    indicatorColor="secondary"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {categories?.map((cat, i) => (
                        <Tab key={i} label={cat} />
                    ))}
                </Tabs>
            </Box>
        </>
    );
}
