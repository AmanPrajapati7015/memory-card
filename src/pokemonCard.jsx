const baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

function PokiemonCard({pokiemon, handleClick}){
    return (
        <>
            <div className="pokiemon-card" onClick={() =>handleClick(pokiemon.id)}>
                <img 
                    src={ baseImgUrl+pokiemon.id+'.svg'} 
                    className="pokiemon-img" 
                    width='250px'
                    height='300px'
                    alt={pokiemon.name +" image"} 
                />
                <h2>{titleCase(pokiemon.name)}</h2>
            </div>
        </>
    )
}

function titleCase(str){
    return str[0].toUpperCase() + str.slice(1);
}


export default PokiemonCard;