import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken] = useState('pk.eyJ1Ijoia2VzaGI5NiIsImEiOiJjbWZmZ2FjdmQwZ212Mm1yOXF6dHRiMDNzIn0.YCLyo3ezwAe_OUor_Cltsw');
  const [tokenEntered] = useState(true);

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
    initializeMap();
  }, []);


  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-2xl shadow-lg" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-2xl" />
    </div>
  );
};

export default InteractiveMap;