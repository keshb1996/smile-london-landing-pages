import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// Supabase import will be restored after enabling Lovable Cloud

const SecureInteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  // Clinic location coordinates (Harley Street area)
  const clinicLocation: [number, number] = [-0.1448, 51.5191];

  // Map temporarily disabled during Cloud migration
  useEffect(() => {
    setError('Map temporarily unavailable during migration');
    setIsLoading(false);
  }, []);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: clinicLocation,
      zoom: 15,
      pitch: 45,
      interactive: true,
      trackResize: false
    });

    // Prevent map canvas from taking focus on load
    map.current.getCanvas().setAttribute('tabindex', '-1');

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

    return () => {
      map.current?.remove();
    };
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }
  }, [mapboxToken]);

  if (isLoading) {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-muted rounded-2xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-muted rounded-2xl">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">{error}</p>
          <p className="text-xs text-muted-foreground mt-1">38 Queen Anne Street, Marylebone, London W1G 8HZ</p>
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

export default SecureInteractiveMap;