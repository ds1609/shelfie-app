import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";

// components
import ThemedLoader from "../ThemedLoader";

const UserOnly = ({ children }) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if(authChecked && user === null){
            router.replace("/login");
        }
    }, [ user, authChecked ]);

    if(!authChecked || !user){
        return (
            <ThemedLoader />
        );
    }

    return children;
}

export default UserOnly;