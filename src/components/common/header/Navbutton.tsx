import {Button} from "../../ui/button.tsx";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import type {ReactNode} from "react";

type NavbuttonProps = {
    destination: string
    translationKey: string
    icon?: ReactNode
}

export const Navbutton = ({destination, translationKey, icon}: NavbuttonProps) => {

    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleClick = () => {
        navigate(destination);
    }

    return (
        <Button onClick={handleClick}
                className={"mx-1 hover:cursor-pointer hover:scale-110 transition-all duration-400 ease-in-out select-none"}>
            {icon} {t(`navbar.${translationKey}`)}
        </Button>
    )
};