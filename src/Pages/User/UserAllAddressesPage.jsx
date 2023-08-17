import { Stack } from "@mui/material";
import CustomDesign from "../../Components/Uitily/CustomDesign";
import SubTitle from "../../Components/Uitily/SubTitle";
import UserAddressCard from "../../Components/User/UserAddressCard";
import allAddressesImage from "../../assets/images/svg/all-addresses.svg";
export default function UserAllAddressesPage() {
    return (
        <>
            <CustomDesign image={allAddressesImage}>
                <div>
                    <SubTitle
                        title={"العناوين الشخصية"}
                        btnTitle={"أضف عنوان جديد"}
                        path={"/user/add-address"}
                        className={"mb-7"}
                    />
                    <Stack gap={5}>
                        {Array.from(Array(3)).map((_, i) => (
                            <UserAddressCard key={i} />
                        ))}
                    </Stack>
                </div>
            </CustomDesign>
        </>
    );
}
