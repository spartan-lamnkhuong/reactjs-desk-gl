import './App.css';

import { BitmapLayer } from '@deck.gl/layers/typed';
import DeckGL from '@deck.gl/react/typed';
import { Map } from 'react-map-gl';

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};


function App() {
  const layer = new BitmapLayer({
    id: 'bitmap-layer',
    minZoom: 0,
    maxZoom: 2,
    bounds: [-122.5190, 37.7045, -122.355, 37.829],
    image: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-districts.png'
  });

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[layer]}>
      <Map
       mapStyle={"mapbox://styles/mapbox/light-v10"}    
       mapboxAccessToken={REACT_MAPBOX_KEY} />
    </DeckGL>
  );
}

export default App;
