import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../Context/Global/global.context";

function Contador() {
  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }
  const { count } = useContext(GlobalContext);
  return (
    <div >
      <p className="text-info-contador">{t("contador")} {count ?? "No se ha recibido el dato"}</p>
    </div>
  );
}

export default Contador;