import { useEffect, useState } from "react";
import { api } from "../services/api";

import { Slide } from "@/components/Slide";
import { Search } from "@/components/Search";
import { Card } from "@/components/Card";
import { MainContent } from "./styles";

import Image from "next/image";

import bug from "@/assets/icon-types/bug.svg";
import dark from "@/assets/icon-types/dark.svg";
import dragon from "@/assets/icon-types/dragon.svg";
import electric from "@/assets/icon-types/electric.svg";
import fairy from "@/assets/icon-types/fairy.svg";
import fighting from "@/assets/icon-types/fighting.svg";
import fire from "@/assets/icon-types/fire.svg";
import flying from "@/assets/icon-types/flying.svg";
import ghost from "@/assets/icon-types/ghost.svg";
import grass from "@/assets/icon-types/grass.svg";
import ground from "@/assets/icon-types/ground.svg";
import ice from "@/assets/icon-types/ice.svg";
import normal from "@/assets/icon-types/normal.svg";
import poison from "@/assets/icon-types/poison.svg";
import psychic from "@/assets/icon-types/psychic.svg";
import rock from "@/assets/icon-types/rock.svg";
import steel from "@/assets/icon-types/steel.svg";
import water from "@/assets/icon-types/water.svg";
import pokeballIconBlue from "@/assets/icon-types/pokeball-blue.svg";
import pokeballIconRed from "@/assets/icon-pokeball.svg";
import { Footer } from "@/components/Footer";

export async function getStaticProps() {
  const response = await api.get("pokemon?offset=0&limit=9");
  const singlePoke = await Promise.all(
    response.data.results.map(({ url }: any) => api.get(url))
  );

  const allTypes = await api.get("type");

  let listPoke: any = [];
  for (let i = 0; i < response.data.results.length; i++) {
    listPoke.push(singlePoke[i].data);
  }

  return {
    props: {
      pokemonInfo: listPoke,
      pokeList: response.data,
      listAllTypes: allTypes.data,
    },
  };
}

