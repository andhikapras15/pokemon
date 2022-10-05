const Card = ({ pokemon, loading, infoPokemon, infoPokemon2 }) => {
  return (
    <>
      {loading ? (
        <p>loadingg...</p>
      ) : (
        pokemon?.map((item) => {
          console.log("ini itemnya", item);
          return (
            <div
              className="md:w-44 w-full h-28 md:h-32 bg-teal-400 flex md:pl-4 md:pt-2 rounded-xl pl-2 pt-1 "
              key={item.id}
              onClick={() => infoPokemon(item)}
            >
              <div className="w-1/2">
                <span className="text-white font-bold md:text-base text-sm">
                  {item?.name}
                </span>
                <div>
                  {/* {pokemon?.abilities?.map((item) => {
                    console.log("ini dia pokemonnya", pokemon);
                    return (
                      <> */}
                  <div className="text-white md:font-medium text-xs w-full bg-teal-300 md:px-2 pr-1 pl-2 py-1 mb-1 md:py-1 rounded-full md:mt-2 md:mb-1">
                    {item?.abilities[0]?.ability?.name}
                  </div>
                  <div className="text-white md:font-medium text-xs w-full bg-teal-300 md:px-2 pr-1 pl-2 py-1 md:py-1 rounded-full md:mt-2 md:mb-1">
                    {item?.abilities[1]?.ability?.name}
                  </div>

                  {/* </>
                    );
                  })} */}
                </div>
              </div>
              <div className="w-28 h-10 md:pt-7 pt-8">
                <img src={item?.sprites?.front_default} alt="" />
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
