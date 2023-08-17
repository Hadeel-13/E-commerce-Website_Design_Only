import { Box, Container, IconButton, Tooltip } from "@mui/material";
import {
    ForwardToInbox,
    GitHub,
    PhoneInTalk,
    LinkedIn,
} from "@mui/icons-material";
const titles = ["الشروط والأحكام", "سياسية الخصوصية", "اتصل بنا"];
const socialIcons = [
    {
        title: "My Phone",
        href: "tel:+963998630508",
        icon: <PhoneInTalk />,
    },
    {
        title: "My Email",
        href: "mailto:mira13ha@gmail.com",
        icon: <ForwardToInbox />,
    },
    {
        title: "My GitHub",
        href: "https://github.com/Hadeel-13",
        icon: <GitHub />,
    },
    {
        title: "My LinkedIn",
        href: "https://www.linkedin.com/in/hadeel-i-5560851ba/",
        icon: <LinkedIn />,
    },
];
export default function Footer() {
    return (
        <>
            <Box
                sx={{ bgcolor: "primary.main" }}
                className="text-center text-white"
            >
                <Container maxWidth={"lg"}>
                    <div className="flex flex-wrap justify-between py-7 gap-7">
                        <div className="flex flex-col sm:flex-row flex-wrap gap-7">
                            {titles?.map((title) => (
                                <div key={title} className="text-start">
                                    {title}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            {socialIcons?.map((_) => (
                                <Tooltip key={_.href} title={_.title}>
                                    <a
                                        href={_.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <IconButton
                                            color="inherit"
                                            aria-label="add to shopping cart"
                                        >
                                            {_.icon}
                                        </IconButton>
                                    </a>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                </Container>
                {/* <!--Copyright section--> */}
                <div className="p-4 text-center bg-neutral-700 text-neutral-200">
                    جميع الحقوق محفوظة لعام 2023 ©{" "}
                    <a
                        className="text-neutral-800 dark:text-neutral-400"
                        href="https://github.com/Hadeel-13"
                    >
                        Hadeel Alibrahim
                    </a>{" "}
                </div>
            </Box>
        </>
    );
}
