import Image from "next/image";
import { ModalBox, ModalContent } from "./style";

import closeBtn from "@/assets/close.svg";
import bug from "../../assets/icon-types/bug.svg";
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

export const Modal: React.FC<{
  type: any;
  id: number;
  image: any;
  name: string;
  stats: object[];
  height: number;
  weight: number;
  abilities: any | object[];
  closeModal: any;
  weakness: any;
  modal:boolean
}> = ({
  type,
  id,
  image,
  name,
  stats,
  height,
  weight,
  abilities,
  closeModal,
  weakness,
  modal
}) => {
  return (
    <ModalContent className={modal ? 'active' : ''}>
      <div className="overlay"></div>
        <ModalBox className={modal ? `active ${type[0].type.name}` : `${type[0].type.name}`}>
          <div className="close-button" onClick={closeModal}>
            <Image
              src={closeBtn}
              alt="Icon close modal"
              title="Close Pokemon Modal"
            />
          </div>
          <div className="left-modal">
            <div className="icon">
              <Image
                src={
                  type[0].type.name == "bug"
                    ? bug
                    : type[0].type.name == "dark"
                    ? dark
                    : type[0].type.name == "dragon"
                    ? dragon
                    : type[0].type.name == "electric"
                    ? electric
                    : type[0].type.name == "fairy"
                    ? fairy
                    : type[0].type.name == "fighting"
                    ? fighting
                    : type[0].type.name == "fire"
                    ? fire
                    : type[0].type.name == "flying"
                    ? flying
                    : type[0].type.name == "ghost"
                    ? ghost
                    : type[0].type.name == "grass"
                    ? grass
                    : type[0].type.name == "ground"
                    ? ground
                    : type[0].type.name == "ice"
                    ? ice
                    : type[0].type.name == "normal"
                    ? normal
                    : type[0].type.name == "poison"
                    ? poison
                    : type[0].type.name == "psychic"
                    ? psychic
                    : type[0].type.name == "rock"
                    ? rock
                    : type[0].type.name == "steel"
                    ? steel
                    : type[0].type.name == "steel"
                    ? steel
                    : water
                }
                title={`${name} from ${type[0].type.name}`}
                alt={type[0].type.name}
              />
            </div>
            <div className="image">
              <Image
                src={image}
                title={`${name} | is type ${type[0].type.name}`}
                alt={type[0].type.name}
                width={202}
                height={180}
                quality={90}
              />
            </div>
          </div>
          <div className="right-modal">
            <div className="top-modal">
              <h2>{name}</h2>
              <span className="id-modal">
                #{id < 10 ? `00${id}` : id < 100 ? `0${id}` : `${id}`}
              </span>
            </div>

            <ul className="all-types">
              {type.map((singleType: any, index: number) => (
                <li
                  key={singleType.type.name + index}
                  className={`tag ${singleType.type.name}`}
                >
                  {singleType.type.name}
                </li>
              ))}
            </ul>
            <div className="info-single-pokemon">
              <div className="col-info">
                <p className="info-title">Height</p>
                <span>{height / 10}m</span>
              </div>

              <div className="col-info">
                <p className="info-title">Weight</p>
                <span>{weight / 10}kg</span>
              </div>

              <div className="col-info">
                <p className="info-title">Abilities</p>
                <span>{abilities[0].ability.name}</span>
              </div>
            </div>

            <div className="all-weaknesses">
              <span>Weaknesses</span>
              <ul className="list-weaknesses">
                {weakness.damage_relations.double_damage_from.map(({name}:any, index:number) =>
                    <li key={name + index} className={`tag ${name}`}>
                        {name}
                    </li>
                )}
              </ul>
            </div>
            <div className="stats">
              <span className="title-stats">Stats</span>
              <div className="all-stats">
                <div className="single-stat" >
                {stats.map(({ stat }: any, index: number) => (
                      <span className="stat-name" key={stat.name + index}>
                        {stat.name.replace("special", "sp")}
                      </span>
                ))}
                </div>
                <div className="show-stats-bar">
                {stats.map(({ base_stat }:any, index: number) => (
                      <div className="single-bar" key={base_stat + index}>
                        <div
                          className="base-stat"
                          style={{ maxWidth: `${base_stat}%` }}
                        >
                        <ul className="separators">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </ModalBox>
    </ModalContent>
  );
};


