import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Navbar from "./Sections/Layout/Navbar";
import Footer from "./Sections/Layout/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import AllCategories from "./Pages/AllCategories";
import AllBrands from "./Pages/AllBrands";
import ShopProducts from "./Pages/Products/ShopProducts";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import PayMethod from "./Pages/Checkout/PayMethod";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrders";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./Pages/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage";
import UserAllAddressesPage from "./Pages/User/UserAllAddressesPage";
import UserAddAddress from "./Pages/User/UserAddAddress";
import UserEditAddress from "./Pages/User/UserEditAddress";
import UserProfilePage from "./Pages/User/UserProfilePage";
import UserResetPassword from "./Pages/User/UserResetPassword";
export default function App() {
    // const [darkMode, setDarkMode] = useState(false);
    const theme = createTheme({
        palette: {
            // mode: darkMode ? "dark" : "light",
            mode: "light",
            primary: {
                main: "#121212",
                contrastText: "#fff",
            },
            secondary: {
                main: "#3AA6B9",
                contrastText: "#fff",
            },
            // #ECCC70
            myYellow: {
                main: "#efdcab",
            },
        },
        typography: {
            fontFamily: "Almarai",
        },
    });

    return (
        <>
            <BrowserRouter basename="/">
                <ThemeProvider theme={theme}>
                    <Box className="bg-gray-50">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route
                                path="/allcategories"
                                element={<AllCategories />}
                            />
                            <Route path="/allbrands" element={<AllBrands />} />
                            <Route
                                path="/products"
                                element={<ShopProducts />}
                            />
                            <Route
                                path="/products/:id"
                                element={<ProductDetailsPage />}
                            />
                            <Route path="/cart" element={<CartPage />} />
                            <Route
                                path="/order/paymethod"
                                element={<PayMethod />}
                            />
                            {/* Admin */}
                            <Route
                                path="/admin/allproducts"
                                element={<AdminAllProductsPage />}
                            />
                            <Route
                                path="/admin/allorders"
                                element={<AdminAllOrdersPage />}
                            />
                            <Route
                                path="/admin/orders/:id"
                                element={<AdminOrderDetailsPage />}
                            />
                            <Route
                                path="/admin/addbrand"
                                element={<AdminAddBrandPage />}
                            />
                            <Route
                                path="/admin/addcategory"
                                element={<AdminAddCategoryPage />}
                            />
                            <Route
                                path="/admin/addsubcategory"
                                element={<AdminAddSubCategoryPage />}
                            />
                            <Route
                                path="/admin/addproduct"
                                element={<AdminAddProductPage />}
                            />
                            {/* User */}
                            <Route
                                path="/user/allorders"
                                element={<UserAllOrdersPage />}
                            />
                            <Route
                                path="/user/favoriteproducts"
                                element={<UserFavoriteProductsPage />}
                            />
                            <Route
                                path="/user/alladdresses"
                                element={<UserAllAddressesPage />}
                            />
                            <Route
                                path="/user/add-address"
                                element={<UserAddAddress />}
                            />
                            <Route
                                path="/user/edit-address"
                                element={<UserEditAddress />}
                            />
                            <Route
                                path="/user/profile"
                                element={<UserProfilePage />}
                            />
                            <Route
                                path="/user/reset-password"
                                element={<UserResetPassword />}
                            />
                        </Routes>
                        <Footer />
                    </Box>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}
