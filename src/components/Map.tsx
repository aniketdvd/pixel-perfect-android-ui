
import { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    map.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [55.2708, 25.2048],
        zoom: 15,
        projection: 'EPSG:4326'
      })
    });

    return () => {
      map.current?.setTarget(undefined);
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full absolute inset-0 -z-10" />;
};

export default MapComponent;
