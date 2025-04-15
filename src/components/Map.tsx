import { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { easeOut } from 'ol/easing';
import 'ol/ol.css';

interface MapProps {
  startZoom?: number;
  endZoom?: number;
  animationDuration?: number;
  isAnimating?: boolean;
}

const MapComponent = ({ 
  startZoom = 18, 
  endZoom = 18, 
  animationDuration = 0,
  isAnimating = false 
}: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  const view = useRef<View | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Define the extent (approximately 5km around Chamba)
    // Format: [min longitude, min latitude, max longitude, max latitude]
    const chambaExtent = [
      76.1154608, // min longitude (about 1km west)
      32.5436944, // min latitude (about 1km south)
      76.1354608, // max longitude (about 1km east)
      32.5636944  // max latitude (about 1km north)
    ];

    view.current = new View({
      center: [76.1254608, 32.5536944],
      zoom: startZoom,
      projection: 'EPSG:4326',
      extent: chambaExtent,
      constrainOnlyCenter: true,
      maxZoom: 19,
      minZoom: 16
    });

    map.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: view.current
    });

    return () => {
      map.current?.setTarget(undefined);
    };
  }, [startZoom]);

  useEffect(() => {
    if (!view.current || !isAnimating) return;

    view.current.animate({
      zoom: endZoom,
      duration: animationDuration,
      easing: easeOut
    });
  }, [endZoom, animationDuration, isAnimating]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full relative"
      style={{ touchAction: 'none' }} // Enable touch interactions
    />
  );
};

export default MapComponent;
