import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper";


import pokeballRed from '@/assets/pokeball-red.png'
import pokeballBlue from '@/assets/pokeball-blue.png'
import arrow from '@/assets/arrow-down-white.svg'
import logo from '@/assets/logo.svg'

import Image from "next/image";
import { AreaSlide, SlideContent } from "./style";
import Link from "next/link";


export const Slide: React.FC = () => {
    const slideContent = [
        {
            title: 'Who is that Pokémon?',
            pokeball: pokeballRed,
            color: 'red'
        },

        { 
            title: 'Catch them all!',
            pokeball: pokeballBlue,
            color: 'blue'
        }
    ]
    return (
            <AreaSlide>
                <Swiper
                spaceBetween={30}
                effect={"fade"}
                pagination={{
                clickable: false,
                el: ".slideHero .pagination",
                }}
                autoplay={{
                    delay: 9000,
                    disableOnInteraction: false,
                    }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="slideHero"
            >
                    {slideContent.map(({title, pokeball, color}:any, index) =>
                        <SwiperSlide key={index} >
                            <SlideContent className={color}>
                                <div className="container">
                                    <div className="top">
                                        <div className="logo">
                                            <Image src={logo} alt="Logo Pokemon" title='Logo Pokemon'/>
                                            </div>
                                        <Link href={'/favorites'}>
                                            <span>My Favorites <strong>Pokemons</strong></span>
                                        </Link>
                                    </div>
                                    <div className={`tag ${color}`}>
                                        <div className="icon">
                                        🎒
                                        </div>
                                        <p>pokedex</p>
                                    </div>
                                    <h1>{title}</h1>
                                    <p className="description">
                                    The perfect guide for those who want to hunt Pokémons around the world
                                    </p>
                                    <div className="image-pokeball">
                                    <Image src={pokeball} quality={100} alt="Imagem de uma pokebola fechada alternando entre uma pokebola vermelha e branca, e outra azul e branca" title="Imagem de uma pokebola fechada alternando entre uma pokebola vermelha e branca, e outra azul e branca" className="poke"/>
                                    </div>
                                    <button className="explore-btn">
                                        <span>explore</span>
                                        <div className={`icon ${color}`}>
                                            <Image src={arrow} alt='Icone de seta' title="Ícone de seta" />
                                        </div>
                                    </button>
                                    <div className="pagination"></div>
                                </div>
                            </SlideContent>
                        </SwiperSlide>
                    )}
                </Swiper>
            </AreaSlide>
    )
 }
