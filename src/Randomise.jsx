import { useState } from 'react';
import PokiemonCard from './pokemonCard';
import './pokemons.css'





function RenderRandomPokies({pokies, setScore, setHighScore}){

    const [randomPokies,setRandomPokies] = useState(pokies);
    const [clickedIds , setClickedIds] = useState([]);

    function shuffle(){ 
        const random = [...randomPokies];
        random.sort(() => Math.random() - 0.5); 
        setRandomPokies(random);
        console.log('randomise executed');
    }; 


    function handleClick(id){
        document.body.scrollTop = 0;
        const found = clickedIds.find((id_from_array)=>id_from_array===id);
        if(found) {
            setScore(0)
            setClickedIds([]);
        }
        else{
            let curScore=0;
            setScore(s=>{
                curScore = s+1;
                return curScore;
            });
            setHighScore(s=>{
                return (curScore>s)? curScore : s;
            });
            setClickedIds(ids=>[...ids,id])
        }
        shuffle();
    }

    
    return (
        <>
        <div className="pokemon-wrapper">
            {randomPokies.map((pokiemon)=>{
                return <PokiemonCard pokiemon={pokiemon} key={pokiemon.id} handleClick={handleClick} />
            })}
        </div>
        </>
    )
}



export default RenderRandomPokies;