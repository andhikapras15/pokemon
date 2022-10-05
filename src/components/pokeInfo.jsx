import { useState } from "react";

const PokeInfo = ({ data }) => {
  const [tab, setTab] = useState(0);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <div className="bg-teal-400 md:w-1/2  h-screen sticky top-0">
          <div className="md:py-7 md:px-6 py-3 px-4 h-1/2">
            <span className="text-white font-bold md:text-3xl text-sm ">
              {data.name}
            </span>
            <div className="flex md:mt-4 md:mb-7 mb-3">
              {data.abilities.map((pokeFun) => {
                return (
                  <>
                    <div className="text-white font-semibold h-full md:text-base text-[10px] bg-teal-300 md:px-5 px-3 py-1 md:py-1 rounded-full md:mr-2 mr-1">
                      {pokeFun.ability.name}
                    </div>
                    {/* <div className="text-white font-semibold h-full bg-green-300 px-5 py-1 rounded-full">
                      solar-power
                    </div> */}
                  </>
                );
              })}
            </div>
            <div className="md:w-52 md:mx-20  w-32 h-16">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white w-full rounded-t-3xl h-1/2 md:mt-20 mt-12">
            {tab === 0 ? (
              <div>
                <div className="md:px-4 md:pt-8 pt-6 flex justify-between md:mb-10">
                  <span
                    className="font-bold text-[10px] md:text-base cursor-pointer"
                    onClick={() => setTab(0)}
                  >
                    About
                  </span>
                  <span
                    className=" text-[10px] md:text-base cursor-pointer"
                    onClick={() => setTab(1)}
                  >
                    Best stats
                  </span>
                  <span
                    className=" text-[10px] md:text-base cursor-pointer"
                    onClick={() => setTab(2)}
                  >
                    Evolution
                  </span>
                  <span
                    className=" text-[10px] md:text-base cursor-pointer"
                    onClick={() => setTab(3)}
                  >
                    Moves
                  </span>
                </div>
                <div className="md:pl-6">
                  <div className="w-12">
                    <span className="md:mr-14 mr-10 text-[10px] md:text-base">
                      Species
                    </span>
                    <span className="font-semibold text-[10px] md:text-base">
                      {data.species.name}
                    </span>
                  </div>
                  <div>
                    <span className="md:mr-[60px] mr-11 text-[10px] md:text-base">
                      Height
                    </span>
                    <span className="font-semibold text-[10px] md:text-base">
                      {data.height}
                    </span>
                  </div>
                  <div>
                    <span className="md:mr-[58px] mr-11 text-[10px] md:text-base">
                      Weight
                    </span>
                    <span className="font-semibold text-[10px] md:text-base">
                      {data.weight}
                    </span>
                  </div>
                  <div>
                    <span className="md:mr-[52px] mr-10 text-[10px] md:text-base">
                      Abilities
                    </span>
                    {data.abilities.map((pokeFun) => {
                      return (
                        <>
                          <span className="font-semibold text-[10px] md:text-base">
                            {pokeFun.ability.name},{" "}
                          </span>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}
            {tab === 1 ? (
              <div>
                <div className="md:px-4 md:pt-8 pt-7 space-y-0 flex justify-between md:mb-10">
                  <span
                    className="text-[10px] md:text-base cursor-pointer"
                    onClick={() => setTab(0)}
                  >
                    About
                  </span>
                  <span className="text-[10px] md:text-base font-bold cursor-pointer">
                    Best stats
                  </span>
                  <span
                    className="text-[10px] md:text-base cursor-pointer"
                    onClick={() => setTab(2)}
                  >
                    Evolution
                  </span>
                  <span
                    className="text-[10px] md:text-base cursor-pointer"
                    onClick={() => setTab(3)}
                  >
                    Moves
                  </span>
                </div>
                <div className="md:pl-6">
                  <div className="w-12">
                    <span className="md:mr-28 mr-20 text-[10px] md:text-base">
                      HP
                    </span>
                    <span className="font-semibold text-[10px] md:text-base">
                      {data.stats[0].base_stat}
                    </span>
                  </div>
                  <div>
                    <span className="md:mr-[90px] mr-16 text-[10px] md:text-base">
                      attack
                    </span>
                    <span className="font-semibold text-[10px] md:text-base">
                      {data.stats[1].base_stat}
                    </span>
                  </div>
                  <div>
                    <span className="md:mr-[78px] mr-14 text-[10px] md:text-base">
                      defense
                    </span>
                    <span className="font-semibold text-[10px] md:text-base">
                      {data.stats[2].base_stat}
                    </span>
                  </div>
                  <div>
                    <span className="md:mr-9 mr-8 text-[10px] md:text-base">
                      special-attack
                    </span>
                    <span className="font-semibold text-[10px] md:text-base">
                      {data.stats[3].base_stat}
                    </span>
                  </div>
                  <div>
                    <span className="md:mr-6 mr-6 text-[10px] md:text-base">
                      special-defense
                    </span>
                    <span className="font-semibold text-[10px] md:text-base">
                      {data.stats[4].base_stat}
                    </span>
                  </div>
                  <div>
                    <span className="md:mr-[90px] mr-16 text-[10px] md:text-base">
                      speed
                    </span>
                    <span className="font-semibold text-[10px] md:text-base">
                      {data.stats[5].base_stat}
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
            {tab === 2 ? (
              <div>
                <div className="md:px-4 md:pt-8 pt-6 flex justify-between md:mb-10">
                  <span
                    className="text-[10px] md:text-base cursor-pointer"
                    onClick={() => setTab(0)}
                  >
                    About
                  </span>
                  <span
                    className="text-[10px] md:text-base cursor-pointer"
                    onClick={() => setTab(1)}
                  >
                    Best stats
                  </span>
                  <span className="font-bold text-[10px] md:text-base cursor-pointer">
                    Evolution
                  </span>
                  <span
                    className="text-[10px] md:text-base cursor-pointer"
                    onClick={() => setTab(3)}
                  >
                    Moves
                  </span>
                </div>
                <div className="md:pl-6">
                  <div className="w-12">
                    <span className="md:mr-14 text-[10px] md:text-base">
                      {data.moves.name}
                    </span>
                    <span className="font-semibold"></span>
                  </div>
                  <div>
                    <span className="md:mr-[60px] mr-10 text-[10px] md:text-base">
                      Height
                    </span>
                    <span className="font-semibold text-[10px] md:text-base">
                      {data.height}
                    </span>
                  </div>
                  <div>
                    <span className="md:mr-[58px] mr-9 text-[10px] md:text-base">
                      Weight
                    </span>
                    <span className="font-semibold text-[10px] md:text-base">
                      {data.weight}
                    </span>
                  </div>
                  <div>
                    <span className="md:mr-[52px] mr-8 text-[10px] md:text-base">
                      Abilities
                    </span>
                    {data.abilities.map((pokeFun) => {
                      return (
                        <>
                          <span className="text-[10px] md:text-base font-semibold">
                            {pokeFun.ability.name},{" "}
                          </span>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}
            {tab === 3 ? (
              <div>
                <div className="md:px-4 md:pt-8 pt-6 flex justify-between md:mb-10">
                  <span
                    className="text-[10px] md:text-base"
                    onClick={() => setTab(0)}
                  >
                    About
                  </span>
                  <span
                    className="text-[10px] md:text-base"
                    onClick={() => setTab(1)}
                  >
                    Best stats
                  </span>
                  <span
                    className="text-[10px] md:text-base"
                    onClick={() => setTab(2)}
                  >
                    Evolution
                  </span>
                  <span className="font-bold text-[10px] md:text-base">
                    Moves
                  </span>
                </div>
                <div className="md:pl-6">
                  <span className="md:mr-14 text-[10px] md:text-base">
                    {data.moves[0].move.name}, {data.moves[1].move.name},{" "}
                    {data.moves[2].move.name}, {data.moves[3].move.name},{" "}
                    {data.moves[4].move.name}, {data.moves[5].move.name},{" "}
                    {data.moves[6].move.name}, {data.moves[7].move.name},{" "}
                    {data.moves[8].move.name}, {data.moves[9].move.name},{" "}
                    {data.moves[11].move.name}, {data.moves[12].move.name},{" "}
                    {data.moves[13].move.name}, {data.moves[14].move.name},{" "}
                    {data.moves[15].move.name}, {data.moves[16].move.name},{" "}
                    {data.moves[17].move.name}, {data.moves[18].move.name},{" "}
                    {data.moves[19].move.name}
                  </span>
                  {/* <span className="font-semibold">{data.species.name}</span> */}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};
export default PokeInfo;
