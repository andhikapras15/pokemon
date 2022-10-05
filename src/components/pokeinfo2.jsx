import { useState } from "react";

const PokeInfo2 = ({ data2 }) => {
  const [tab, setTab] = useState(0);
  return (
    <>
      {!data2 ? (
        ""
      ) : (
        <div className="bg-teal-300 w-1/2  h-screen">
          <div className="py-7 px-6 h-1/2">
            <span className="text-white font-bold text-3xl">{data2.name}</span>
            <div className="flex mt-4 mb-7">
              {data2.abilities.map((pokeFun) => {
                return (
                  <>
                    <div className="text-white font-semibold h-full bg-green-300 px-5 py-1 rounded-full mr-2">
                      {pokeFun.ability.name}
                    </div>
                    {/* <div className="text-white font-semibold h-full bg-green-300 px-5 py-1 rounded-full">
                      solar-power
                    </div> */}
                  </>
                );
              })}
            </div>
            <div className="w-52 flex justify-center items-center">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data2.id}.svg`}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white w-full rounded-t-3xl h-1/2 mt-20">
            <div className="px-4 pt-8 flex justify-between mb-10">
              <span>About</span>
              <span>Best stats</span>
              <span>Evolution</span>
              <span>Moves</span>
            </div>
            <div className="pl-6">
              <div className="w-12">
                <span className="mr-14 ">Species</span>
                <span className="font-semibold">{data2.species.name}</span>
              </div>
              <div>
                <span className="mr-[60px]">Height</span>
                <span className="font-semibold">{data2.height}</span>
              </div>
              <div>
                <span className="mr-[58px]">Weight</span>
                <span className="font-semibold">{data2.weight}</span>
              </div>
              <div>
                <span className="mr-[52px]">Abilities</span>
                {data2.abilities.map((pokeFun) => {
                  return (
                    <>
                      <span className="font-semibold">
                        {pokeFun.ability.name},{" "}
                      </span>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PokeInfo2;
