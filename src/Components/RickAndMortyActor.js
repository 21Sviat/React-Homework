const RickAndMortyActor = ({rickAndMortyActor}) => {
    const {id,name,status,species,gender,image} = rickAndMortyActor
    return (
        <div>
            <h1>{name}</h1>
            <h3>ID: {id}, STATUS: {status}, SPECIES: {species}, GENDER: {gender}</h3>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {RickAndMortyActor};