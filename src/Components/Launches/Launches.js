import React, {useEffect, useState} from 'react';
import {Launch} from "../Launch/Launch";


const Launches = () => {
    const [Launches, setLaunches] = useState([])

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/').then(res => res.json()).then((data) => {
            // Фільтруємо запуски, що не були в 2020 році
            const filteredLaunches = data.filter((launch) => {
                const launchYear = new Date(launch.launch_date_utc).getFullYear();
                return launchYear !== 2020;
            });

            setLaunches(filteredLaunches);
        });
    }, []);
    return (
        <div>
            {Launches.map(launch =><Launch key={launch.id} launch={launch}/>)}
        </div>
    );
};

export {Launches};