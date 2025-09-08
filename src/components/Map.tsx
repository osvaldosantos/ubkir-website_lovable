import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Map = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);
  const [mapboxToken, setMapboxToken] = useState<string | null>(null);
  const [tokenInput, setTokenInput] = useState('');
  const [mapError, setMapError] = useState<string | null>(null);

  // UBKIR headquarters coordinates (Painho, Portugal)
  const ubkirLocation: [number, number] = [-9.0603874, 39.2904501];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Ensure we have a token (load from localStorage if missing)
    let effectiveToken = mapboxToken;
    if (!effectiveToken) {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('mapbox_public_token') : null;
      if (saved) {
        setMapboxToken(saved);
      }
      setIsMapReady(false);
      return; // wait for token
    }

    try {
      setMapError(null);
      mapboxgl.accessToken = effectiveToken;

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

      map.current.on('error', () => {
        setMapError('Map failed to load. Please check your token or network.');
        setIsMapReady(false);
        toast({
          title: 'Map error',
          description: 'Please verify your Mapbox public token (pk-…).',
          variant: 'destructive',
        });
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      setMapError('Map initialization error');
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleSaveToken = () => {
    const token = tokenInput.trim();
    if (!token.startsWith('pk.')) {
      toast({
        title: 'Invalid token',
        description: 'Please enter a Mapbox public token starting with pk.',
        variant: 'destructive',
      });
      return;
    }
    localStorage.setItem('mapbox_public_token', token);
    setMapboxToken(token);
    setTokenInput('');
    setMapError(null);
    toast({ title: 'Token saved', description: 'Map will load with your token.' });
  };

  const handleClearToken = () => {
    localStorage.removeItem('mapbox_public_token');
    setMapboxToken(null);
    setIsMapReady(false);
    setMapError(null);
    map.current?.remove();
    toast({ title: 'Token cleared', description: 'Enter a new token to load the map.' });
  };

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      {(!mapboxToken || mapError) && (
        <div className="absolute inset-0 bg-background/90 flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-lg border border-border bg-card p-4 shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Mapbox token required</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Enter your Mapbox public token (starts with pk.) to load the map.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="pk.********************************"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
              />
              <Button onClick={handleSaveToken}>Save</Button>
              {mapboxToken && (
                <Button variant="outline" onClick={handleClearToken}>Clear</Button>
              )}
            </div>
          </div>
        </div>
      )}
      {mapboxToken && !isMapReady && (
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
