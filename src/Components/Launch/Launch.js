import React from 'react';

const Launch = ({launch}) => {
    const {mission_name, launch_year, links} = launch;
    return (
        <div>
            <div>mission name: <h3>{mission_name}</h3></div>
            <div>launch year: <h3>{launch_year}</h3></div>
            <img src={links.mission_patch_small} alt={mission_name}/>
            <hr/>
        </div>
    );
};

export {Launch};