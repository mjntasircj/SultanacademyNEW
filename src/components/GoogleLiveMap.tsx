import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, ExternalLink, Compass, Maximize2, Layers } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface GoogleLiveMapProps {
  apiKey?: string;
  className?: string;
  heightClass?: string;
}

declare global {
  interface Window {
    google?: any;
    __googleMapsLoadingPromise?: Promise<any>;
  }
}

// Sultan Academy exact coordinates per Google Maps place URL:
// https://www.google.com/maps/place/Sultanacademy/@23.754225,90.422681,16z
const SULTAN_ACADEMY_COORDS = {
  lat: 23.754225,
  lng: 90.4226814,
};

export const GoogleLiveMap: React.FC<GoogleLiveMapProps> = ({
  apiKey = 'AIzaSyAyALpLwwtpmlXwegLVSqs3U6t2y5GbWNw',
  className = '',
  heightClass = 'h-[360px] sm:h-[420px]',
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [mapTypeId, setMapTypeId] = useState<'roadmap' | 'satellite'>('roadmap');

  useEffect(() => {
    let isMounted = true;

    const loadGoogleMapsScript = (): Promise<any> => {
      if (window.google?.maps) {
        return Promise.resolve(window.google.maps);
      }

      if (window.__googleMapsLoadingPromise) {
        return window.__googleMapsLoadingPromise;
      }

      window.__googleMapsLoadingPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.id = 'google-maps-sdk-script';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,marker&v=weekly`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (window.google?.maps) {
            resolve(window.google.maps);
          } else {
            reject(new Error('Google Maps SDK loaded but google.maps is not defined.'));
          }
        };
        script.onerror = (err) => {
          reject(err);
        };
        document.head.appendChild(script);
      });

      return window.__googleMapsLoadingPromise;
    };

    loadGoogleMapsScript()
      .then((maps) => {
        if (!isMounted || !mapContainerRef.current) return;

        // Custom dark/refined map styling to match Sultan Academy aesthetic
        const customMapStyle = [
          { elementType: 'geometry', stylers: [{ color: '#1e293b' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#0f172a' }, { weight: 3 }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#cbd5e1' }] },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f8fafc' }],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#94a3b8' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#14532d' }, { lightness: -20 }],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#334155' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1e293b' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#e11d48' }, { lightness: -40 }],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#fda4af' }],
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#334155' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#0369a1' }, { lightness: -30 }],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#38bdf8' }],
          },
        ];

        const mapOptions = {
          center: SULTAN_ACADEMY_COORDS,
          zoom: 16,
          mapTypeId: maps.MapTypeId.ROADMAP,
          styles: customMapStyle,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: true,
          rotateControl: true,
          fullscreenControl: true,
          gestureHandling: 'cooperative', // smooth panning and moveable
        };

        const map = new maps.Map(mapContainerRef.current, mapOptions);
        mapInstanceRef.current = map;

        // Custom Marker
        const marker = new maps.Marker({
          position: SULTAN_ACADEMY_COORDS,
          map: map,
          title: 'Sultan Academy',
          animation: maps.Animation.DROP,
          icon: {
            path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
            fillColor: '#e11d48', // rose-600
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2,
            scale: 2,
            anchor: new maps.Point(12, 22),
          },
        });

        // Interactive InfoWindow
        const infoContent = `
          <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 6px 4px; color: #0f172a; max-width: 250px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <div style="background: #e11d48; width: 10px; height: 10px; border-radius: 50%;"></div>
              <strong style="font-size: 15px; color: #0f172a; font-weight: 700;">Sultan Academy</strong>
            </div>
            <p style="font-size: 12px; color: #475569; margin: 2px 0 6px 0; line-height: 1.4;">
              Taltola Member Line Road, Dhaka 1219, Bangladesh
            </p>
            <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #e2e8f0; padding-top: 6px; margin-top: 4px;">
              <span style="font-size: 11px; font-weight: 600; color: #e11d48;">O & A Level Coaching</span>
              <a href="${ACADEMY_INFO.googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 11px; color: #2563eb; text-decoration: underline; font-weight: 600;">
                Open in Maps ↗
              </a>
            </div>
          </div>
        `;

        const infoWindow = new maps.InfoWindow({
          content: infoContent,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        // Open by default on initial render
        infoWindow.open(map, marker);

        setMapLoaded(true);
      })
      .catch((err) => {
        console.warn('Google Maps SDK failed to initialize; falling back to interactive embed:', err);
        if (isMounted) {
          setLoadError(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [apiKey]);

  const handleRecenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.panTo(SULTAN_ACADEMY_COORDS);
      mapInstanceRef.current.setZoom(16);
    }
  };

  const handleToggleSatellite = () => {
    if (mapInstanceRef.current && window.google?.maps) {
      const nextType = mapTypeId === 'roadmap' ? 'satellite' : 'roadmap';
      mapInstanceRef.current.setMapTypeId(
        nextType === 'satellite'
          ? window.google.maps.MapTypeId.HYBRID
          : window.google.maps.MapTypeId.ROADMAP
      );
      setMapTypeId(nextType);
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl ${className}`}
      id="live-google-map-container"
    >
      {/* Top Floating Header & Controls */}
      <div className="absolute top-3 inset-x-3 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2 rounded-xl border border-slate-700/90 bg-slate-950/85 px-3 py-1.5 backdrop-blur-md shadow-lg">
          <div className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-xs font-semibold text-white">Sultan Academy</span>
          <span className="hidden sm:inline-block text-[11px] text-slate-400">· Live Location</span>
        </div>

        <div className="pointer-events-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleRecenter}
            title="Recenter to Sultan Academy"
            className="flex items-center gap-1 rounded-xl border border-slate-700/90 bg-slate-950/85 px-2.5 py-1.5 text-xs font-medium text-slate-200 hover:text-white hover:border-slate-500 backdrop-blur-md transition-colors shadow-lg"
          >
            <Navigation className="h-3.5 w-3.5 text-rose-400" />
            <span className="hidden sm:inline">Recenter</span>
          </button>

          <button
            type="button"
            onClick={handleToggleSatellite}
            title="Toggle Hybrid Satellite View"
            className="flex items-center gap-1 rounded-xl border border-slate-700/90 bg-slate-950/85 px-2.5 py-1.5 text-xs font-medium text-slate-200 hover:text-white hover:border-slate-500 backdrop-blur-md transition-colors shadow-lg"
          >
            <Layers className="h-3.5 w-3.5 text-blue-400" />
            <span className="hidden sm:inline">{mapTypeId === 'roadmap' ? 'Satellite' : 'Map'}</span>
          </button>

          <a
            href={ACADEMY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in Google Maps App"
            className="flex items-center gap-1 rounded-xl border border-rose-500/40 bg-rose-600/90 hover:bg-rose-500 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-all shadow-lg shadow-rose-900/30"
            id="btn-open-google-maps"
          >
            <span>Open in Maps</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Main Map Container */}
      {!loadError ? (
        <div ref={mapContainerRef} className={`w-full ${heightClass} bg-slate-950`} />
      ) : (
        /* Fallback: Interactive embed iframe if API key network limits occur */
        <iframe
          title="Sultan Academy Live Map"
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Sultanacademy,Taltola+Member+Line+Road+Dhaka+Bangladesh&center=${SULTAN_ACADEMY_COORDS.lat},${SULTAN_ACADEMY_COORDS.lng}&zoom=16`}
          className={`w-full ${heightClass} border-0`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}

      {/* Bottom Bar: Address & Directions Shortcut */}
      <div className="border-t border-slate-800/90 bg-slate-950/95 px-4 py-2.5 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <MapPin className="h-4 w-4 text-rose-500 shrink-0" />
          <span className="truncate">
            <strong className="text-white">Campus Location:</strong> Taltola Member Line Road, Dhaka 1219, Bangladesh
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-[11px] text-slate-400">
          <span className="hidden md:inline">Move & zoom freely across Dhaka</span>
          <a
            href={ACADEMY_INFO.googleDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-rose-400 hover:text-rose-300 transition-colors inline-flex items-center gap-1"
          >
            <span>Get Directions</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
