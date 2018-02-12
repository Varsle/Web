import React from "react";
import {compose, withProps, withHandlers} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import {conf} from "../../conf/conf";
import {MarkerClusterer} from "react-google-maps/lib/components/addons/MarkerClusterer";

/** Load API KEY in production mode **/
let url = "https://maps.googleapis.com/maps/api/js?key=" + conf.google + "&v=3.exp&libraries=geometry,drawing,places"
if (process.env.NODE_ENV === `development`) {
    url = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
}

const CreateCluster = compose(
    withProps({
        googleMapURL: url ,
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `400px`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            const clickedMarkers = markerClusterer.getMarkers()
            console.log(`Current clicked markers length: ${clickedMarkers.length}`)
            console.log(clickedMarkers)
        },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat: 58.14671, lng: 7.9956}}
    >
        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.map(data => (
                <Marker
                    key={data.key}
                    position={{lat: data.location.lat, lng: data.location.long}}
                />
            ))}
        </MarkerClusterer>
    </GoogleMap>
);

export {CreateCluster};