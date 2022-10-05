import "./App.css";
import Card from "./components/card";
import PokeInfo from "./components/pokeInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import PokeInfo2 from "./components/pokeinfo2";

function App() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [loading, setLoding] = useState(true);
  const [url, setUrl] = useState(" https://pokeapi.co/api/v2/pokemon/");
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [poke, setPoke] = useState();
  const [pokeDet, setPokeDet] = useState();

  //get all data pokemon
  const pokeDex = async () => {
    setLoding(true);
    const res = await axios.get(url);

    setNext(res.data.next);
    setPrev(res.data.previous);
    getPokemon(res.data.results);
    setLoding(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      console.log(result.data);
      setDataPokemon((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    pokeDex();
  }, [url]);
  // grid grid-cols-2 gap-2
  return (
    <div className="flex ">
      <div className="md:w-1/3 w-1/2 h-screen md:h-screen flex flex-wrap gap-2 p-3 md:p-5 overflow-y-scroll sticky top-0">
        <div className="md:w-80 md:mb-8 ">
          <span className="font-bold md:text-3xl text-slate-800">Pokedex</span>
        </div>
        <Card
          pokemon={dataPokemon}
          loading={loading}
          infoPokemon={(pokeFun) => setPoke(pokeFun)}
          // infoPokemon2={(pokeFun) => setPokeDet(pokeFun)}
        />
      </div>
      <div className="md:w-2/3 w-2/3 h-screen md:h-screen bg-gray-200 flex justify-between md:px-4 sticky top-0">
        <PokeInfo data={poke} />
        {/* <PokeInfo2 data2={pokeDet} /> */}
      </div>
    </div>
  );
}

export default App;
