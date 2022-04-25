import { useEffect, useState } from "react";

import Image from "next/image";

import { deletePokemon, getsavedPokemons } from "services/favoritePokemons";

import { Hero, MainContent } from "./style";

import { Card } from "@/components/Card";

import pokeballIconRed from "@/assets/icon-pokeball.svg";
import { Footer } from "@/components/Footer";
import Link from "next/link";


const Favorites:React.FC = () => {

    const [myFavorites, setMyFavorites] = useState<any>([])

    useEffect(() => {
        const favoritesPokemons = getsavedPokemons('@mypoke')
        setMyFavorites(favoritesPokemons)
    }, [])

    const handleDelete = (id:number) => {
        const result = deletePokemon(myFavorites, id)
        setMyFavorites(result)
      }

    return(
        <>
        <Hero>
            <div className="container">
                <h1>My Favorites Pokemons</h1>
                <Link href={'/'}>
                    <span>Back to <strong>Home</strong></span>
                </Link>
            </div>
        </Hero>
        <MainContent>
            <div className="container">
                <div className="top">
                    <Image src={pokeballIconRed} alt='Pokeball Icon' title="Pokeball icon" quality={90} />
                    <span>You have {myFavorites.length} Pokemons in you list.</span>
                </div>
                <div className="grid-pokemons">
                {myFavorites.map(
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
                    <div className="item" key={name + index}>
                      <Card
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
                      <button className="btn-del" onClick={()=> handleDelete(id)}>Unfavorite</button>
                      </div>
                    )
        )}
                </div>
            </div>
        </MainContent>
        <Footer/>
        </>
    )
};

export default Favorites
