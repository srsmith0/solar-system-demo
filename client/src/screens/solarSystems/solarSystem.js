import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const SolarSystems = (props) => {
  const [solarSystems, setSolarSystems] = useState([]);
  
// componentDidMount
//do api calls in here
async function getSolarSystems () {
  const res = await Axios.get('/api/solar_systems')
  setSolarSystems(res.data);
}

function renderSolarSystems () {
  return solarSystems.map((ss) => (
    <div>
      <h1>{ss.name}</h1>
    </div>
  ))
}

async function createSolarSystem () {
  const res = await Axios.post(`/api/solar_systems`, 
  {name:'new',  //TODO get this value from form 
});
setSolarSystems([res.data, ...solarSystems])
}

async function editSolarSystem () {
  const res = await Axios.put(`/api/solar_systems/5`, 
  {name:'edited name',  //TODO get this value from form 
});

const updated = solarSystems.map(ss => {
  if(ss.id !==res.data.id) return ss
  return res.data
})
setSolarSystems(updated)
}

async function deleteSolarSystem () {
const res = await Axios.delete(`/api/solar_systems/5`)
const filtered = solarSystems.filter( ss => ss.id !== res.data.id)
setSolarSystems(filtered);
}

  useEffect(() => {
    console.log('mounted')
    getSolarSystems();
  }, [])
  return (
    <div>
      <h1>Solar Systems</h1>
      {renderSolarSystems()}
      <div onClick={createSolarSystem}>create</div>
      <div onClick={editSolarSystem}>edit</div>
      <div onClick={deleteSolarSystem}>delete</div>
    </div>
  );
};

export default SolarSystems;