import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import ubkirLogo from "@/assets/ubkir-logo.jpg";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={ubkirLogo} alt="UBKIR" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">{t("footer.contactInfo")}</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Estrada Nacional 115, nº1</p>
              <p>2550-426 Painho, Portugal</p>
              <p>info@ubkir.pt</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">{t("footer.services")}</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>{t("footer.research")}</p>
              <p>{t("footer.training")}</p>
              <p>{t("footer.clinical")}</p>
              <p>{t("footer.software")}</p>
              <p>{t("footer.editorial")}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;