import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const UBKIR_LAT = 39.2904501;
const UBKIR_LNG = -9.0603874;

// Official Maps URL scheme, safe for top-level navigation and handled by the
// Google Maps app on mobile. Embed/mapclient URLs are blocked by Chrome.
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${UBKIR_LAT},${UBKIR_LNG}`;

const Map = () => {
  const { language } = useLanguage();
  const label = language === "pt" ? "Abrir no Google Maps" : "Open in Google Maps";

  return (
    <div className="space-y-2">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="UBKIR location map - Google Maps"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${UBKIR_LAT},${UBKIR_LNG}&z=17&output=embed`}
        />
      </div>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        {label}
      </a>
    </div>
  );
};

export default Map;
