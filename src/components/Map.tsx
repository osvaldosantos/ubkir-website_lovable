import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Map = () => {
  const { t } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);

  // UBKIR headquarters coordinates (Painho, Portugal)
  const ubkirLocation: [number, number] = [-8.8157, 39.3629]; // Approximate coordinates for Painho, Portugal

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      mapboxgl.accessToken = mapboxToken.trim();
      
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
        scale: 1.2
      })
        .setLngLat(ubkirLocation)
        .addTo(map.current);

      // Add popup with company info
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-2 text-center">
            <h3 class="font-semibold text-sm mb-1">UBKIR</h3>
            <p class="text-xs text-muted-foreground mb-2">Unbreakable Idea Research</p>
            <p class="text-xs">Estrada Nacional 115, nº1<br/>2550-426 Painho, Portugal</p>
          </div>
        `);

      marker.setPopup(popup);

      map.current.on('load', () => {
        setIsMapReady(true);
      });

      // Show popup on map load
      map.current.on('load', () => {
        popup.addTo(map.current!);
      });

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!mapboxToken.trim()) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Interactive Map Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-3">
              To display the interactive satellite map, please enter your Mapbox public token below.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Get your token at:</span>
              <a 
                href="https://account.mapbox.com/access-tokens/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                mapbox.com/tokens <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
            <div className="flex gap-2">
              <Input
                id="mapbox-token"
                type="password"
                placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGZkaXQ5c..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="font-mono text-sm"
              />
              <Button onClick={initializeMap} disabled={!mapboxToken.trim()}>
                Load Map
              </Button>
            </div>
          </div>

          {/* Fallback address display */}
          <div className="mt-6 p-4 border rounded-lg bg-background">
            <h3 className="font-semibold text-foreground mb-2">UBKIR Headquarters</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Estrada Nacional 115, nº1</p>
              <p>2550-426 Painho</p>
              <p>Portugal</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

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