const UBKIR_LAT = 39.2904501;
const UBKIR_LNG = -9.0603874;

const Map = () => (
  <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
    <iframe
      title="UBKIR location map - Google Maps"
      className="absolute inset-0 w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps?q=${UBKIR_LAT},${UBKIR_LNG}&z=17&output=embed`}
    />
  </div>
);

export default Map;
