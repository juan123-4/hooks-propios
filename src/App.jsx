import { useFetchCharacters } from "./hooks/useFetchCharacters";
import "./App.css"

function App() {
  const rickUrl = "https://rickandmortyapi.com/api/character/1";
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/1";

  
  const { fetchone: rick} = useFetchCharacters(rickUrl);
  const { fetchone: pokemon} = useFetchCharacters(pokemonUrl);
  
return (
    <>
      <h2>Personaje Rick and morty</h2>
      {rick ? (
        <>
          <p>{rick.name.toUpperCase()}</p>
          <img src={rick.image} alt={rick.name} />
          <p>Especie: {rick.species}</p>
        </>
      ) : (
        <p>Cargando Personaje ...</p>
      )}

      <h2>Personaje Pokemon</h2>
      {pokemon ? (
        <>
          <p>{pokemon.name.toUpperCase()}</p> 
          <img src={pokemon.imagePok} alt={rick.name} />
          
        </>
      ) : (
        <p>Cargando personaje...</p>
      )}
    </>
  );
}

export default App;


//MANERA DIFERENTE

// import {usePokemon,useRick} from "./hooks/useFetchCharacters"


// function App() {
//   const {pokemon}=usePokemon()
//   const {rick}=useRick()
//   return (
//     <>
//       <h2>Personaje Pokémon</h2>
//       {pokemon ? (
//         <>
//           <p>{pokemon.name}</p>
//           <img src={pokemon.image} alt={pokemon.name} />
//           <p>Tipo: {pokemon.type}</p>
//         </>
//       ) : (
//         <p>Cargando Pokémon...</p>
//       )}

//       <h2>Personaje Rick and Morty</h2>
//       {rick ? (
//         <>
//           <p>{rick.name}</p>
//           <img src={rick.image} alt={rick.name} />
//           <p>Especie: {rick.species}</p>
//         </>
//       ) : (
//         <p>Cargando personaje...</p>
//       )}
//     </>
//   );
// }


// export default App;

