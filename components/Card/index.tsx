import { CardContent } from "./style"
import Image from "next/image"

import bug from '../../assets/icon-types/bug.svg'
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
import { Modal } from "../Modal"
import { useEffect, useState } from "react"
import { api } from "services/api"

export const Card: React.FC <{type: string, allTypes:object[], id:number, image:any, name:string, stats:object[], height:number, weight:number, abilities:object[]}> = ({type, id, image, name, stats, height, weight, abilities, allTypes}) => {

    const [modal, setModal] = useState<boolean>(false)
    const [weakness, setWeakness] = useState<object[]>([])

    const handleModalStatus = async (type:any) => {
        const response = await api.get(type)
        setModal(true)
        setWeakness(response.data)
    }

    return(
        <>
        <CardContent className={type} onClick={() => {handleModalStatus(`type/${type}`)}}>
            <div className="image">
                <Image src={image} alt={name} title={name} layout='fill' quality={90}/>
                <div className="bg"></div>
            </div>

            <div className="info">
                <div className="left">
                    <span className="id">
                        #{id < 10 ? `00${id}` : id < 100 ? `0${id}` : `${id}`}
                    </span>
                    <h5>{name}</h5>
                </div>
                <div className="right">
                    <Image src={
                        type == 'bug'
                        ? bug
                        : type == 'dark'
                        ? dark 
                        : type == 'dragon'
                        ? dragon
                        : type == 'electric'
                        ? electric
                        : type == 'faiy'
                        ? fairy
                        : type == 'fighting'
                        ? fighting
                        : type == 'fire'
                        ? fire
                        : type == 'flying'
                        ? flying
                        : type == 'ghost'
                        ? ghost
                        : type == 'grass'
                        ? grass
                        : type == 'ground'
                        ? ground
                        : type == 'ice'
                        ? ice
                        : type == 'normal'
                        ? normal
                        : type == 'poison'
                        ? poison
                        : type == 'psychic'
                        ? psychic
                        : type == 'rock'
                        ? rock
                        : type == 'steel'
                        ? steel
                        : water
                    }
                        title={`${name} from ${type}`} alt={type} />
                </div>
            </div>
            </CardContent>
            {modal &&
                <Modal
                type={allTypes}
                id={id}
                image={image}
                name={name}
                stats={stats}
                height={height}
                weight={weight}
                abilities={abilities}
                closeModal={() => {setModal(false)}}
                weakness={weakness}
                modal={modal}
                />
            }
        </>
    )
}