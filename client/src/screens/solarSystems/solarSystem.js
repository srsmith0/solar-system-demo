import React, { useEffect } from 'react';

const SolarSystems = (props) => {
// componentDidMount
//do api calls in here
  useEffect(() => {
    console.log('mounted')
  }, [])
  return (
    <div>
      <h1>Solar Systems</h1>
    </div>
  );
};

export default SolarSystems;