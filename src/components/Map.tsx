import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Map = () => {
  const { t } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  // UBKIR headquarters coordinates (Painho, Portugal)
  const ubkirLocation: [number, number] = [-9.0603874, 39.2904501];

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      mapboxgl.accessToken = 'pk.eyJ1Ijoib3N2YWxkb3JzYW50b3MiLCJhIjoiY21mYXY0aWYxMDVzaTJpcW9ldzlsM2l4ciJ9.VYdoSGyhPIJrS4OzOw6Nsw';
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-streets-v12', // Satellite view with streets
        center: ubkirLocation,
        zoom: 15,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add full screen control
      map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

      // Add marker for UBKIR location
      const marker = new mapboxgl.Marker({
        color: '#c10d3d', // UBKIR brand color
        scale: 1.2,
      })
        .setLngLat(ubkirLocation)
        .addTo(map.current);

      // Add popup with company info
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-2 text-center">
            <h3 class="font-semibold text-sm mb-1">UBKIR</h3>
            <p class="text-xs text-gray-600 mb-2">Unbreakable Idea Research</p>
            <p class="text-xs">Estrada Nacional 115, nº1<br/>2550-426 Painho, Portugal</p>
          </div>
        `);

      marker.setPopup(popup);

      map.current.on('load', () => {
        setIsMapReady(true);
        // Show popup on map load
        popup.addTo(map.current!);
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      {!isMapReady && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2 animate-pulse" />
            <p className="text-sm text-muted-foreground">Loading satellite map...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
