import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken] = useState<string>('');
  const tokenEntered = false;

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

    // Do not auto-open popup to avoid stealing focus/scroll

    return () => {
      map.current?.remove();
    };
  };

  useEffect(() => {
    initializeMap();
  }, []);


  return (
    <div className="relative w-full h-full">
      {!mapboxToken ? (
        <div className="flex flex-col items-start justify-center p-4 rounded-2xl border bg-background shadow-sm h-[320px]">
          <p className="text-sm text-muted-foreground">Interactive map temporarily disabled.</p>
          <div className="mt-2">
            <p className="font-medium">Smile London</p>
            <p className="text-sm text-muted-foreground">38 Queen Anne Street</p>
            <p className="text-sm text-muted-foreground">Marylebone, London W1G 8HZ</p>
            <p className="text-sm text-primary mt-1">2 min from Oxford Circus</p>
          </div>
        </div>
      ) : (
        <>
          <div ref={mapContainer} className="absolute inset-0 rounded-2xl shadow-lg" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-2xl" />
        </>
      )}
    </div>
  );
};

export default InteractiveMap;