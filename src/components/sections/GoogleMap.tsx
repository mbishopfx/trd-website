'use client';

import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MapPin } from 'lucide-react';

interface Location {
  lat: number;
  lng: number;
  name: string;
  address?: string;
}

interface GoogleMapProps {
  locations?: Location[];
  center?: { lat: number; lng: number };
  zoom?: number;
  height?: string;
  singleLocation?: boolean;
}

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const defaultCenter = {
  lat: 40.428100,
  lng: -74.415700, // East Brunswick (Headquarters)
};

const defaultZoom = 12;

export default function GoogleMapComponent({
  locations = [],
  center,
  zoom = defaultZoom,
  height = '500px',
  singleLocation = false,
}: GoogleMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const mapCenter = useMemo(() => {
    if (center) return center;
    if (singleLocation && locations.length > 0) {
      return { lat: locations[0].lat, lng: locations[0].lng };
    }
    return defaultCenter;
  }, [center, locations, singleLocation]);

  const mapZoom = useMemo(() => {
    if (singleLocation && locations.length > 0) return 14;
    if (locations.length > 1) return 11;
    return zoom;
  }, [singleLocation, locations.length, zoom]);

  if (loadError) {
    return (
      <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center" style={{ height }}>
        <div className="text-center p-8">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Error loading map</p>
          <p className="text-sm text-gray-500 mt-2">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center" style={{ height }}>
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  const mapStyles = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ] as google.maps.MapTypeStyle[];

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg" style={{ height }}>
      <GoogleMap
        mapContainerStyle={{ ...mapContainerStyle, height }}
        center={mapCenter}
        zoom={mapZoom}
        options={{
          styles: mapStyles,
          disableDefaultUI: false,
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
        }}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.name}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
