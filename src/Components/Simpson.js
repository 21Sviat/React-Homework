const Simpson = ({simpson}) => {
    const {name, surname, age, info, photo} = simpson
    return (
        <div>
            <h1>{name} {surname}</h1>
            <h3>Age: {age}</h3>
            <p>{info}</p>
            <img src={photo} alt={name}/>
            <hr/>
        </div>
    );
};

export {Simpson};