const Home: React.FC = ({ pokemonInfo, pokeList, listAllTypes }: any) => {
  const iconTypes = [
    {
      icon: normal,
    },

    {
      icon: fighting,
    },
    {
      icon: flying,
    },
    {
      icon: poison,
    },
    {
      icon: ground,
    },
    {
      icon: rock,
    },
    {
      icon: bug,
    },
    {
      icon: ghost,
    },
    {
      icon: steel,
    },
    {
      icon: fire,
    },
    {
      icon: water,
    },
    {
      icon: grass,
    },
    {
      icon: electric,
    },
    {
      icon: psychic,
    },
    {
      icon: ice,
    },

    {
      icon: dragon,
    },

    {
      icon: dark,
    },

    {
      icon: fairy,
    },
  ];

  const [dados, setDados] = useState([]);
  const [showType, setShowType] = useState(false);
  const [modal, setModal] = useState(false);
  const [showAll, setShowAll] = useState(true)
  const [text, setText] = useState("");
  const [showMore, setShowMore] = useState<any>([])
  const [pokeCounter, setPokeCounter] = useState(0)
  const [message, setMessage] = useState<any>('')
  const [search, setSearch] = useState<{
    type: any;
    allTypes: any;
    id: number;
    image: any;
    name: string;
    stats: any;
    height: number;
    weight: number;
    abilities: any;
    types: any;
    sprites: any;
  }>({
    type: null,
    allTypes: null,
    id: 0,
    image: null,
    name: '',
    stats: null,
    height: 0,
    weight: 0,
    abilities: null,
    types: null,
    sprites: null
  });
  const [showResults, setShowResults] = useState(false);
  const handleApi = async (name: any) => {
    const response = await api.get(name);
    const types = await Promise.all(
      response.data.pokemon.map(({ pokemon }: any) => api.get(pokemon.url))
    );

    let listTypes: any = [];
    for (let i = 0; i < response.data.pokemon.length; i++) {
      listTypes.push(types[i].data);
    }
    setDados(listTypes);
    setShowType(true);
    setShowResults(false);
    setShowAll(false);
    setMessage(false);
    setText('')
  };

  const handleSearch = () => {
    api.get(`pokemon/${text.toLocaleLowerCase()}`)
      .then(response => {
        setSearch(response.data);
        setShowResults(true);
        setShowAll(false)
        setShowType(false)
        setMessage(false)
      }).catch((error) => {
        if (error.response) {
          setText('')
          setMessage(text)
          setShowResults(false)
          setShowAll(false)
          setShowType(false)
        }
      })
  };

  const handleShowMore = async () => {
    const response = await api.get(`pokemon?offset=9&limit=${pokeCounter}`);
    const morePokemon = await Promise.all(
      response.data.results.map(({ url }: any) => api.get(url))
    );

    let listMorePokemon: any = [];
    for (let i = 0; i < response.data.results.length; i++) {
      listMorePokemon.push(morePokemon[i].data);
    }
    setShowMore(listMorePokemon)
  }
  
  useEffect(() => {
  }, [dados]);

  useEffect(() => {
    setPokeCounter(pokeCounter + 9)
  }, [showMore]);

  useEffect(() => {
  }, [search]);

  return (
    <>
      <Slide />
      <Search
        value={text}
        onChange={(search: any) => setText(search)}
        searchTerm={handleSearch}
      />
      <MainContent>
        <div className="container">
          <aside>
            <button
              className={showType ? "all" : "all active"}
              onClick={() => { setShowType(false), setShowResults(false), setMessage(false), setShowMore(''), setPokeCounter(0), setShowAll(true), setText('') }}
            >
              <div className="icon">
                <Image
                  src={pokeballIconBlue}
                  title="See all pokemons"
                  alt="icon all"
                />
              </div>
              <span>All</span>
            </button>
            {listAllTypes.results
              .filter((type: any) => {
                if (type.name !== "unknown" && type.name !== "shadow")
                  return type;
              })
              .map((type: any, index: number) => (
                <button
                  aria-controls="pokelist"
                  id="button"
                  className={type.name}
                  key={type + index}
                  onClick={() => handleApi(`type/${index + 1}`)}
                >
                  <div className="icon">
                    <Image
                      src={iconTypes[index].icon}
                      title={type.name}
                      alt={type.name}
                    />
                  </div>
                  <span>{type.name}</span>
                </button>
              ))}
          </aside>
          <div className="right-area">
            {message && 
              <>
                <div className="top-area">
                  <Image
                    src={pokeballIconRed}
                    title="Numbers of pokemons"
                    alt="Numbers of Pokemon"
                  />
                  <span>0 Pokemon</span>
                </div>
                <div className="error-message">
                  <h4>No Pokemon with name or id: <span>{message}</span> has found.</h4>
                  <p>Please try again!</p>
                </div>
              </>
            }
            {showResults && (
              <>
                <div className="top-area">
                  <Image
                    src={pokeballIconRed}
                    title="Numbers of pokemons"
                    alt="Numbers of Pokemon"
                  />
                  <span>1 Pokemon</span>
                </div>
                <div
                  className="grid-list"
                  id="pokelist"
                  aria-labelledby="button"
                >
                  <Card
                    name={search.name}
                    type={search.types[0].type.name}
                    id={search.id}
                    image={search.sprites.other.dream_world.front_default}
                    stats={search.stats}
                    height={search.height}
                    weight={search.weight}
                    abilities={search.abilities}
                    allTypes={search.types}
                  />
                </div>
              </>
            )}
              { showAll && 
                <>
                <div className="top-area">
                  <Image
                    src={pokeballIconRed}
                    title="Numbers of pokemons"
                    alt="Numbers of Pokemon"
                  />
                  <span>{pokeList.count} Pokemons</span>
                </div>
                <div
                  className="grid-list"
                  id="pokelist"
                  aria-labelledby="button"
                >
                  {pokemonInfo.map(
                    (
                      {
                        types,
                        name,
                        id,
                        sprites,
                        stats,
                        height,
                        weight,
                        abilities,
                      }: any,
                      index: number
                    ) => (
                      <Card
                        key={name + index}
                        name={name}
                        type={types[0].type.name}
                        id={id}
                        image={
                          sprites.other.dream_world.front_default ||
                          sprites.front_default
                        }
                        stats={stats}
                        height={height}
                        weight={weight}
                        abilities={abilities}
                        allTypes={types}
                      />
                    )
                  )}
                  {showMore && !message &&
                    showMore.map(
                      (
                        {
                          types,
                          name,
                          id,
                          sprites,
                          stats,
                          height,
                          weight,
                          abilities,
                        }: any,
                        index: number
                      ) => (
                        <Card
                          key={name + index}
                          name={name}
                          type={types[0].type.name}
                          id={id}
                          image={
                            sprites.other.dream_world.front_default ||
                            sprites.front_default
                          }
                          stats={stats}
                          height={height}
                          weight={weight}
                          abilities={abilities}
                          allTypes={types}
                        />
                      )
                    )
                  }

                </div>
                <button className="load-more" onClick={handleShowMore}>
                  Load more Pokemons
                </button>
              </>
              }

            {showType && (
              <>
                <div className="top-area">
                  <Image
                    src={pokeballIconRed}
                    title="Numbers of pokemons"
                    alt="Numbers of Pokemon"
                  />
                  <span>{dados.length} Pokemons</span>
                </div>
                <div className="grid-list">
                  {dados.filter((filteredPokemon: any) => {
                    if (filteredPokemon.sprites.front_default !== null) {
                      return filteredPokemon
                    }
                  }).map(
                    (
                      {
                        types,
                        name,
                        id,
                        sprites,
                        stats,
                        height,
                        weight,
                        abilities,
                      }: any,
                      index: number
                    ) => (
                      <Card
                        key={name + index}
                        name={name}
                        type={types[0].type.name}
                        id={id}
                        image={
                          sprites.other.dream_world.front_default ||
                          sprites.front_default
                        }
                        stats={stats}
                        height={height}
                        weight={weight}
                        abilities={abilities}
                        allTypes={types}
                      />
                    )
                  )
                  }
                </div>
              </>
            )}
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default Home;
