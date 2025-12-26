import { Navbutton } from "./header/Navbutton.tsx";
import {
  IconBook,
  IconHome,
  IconQuestionMark,
  IconShare,
} from "@tabler/icons-react";
import { IMAGES } from "../../utils/Constants.ts";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div
      className={
        "sticky top-0 z-50 flex justify-center items-center w-full h-16 bg-black/0 backdrop-blur-md gap-4 select-none"
      }
    >
      <div className={"absolute left-8 flex gap-4 items-center scale-90"}>
        <img
          src={IMAGES.LOGO_LG}
          alt="HymodFR Logo"
          className={"h-12 rounded-full object-cover"}
        />
        <h1 className={"text-2xl font-bold text-white"}>{t("title")}</h1>
      </div>

      <div className={"flex gap-2 items-center justify-center"}>
        <Navbutton
          destination={"/"}
          translationKey={"home"}
          icon={<IconHome />}
        ></Navbutton>
        <Navbutton
          destination={"/tutorial"}
          translationKey={"tutorials"}
          icon={<IconBook />}
        ></Navbutton>
        <Navbutton
          destination={"/contribute"}
          translationKey={"contribute"}
          icon={<IconShare />}
        ></Navbutton>
        <Navbutton
          destination={"/about"}
          translationKey={"about"}
          icon={<IconQuestionMark />}
        ></Navbutton>
      </div>
    </div>
  );
}
