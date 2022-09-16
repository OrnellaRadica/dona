import {useMemo} from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';
import data from "../data.json"


function Map({typeMarker, direction
}) {
  const center= useMemo(() => ({lat:41.3986526, lng:2.1613738}),[]);
  return ( 
    <GoogleMap zoom={12} center={center}  mapContainerClassName="map-container">
        {typeMarker === "all" ?
      ( data.map((institution)=>(
       <Marker position={institution.direction}/>
       )))
       : ( <Marker position={direction}/>) }
       
    </GoogleMap>
  )
}

export default Map