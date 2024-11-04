import React, { useState } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  ScaleControl,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const OregonMap = () => {
  const [viewState, setViewState] = useState({
    latitude: 43.8041,
    longitude: -120.5542,
    zoom: 6.5,
  });
  const [selectedLocation, setSelectedLocation] = useState(null);

  const oregonPlaces = [
    {
      id: 1,
      name: "Bright Cove Hike",
      latitude: 44.66044,
      longitude: -120.2528,
      imageUrl:
        "https://www.oregonhikers.org/w/images/3/37/Bright_Cove_South_View_1000px.jpg",
      infoUrl: "https://www.oregonhikers.org/field_guide/Bright_Cove_Trailhead",
    },
    {
      id: 2,
      name: "Cape Meares Lighthouse Hike",
      latitude: 45.48588,
      longitude: -123.97459,
      imageUrl: "https://www.oregonhikers.org/w/images/c/c9/CapeMeares3.jpg",
      infoUrl:
        "https://www.oregonhikers.org/field_guide/Cape_Meares_Lighthouse_Hike",
    },
    {
      id: 3,
      name: "Arch Cape to Short Sand Beach",
      latitude: 45.80317,
      longitude: -123.95806,
      imageUrl:
        "https://www.oregonhikers.org/w/images/f/fa/ArchCapeShortSand3.jpg",
      infoUrl:
        "https://www.oregonhikers.org/field_guide/Arch_Cape_to_Short_Sand_Beach_Hike",
    },
    {
      id: 4,
      name: "Butte Camp Dome Loop Hike",
      latitude: 46.1665,
      longitude: -122.26228,
      imageUrl:
        "https://www.oregonhikers.org/w/images/6/6c/Mt._St._Helens_from_Sheep_Canyon.jpg",
      infoUrl:
        "https://www.oregonhikers.org/field_guide/Butte_Camp_Dome_Loop_Hike",
    },
    {
      id: 5,
      name: "Council Crest Hike",
      latitude: 45.50287,
      longitude: -122.69169,
      imageUrl:
        "https://www.oregonhikers.org/w/images/thumb/a/a6/Council_Crest_Eastern_View.jpg/800px-Council_Crest_Eastern_View.jpg",
      infoUrl: "https://www.oregonhikers.org/field_guide/Council_Crest_Hike",
    },
    {
      id: 6,
      name: "Da-Ku-Be-Te-De Trail Hike",
      latitude: 42.0552,
      longitude: -123.11807,
      imageUrl:
        "https://www.oregonhikers.org/w/images/thumb/1/15/Cook_and_Green%2C_Red_Buttes%2C_Kangaroo_from_Da-Ku-Be-Te-De_Trail%2C_Applegate_Lake.jpg/800px-Cook_and_Green%2C_Red_Buttes%2C_Kangaroo_from_Da-Ku-Be-Te-De_Trail%2C_Applegate_Lake.jpg",
      infoUrl:
        "https://www.oregonhikers.org/field_guide/Da-Ku-Be-Te-De_Trail_Hike",
    },
    {
      id: 7,
      name: "Coldwater Peak Hike",
      latitude: 46.27757,
      longitude: -122.21603,
      imageUrl:
        "https://www.oregonhikers.org/w/images/a/a9/Mt._Rainier_from_Coldwater_Peak.jpg",
      infoUrl: "https://www.oregonhikers.org/field_guide/Coldwater_Peak_Hike",
    },
    {
      id: 8,
      name: "Eagle Lake Hike",
      latitude: 45.06799,
      longitude: -117.40668,
      imageUrl:
        "https://www.oregonhikers.org/w/images/thumb/3/3f/View_over_Eagle_Lake%2C_Wallowas.jpg/800px-View_over_Eagle_Lake%2C_Wallowas.jpg",
      infoUrl: "https://www.oregonhikers.org/field_guide/Eagle_Lake_Hike",
    },
    {
      id: 9,
      name: "Cape Lookout Hike",
      latitude: 45.34132,
      longitude: -123.97445,
      imageUrl:
        "https://www.oregonhikers.org/w/images/7/7e/Capelookoutview.jpg",
      infoUrl: "https://www.oregonhikers.org/field_guide/Cape_Lookout_Hike",
    },
    {
      id: 10,
      name: "Elk Cove from Cloud Cap Hike",
      latitude: 45.40243,
      longitude: -121.65486,
      imageUrl: "https://www.oregonhikers.org/w/images/f/f0/ElkCoveView.jpg",
      infoUrl:
        "https://www.oregonhikers.org/field_guide/Elk_Cove_from_Cloud_Cap_Hike",
    },
    {
      id: 11,
      name: "Fort Rock Loop Hike",
      latitude: 43.3729,
      longitude: -121.0662,
      imageUrl:
        "https://www.oregonhikers.org/w/images/0/0a/Fort_Rock_from_the_highway.jpg",
      infoUrl: "https://www.oregonhikers.org/field_guide/Fort_Rock_Loop_Hike",
    },
    {
      id: 12,
      name: "Harrys Ridge Hike",
      latitude: 46.27757,
      longitude: -122.21603,
      imageUrl:
        "https://www.oregonhikers.org/w/images/4/44/View_to_Mt._Adams_over_Spirit_Lake%2C_Harrys_Ridge.jpg",
      infoUrl: "https://www.oregonhikers.org/field_guide/Harrys_Ridge_Hike",
    },
    {
      id: 13,
      name: "Sunrise Cove Hike",
      latitude: 44.62779,
      longitude: -120.21505,
      imageUrl:
        "https://www.oregonhikers.org/w/images/a/af/Sunrise_Cove_01_1000px.jpg",
      infoUrl: "https://www.oregonhikers.org/field_guide/Sunrise_Cove_Hike",
    },
    {
      id: 14,
      name: "Paradise Park via the Sandy River Hike",
      latitude: 45.38696,
      longitude: -121.83221,
      imageUrl:
        "https://www.oregonhikers.org/w/images/thumb/c/cc/Timberlinenofparadise.JPG/800px-Timberlinenofparadise.JPG",
      infoUrl:
        "https://www.oregonhikers.org/field_guide/Paradise_Park_via_the_Sandy_River_Hike",
    },
    {
      id: 15,
      name: "Chalk Basin Loop Hike",
      latitude: 43.07709,
      longitude: -117.73552,
      imageUrl:
        "https://www.oregonhikers.org/w/images/thumb/f/f9/Palisades_above_the_Owyhee%2C_Colorful_Canyon%2C_Chalk_Basin.jpg/800px-Palisades_above_the_Owyhee%2C_Colorful_Canyon%2C_Chalk_Basin.jpg",
      infoUrl: "https://www.oregonhikers.org/field_guide/Chalk_Basin_Loop_Hike",
    },
    {
      id: 16,
      name: "Cape Foulweather Hike",
      latitude: 44.77073,
      longitude: -124.07285,
      imageUrl:
        "https://www.oregonhikers.org/w/images/thumb/8/89/CapeFWVP1.JPG/500px-CapeFWVP1.JPG",
      infoUrl: "https://www.oregonhikers.org/field_guide/Cape_Foulweather_Hike",
    },
    {
      id: 17,
      name: "Devils Peak Loop Hike",
      latitude: 42.6629,
      longitude: -122.28581,
      imageUrl:
        "https://www.oregonhikers.org/w/images/thumb/2/2d/DP_summit.JPG/800px-DP_summit.JPG",
      infoUrl: "https://www.oregonhikers.org/field_guide/Devils_Peak_Loop_Hike",
    },
    {
      id: 18,
      name: "Angels Rest",
      latitude: 45.56065,
      longitude: -122.17241,
      imageUrl:
        "https://www.oregonhikers.org/w/images/6/6a/GorgeSunsetAngelsRest.jpg",
      infoUrl: "https://www.oregonhikers.org/field_guide/Angels_Rest_Hike",
      TerrainUrl: "https://enchanting-sunburst-8e4325.netlify.app/",
    },
    {
      id: 19,
      name: "Smith Rock",
      latitude: 44.36515,
      longitude: -121.13789,
      imageUrl: "https://www.oregonhikers.org/w/images/f/fb/SmithRockTrhd1.jpg",
      infoUrl:
        "https://www.outdoorproject.com/united-states/oregon/smith-rock-state-park",
      TerrainUrl: "https://loquacious-parfait-be5c79.netlify.app/",
    },
    {
      id: 20,
      name: "Eagle Creek to Tunnel Falls Hike",
      latitude: 45.636574,
      longitude: -121.9197,
      imageUrl:
        "https://www.oregonhikers.org/w/images/thumb/3/35/PunchbowlFalls.jpg/500px-PunchbowlFalls.jpg",
      infoUrl:
        "https://www.hikingproject.com/trail/7022469/eagle-creek-trail-to-tunnel-falls",
      TerrainUrl: "https://cute-mermaid-e88a57.netlify.app/",
    },
  ];

  return (
    <div className="map-container">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/digit9/clxia263s005r01o71y1radny"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        <NavigationControl position="top-left" />
        <ScaleControl />
        <FullscreenControl />
        <GeolocateControl position="top-right" trackUserLocation />

        {oregonPlaces.map((place) => (
          <Marker
            key={place.id}
            latitude={place.latitude}
            longitude={place.longitude}
            onClick={() => setSelectedLocation(place)}
          >
            <div className="marker">
              <img
                src="https://img.icons8.com/emoji/48/000000/mountain-emoji.png"
                alt={place.name}
              />
            </div>
          </Marker>
        ))}

        {selectedLocation && (
          <Popup
            latitude={selectedLocation.latitude}
            longitude={selectedLocation.longitude}
            onClose={() => setSelectedLocation(null)}
            closeOnClick={false}
            offset={25}
          >
            <div>
              <h3>{selectedLocation.name}</h3>
              <img
                src={selectedLocation.imageUrl}
                alt={selectedLocation.name}
                onClick={() => window.open(selectedLocation.infoUrl, "_blank")}
                className="popup-image"
              />
              <p>Explore the beauty of {selectedLocation.name}!</p>
              <p
                className="popup-link"
                onClick={() =>
                  window.open(selectedLocation.TerrainUrl, "_blank")
                }
              >
                3d Terrain Elevation Map
              </p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default OregonMap;
