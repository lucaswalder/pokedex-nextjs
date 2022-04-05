import { useEffect, useState } from "react"
import { api } from "../services/api"

import { Slide } from "@/components/Slide";
import { Search } from "@/components/Search";
import { Card } from "@/components/Card";
import { MainContent } from "./style";

import Image from "next/image";

import bug from '@/assets/icon-types/bug.svg'
import dark from '@/assets/icon-types/dark.svg'
import dragon from '@/assets/icon-types/dragon.svg'
import electric from '@/assets/icon-types/electric.svg'
import fairy from '@/assets/icon-types/fairy.svg'
import fighting from '@/assets/icon-types/fighting.svg'
import fire from '@/assets/icon-types/fire.svg'
import flying from '@/assets/icon-types/flying.svg'
import ghost from '@/assets/icon-types/ghost.svg'
import grass from '@/assets/icon-types/grass.svg'
import ground from '@/assets/icon-types/ground.svg'
import ice from '@/assets/icon-types/ice.svg'
import normal from '@/assets/icon-types/normal.svg'
import poison from '@/assets/icon-types/poison.svg'
import psychic from '@/assets/icon-types/psychic.svg'
import rock from '@/assets/icon-types/rock.svg'
import steel from '@/assets/icon-types/steel.svg'
import water from '@/assets/icon-types/water.svg'
import pokeballIconBlue from '@/assets/icon-types/pokeball-blue.svg'
import pokeballIconRed from '@/assets/icon-pokeball.svg'

export async function getStaticProps() {
  const response = await api.get('pokemon?offset=0&limit=9')
  const singlePoke = await Promise.all(
    response.data.results.map( ({url}:any) => 
    api.get(url)
  )
  )

  const allTypes = await api.get('type')

  let listPoke:any = []
  for(let i = 0; i < response.data.results.length; i++ ) {
    listPoke.push(singlePoke[i].data)
  }

  return {
    props: {
      pokemonInfo: listPoke,
      pokeList: response.data,
      listAllTypes: allTypes.data
    }
  }
}

const Home: React.FC = ({pokemonInfo, pokeList, listAllTypes}: any) => {
  const iconTypes = [
    {
      icon: normal
    },

    {
      icon: fighting
    },
    {
      icon: flying
    },
    {
      icon: poison
    },
    {
      icon: ground
    },
    {
      icon: rock
    },
    {
      icon: bug
    },
    {
      icon: ghost
    },
    {
      icon: steel
    },
    {
      icon: fire
    },
    {
      icon: water
    },
    {
      icon: grass
    },
    {
      icon: electric
    },
    {
      icon: psychic
    },
    {
      icon: ice
    },

    {
      icon: dragon
    },

    {
      icon: dark
    },

     {
      icon: fairy
    },
    
  ];
  

  const [dados, setDados] = useState([])
  const [showType, setShowType] = useState(false)

  const handleApi = async (name:any) => {
    const response = await api.get(name)
    const types = await Promise.all(
      response.data.pokemon.map( ({pokemon}:any) => 
      api.get(pokemon.url)
    ))

    let listTypes:any = []
    for(let i = 0; i < response.data.pokemon.length; i++ ) {
      listTypes.push(types[i].data)
    }
    setDados(listTypes)
    setShowType(true)
    }

  useEffect(() => {
    handleApi
  },[dados])

  useEffect(() => {
    console.log(listAllTypes.results)
  }, [])

  
  return (
    <>
    <Slide/>
    <Search/>
    <MainContent>
      <div className="container">
        <aside>
        <button className='all' onClick={() => setShowType(false)}>
            <div className="icon">
            <Image src={pokeballIconBlue} title='See all pokemons' alt='icon all' />
            </div>
            <span>All</span>
          </button>
        {listAllTypes.results.filter( (type:any) => {
            if(type.name !== 'unknown' && type.name !== 'shadow')
            return type
          }).map((type:any, index:number) => 
          <button className={type.name} key={type + index} onClick={() => handleApi(`type/${index + 1}`)}>
            <div className="icon">
            <Image src={iconTypes[index].icon} title={type.name} alt={type.name} />
            </div>
            <span>{type.name}</span>
          </button>
        )}
        </aside>
        <div className="right-area">
          { !showType && 
            <>
              <div className="top-area">
                <span>{pokeList.count}</span>
              </div>
              <div className="grid-list">
                {
                pokemonInfo.map(({types, name, id, sprites}: any, index:number) => 
                  <Card key={name+index}
                    name={name}
                    type={types[0].type.name}
                    id={id}
                    image={sprites.other.dream_world.front_default || sprites.front_default }
                  />
                  )}
              </div>
            </>
          }
          { showType &&
          <>
            <div className="top-area">
              <Image src={pokeballIconRed} title='Numbers of pokemons' alt='Numbers of Pokemon' />
              <span>{dados.length} Pokemons</span>
            </div>
            <div className="grid-list">
                {
                dados.map(({types, name, id, sprites}: any, index:number) => 
                <Card key={name+index}
                  name={name}
                  type={types[0].type.name}
                  id={id}
                  image={sprites.other.dream_world.front_default || sprites.front_default}
                />
                )}
            </div>
          </>
          }
        </div>
      </div>
    </MainContent>
    </>
  )
}

export default Home
