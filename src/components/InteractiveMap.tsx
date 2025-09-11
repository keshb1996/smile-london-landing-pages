import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Key } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenEntered, setTokenEntered] = useState(false);

  // Clinic location coordinates (Harley Street area)
  const clinicLocation: [number, number] = [-0.1448, 51.5191];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: clinicLocation,
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

    // Add a marker for the clinic
    const marker = new mapboxgl.Marker({
      color: '#D4AF37', // dental-gold color
      scale: 1.2
    })
      .setLngLat(clinicLocation)
      .addTo(map.current);

    // Add a popup with clinic info
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(`
        <div class="p-2">
          <h3 class="font-semibold text-lg">Smile London</h3>
          <p class="text-sm text-gray-600">38 Queen Anne Street</p>
          <p class="text-sm text-gray-600">Marylebone, London W1G 8HZ</p>
          <p class="text-sm font-medium text-yellow-600 mt-1">2 min from Oxford Circus</p>
        </div>
      `);

    marker.setPopup(popup);

    // Show popup by default
    marker.togglePopup();

    return () => {
      map.current?.remove();
    };
  };

  useEffect(() => {
    if (tokenEntered && mapboxToken) {
      initializeMap();
    }
  }, [tokenEntered, mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      localStorage.setItem('mapbox_token', mapboxToken);
      setTokenEntered(true);
    }
  };

  // Check for saved token on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setTokenEntered(true);
    }
  }, []);

  if (!tokenEntered) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dental-gold/20 to-dental-gold/40 rounded-2xl">
        <div className="text-center text-dental-black p-8 max-w-md">
          <Key className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Interactive Map Setup</h3>
          <p className="text-lg mb-6">
            Enter your Mapbox public token to enable the interactive map
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiYSI6ImpvNmtseHcifQ..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full"
            />
            <Button type="submit" className="w-full">
              Load Map
            </Button>
          </form>
          <p className="text-sm mt-4 opacity-75">
            Get your token at{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-2xl shadow-lg" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-2xl" />
    </div>
  );
};

export default InteractiveMap;