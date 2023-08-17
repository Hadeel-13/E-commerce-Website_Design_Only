import item from "../../assets/images/Products/item.png";
import { FavoriteBorder } from "@mui/icons-material"; //DeleteOutline, EditNote,
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    CardActions,
    Divider,
    IconButton,
    Rating,
    Stack,
    // Tooltip,
    Typography,
} from "@mui/material";
export default function ProductCard() {
    return (
        <Card
            sx={{
                maxWidth: 300,
            }}
            className="hover:-translate-y-1 transition-all"
        >
            <CardActionArea>
                <Link to={`/products/:id`}>
                    <CardMedia
                        component="img"
                        height=""
                        width=""
                        image={item}
                        alt={item}
                    />
                </Link>
            </CardActionArea>
            <CardActions disableSpacing>
                <Stack
                    gap={2}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    sx={{ width: "100%" }}
                >
                    <div></div>
                    <IconButton>
                        <FavoriteBorder />
                    </IconButton>
                </Stack>
            </CardActions>
            <Divider variant="inset" sx={{ mr: 2 }} />
            <CardContent>
                <Typography className="text-justify mb-3">
                    سود كربون ساعة يد ذكية بيب إس أسود كربون
                </Typography>
                <Stack
                    gap={2}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                >
                    <Rating
                        dir="ltr"
                        name="readOnly "
                        value={4.3}
                        precision={0.1}
                        size="small"
                        readOnly
                    />
                    <Typography variant="body2" color="text.secondary">
                        <span className="font-bold text-base text-black">
                            430000
                        </span>{" "}
                        جنيه
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}
