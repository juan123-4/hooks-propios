import { useState, useEffect } from "react";

export const useFetchCharacters = (url) => {
  const [fetchone, setFetch] = useState(null);

  useEffect(() => {
    const FetchCharacters = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Personaje no encontrado 😞");

        const data = await response.json();
        setFetch({
          name: data.name,
          image: data.image,
          species: data.species,
          imagePok: data.sprites?.front_default || null, 
        });
      } catch (err) {
        console.error(err);
      }
    };

    FetchCharacters();
  }, [url]); 

  return { fetchone };
};


 //LA OTRA MANERA DE QUE LO INTENTE


//
// import { useState, useEffect } from "react";

// export const usePokemon = () => {
//   const [pokemon, setPokemon] = useState(null);

//   useEffect(() => {
//     const fetchPokemon = async () => {
//       try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
//         if (!response.ok) throw new Error("Pokémon no encontrado 😞");

//         const data = await response.json();
//         setPokemon({
//           name: data.name,
//           image: data.sprites.front_default,
//           type: data.types.map((t) => t.type.name).join(", "),
//         });
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchPokemon();
//   }, []);

//   return { pokemon }; 
// };

// export const useRick = () => {
//   const [rick, setRick] = useState(null);

//   useEffect(() => {
//     const fetchRick = async () => {
//       try {
//         const response = await fetch("https://rickandmortyapi.com/api/character/1");
//         if (!response.ok) throw new Error("Personaje no encontrado 😞");

//         const data = await response.json();
//         setRick({
//           name: data.name,
//           image: data.image,
//           species: data.species,
//         });
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchRick();
//   }, []);

//   return { rick }; 
// };
