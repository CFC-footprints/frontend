/* eslint-disable global-require */
import React, { createRef } from "react";
import { useDispatch } from "react-redux";
import { Map as LeafletMap, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useTypedSelector } from "../../store/reducers";
import updateFootprint from "../../store/actions";

import "leaflet/dist/leaflet.css";

function Map() {
  const initState = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const { markers } = initState;
  const refmarker = createRef<Marker>();

  function updatePosition() {
    const marker = refmarker.current;
    if (marker != null) {
      const newMarkers = marker.leafletElement.getLatLng();
      dispatch(updateFootprint({ markers: newMarkers }));
      dispatch(updateFootprint({ lat: newMarkers.lat.toString() }));
      dispatch(updateFootprint({ lng: newMarkers.lng.toString() }));
    }
  }

  const icon = L.icon({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    iconSize: [30, 45],
  });

  // default position Chile - Santiago
  const position: [number, number] = [-33.47269, -70.64724];

  return (
    <LeafletMap
      center={markers ? [markers.lat, markers.lng] : position}
      zoom={13}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        icon={icon}
        draggable
        ondragend={updatePosition}
        position={markers ? [markers.lat, markers.lng] : position}
        ref={refmarker}
      />
    </LeafletMap>
  );
}

export default Map;
