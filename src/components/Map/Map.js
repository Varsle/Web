import React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {conf} from "../../conf/conf";

/** Load API KEY in production mode **/
let url = "https://maps.googleapis.com/maps/api/js?key=" + conf.google + "&v=3.exp&libraries=geometry,drawing,places"
if (process.env.NODE_ENV === `development`) {
    url = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
}

const Map = compose(
    withProps({
        googleMapURL: url,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: props.lat, lng: props.long  }}
    >
        {<Marker position={{ lat: props.lat, lng: props.long }} />}
    </GoogleMap>
);

export {Map};