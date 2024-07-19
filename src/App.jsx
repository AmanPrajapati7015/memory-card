import { useEffect, useState } from 'react'
import RenderRandomPokies from './Randomise';
import Topbar from  './top'


function App() {

  const [pokemons , setPokemons] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);



  let started = true;
  useEffect(()=>{
    if(started){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
      .then(resp=>resp.json())
      .then(res=>{
        const pokes = [];
        res.results.forEach((pokemon, i) => {
          const newPokemon = {id:i+1,name:pokemon.name};
          pokes.push(newPokemon);
        });
        setPokemons(pokes);
        setIsLoading(false);
        console.log(pokes);
      })
    }

    return (()=>{
      started= false;
    })

  },[])



  return (
    <>
      <Topbar score={score} highScore={highScore}/>
      {isloading?
      <Loading/>:
      <RenderRandomPokies pokies={pokemons} setScore={setScore} setHighScore={setHighScore}/>
      }
      
    </>
  )
}


function Loading(){
  return 'loading...'
}

export default App
