import { useTranslation } from "react-i18next";

function Welcome() {
  const { t } = useTranslation();
  return (
    <div>
      <div>{t("welcome")}</div>
      <div>{t("Language")}</div>
    </div>
  );
}
export default Welcome;
