import React, { Component,  useState, useEffect  } from 'react';
import logo from '../logo.jpg';
import Web3 from 'web3'
import './App.css';
import Challan from '../abis/Challan.json'
import Navbar from './Navbar'
import AfterLoginNavbar from './AfterLoginNavbar'
import Main from './Main'
import SignIn from './SignIn'
import Challans from './Challans'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow} from "react-google-maps";
import * as Data from "./pakistandistricts.json";
import mapStyles from "./mapStyles";

function Map(props) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedLocation(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 33.69, lng: 73.0551 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {props.Lat_long.map((pakloc,key) => (
        <Marker
          key={key}
          position={{
            lat: (pakloc[0][0]),
            lng: (pakloc[0][1])
          }}
          onClick={() => {
            setSelectedLocation(pakloc);
          }}
        />
      ))}

      {selectedLocation && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedLocation(null);
          }}
          position={{
            lat: (selectedLocation[0][0]),
            lng: (selectedLocation[0][1])
          }}
        >
          <div>
            <h2>Offender Name: {selectedLocation[4]}</h2>
            <p>Vehicle Number: {selectedLocation[1]}</p>
            <p>Violation Type: {selectedLocation[2]}</p> 
            <p>Fine Amount: {selectedLocation[3]}</p>            

          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

class HomePage extends Component {
  render() {
    return (
      <div className="row">
           <Navbar />
                <div style={{ width: "100vw", height: "100vh" }}>
                <MapWrapped Lat_long={this.props.Lat_long}
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                      process.env.REACT_APP_GOOGLE_KEY
                  }`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
                </div>
          </div>
    );
  }
}
export default HomePage;
