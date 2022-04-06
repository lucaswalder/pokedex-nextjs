import styled, { keyframes } from "styled-components";

import bug from "../../assets/bg-types/bug.svg";
import dark from "@/assets/bg-types/dark.svg";
import dragon from "@/assets/bg-types/dragon.svg";
import electric from "@/assets/bg-types/electric.svg";
import fairy from "@/assets/bg-types/fairy.svg";
import fighting from "@/assets/bg-types/fighting.svg";
import fire from "@/assets/bg-types/fire.svg";
import flying from "@/assets/bg-types/flying.svg";
import ghost from "@/assets/bg-types/ghost.svg";
import grass from "@/assets/bg-types/grass.svg";
import ground from "@/assets/bg-types/ground.svg";
import ice from "@/assets/bg-types/ice.svg";
import normal from "@/assets/bg-types/normal.svg";
import poison from "@/assets/bg-types/poison.svg";
import psychic from "@/assets/bg-types/psychic.svg";
import rock from "@/assets/bg-types/rock.svg";
import steel from "@/assets/bg-types/steel.svg";
import water from "@/assets/bg-types/water.svg";

const modalOpacity = keyframes`
    from {
        opacity: 0;
        pointer-events: none;
    }
    to {
        opacity: 1;
        pointer-events: all;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(5rem);
    }
    to {
        transform: translateY(0);
    }
`;

export const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${modalOpacity} .3s ease forwards;

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

export const ModalBox = styled.div`
    background: var(--white);
    display: flex;
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 71rem;
    height: 50.8rem;
    box-shadow: 0px 10px 40px rgba(13, 12, 71, 0.05);
    border-radius: 16px;
    animation: ${slideUp} .3s ease forwards;
    &.bug {
        background: var(--white) url(${bug.src}) no-repeat left top;
    }

    &.dark {
        background: var(--white) url(${dark.src}) no-repeat left top;
    }

    &.dragon {
        background: var(--white) url(${dragon.src}) no-repeat left top;
    }

    &.electric {
        background: var(--white) url(${electric.src}) no-repeat left top;
    }

    &.fairy {
        background: var(--white) url(${fairy.src}) no-repeat left top;
    }

    &.fighting {
        background: var(--white) url(${fighting.src}) no-repeat left top;
    }

    &.fire {
        background: var(--white) url(${fire.src}) no-repeat left top;
    }

    &.flying {
        background: var(--white) url(${flying.src}) no-repeat left top;
    }

    &.ghost {
        background: var(--white) url(${ghost.src}) no-repeat left top;
    }

    &.grass {
        background: var(--white) url(${grass.src}) no-repeat left top;
    }

    &.ground {
        background: var(--white) url(${ground.src}) no-repeat left top;
    }

    &.ice {
        background: var(--white) url(${ice.src}) no-repeat left top;
    }

    &.normal {
        background: var(--white) url(${normal.src}) no-repeat left top;
    }

    &.poison {
        background: var(--white) url(${poison.src}) no-repeat left top;
    }

    &.psychic {
        background: var(--white) url(${psychic.src}) no-repeat left top;
    }

    &.rock {
        background: var(--white) url(${rock.src}) no-repeat left top;
    }

    &.steel {
        background: var(--white) url(${steel.src}) no-repeat left top;
    }

    &.water {
        background: var(--white) url(${water.src}) no-repeat left top;
    }

    .close-button {
        position: absolute;
        right: 0;
        top: -4.4rem;
        width: 3.6rem;
        height: 3.6rem;
        background: var(--white);
        border-radius: 8px;
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    .left-modal {
        padding-left: 1.4rem;
        padding-top: 2rem;
        margin-right: 4.8rem;
        .icon {
            width: 3.4rem;
            height: 3.4rem;
            background: var(--white);
            border-radius: 50%;
            display: grid;
            place-items: center;
            margin-left: 12.3rem;
            margin-bottom: 11.5rem;
        }
        .image {
            width: 20.2rem;
            height: 18rem;
            >img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .right-modal {
        padding-top: 3.5rem;
        width: 100%;
        max-width: 37.3rem;
        .top-modal {
            margin-bottom: 1rem;
            h2 {
                line-height: 100%;
                text-transform: capitalize;
                margin-right: 0.8rem;
            }
            display: flex;
            align-items: flex-end;
            .id-modal {
                font-family: 'Montserrat', sans-serif;
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 20px;
                text-align: center;
                letter-spacing: -0.01em;
                color: #7A7D80;
            }
        }
        .all-types {
            display: flex;
            align-items: center;
            margin-bottom: 3.2rem;
            .tag {
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                font-size: 1.3rem;
                line-height: 1.6rem;
                text-align: center;
                letter-spacing: -0.01em;
                padding: 0.4rem 1.1rem;
                border-radius: 0.2rem;
                text-transform: capitalize;
                &:not(:last-child) {
                    margin-right: 1rem;
                }

                &.bug {
                color: var(--type-bug);
                background: rgba(155, 186, 72, 0.1);
                }

                &.dark {
                    color: var(--type-dark);
                    background: rgba(89, 87, 97, 0.1);
                }

                &.dragon {
                    color: var(--type-dragon);
                    background: rgba(44, 106, 193, 0.1);
                }

                &.electric {
                    color: var(--type-electric);
                    background: rgba(238, 217, 103, 0.1);
                }

                &.fairy {
                    color: var(--type-fairy);
                    background: rgba(226, 150, 225, 0.1);
                }

                &.fighting {
                    color: var(--type-fighting);
                    background: rgba(196, 77, 97, 0.1);
                }

                &.fire {
                    color: var(--type-fire);
                    background: rgba(233, 99, 3, 0.1);
                }

                &.flying {
                    color: var(--type-flying);
                    background: rgba(166, 187, 232, 0.1);
                }

                &.ghost {
                    color: var(--type-ghost);
                    background: rgba(97, 110, 183, 0.1);
                }

                &.grass {
                    color: var(--type-grass);
                    background: rgba(92, 164, 138, 0.1);
                }

                &.ground {
                    color: var(--type-ground);
                    background: rgba(206, 128, 86, 0.1);
                }

                &.ice {
                    color: var(--type-ice);
                    background: rgba(139, 206, 193, 0.1);
                }

                &.normal {
                    color: var(--type-normal);
                    background: rgba(160, 162, 159, 0.1);
                }

                &.poison {
                    color: var(--type-poison);
                    background: rgba(172, 106, 202, 0.1);
                }

                &.psychic {
                    color: var(--type-psychic);
                    background: rgba(235, 139, 133, 0.1);
                }

                &.rock {
                    color: var(--type-rock);
                    background: rgba(139, 206, 193, 0.1);
                }

                &.steel {
                    color: var(--type-steel);
                    background: rgba(101, 148, 161, 0.1);
                }

                &.water {
                    color: var(--type-water);
                    background: rgba(136, 163, 212, 0.1);
                }
            }
        }
        .info-single-pokemon{
            display: flex;
            margin-bottom: 3.2rem;
            .col-info {
                .info-title {
                    font-weight: 400;
                    font-size: 1.3rem;
                    line-height: 1.6rem;
                    letter-spacing: -0.01em;
                    color: #7A7D80;
                    margin-bottom: 0.4rem;
                }
                span {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    font-size: 1.4rem;
                    line-height: 1.7rem;
                    letter-spacing: -0.01em;
                    text-transform: capitalize;
                    color: #2F3133;
                }
                &:not(:last-child) {
                    margin-right: 4.8rem;
                }
            }
        }

        .all-weaknesses {
            margin-bottom: 3.2rem;
            span {
                display: block;
                margin-bottom: 1.6rem;
                font-weight: 600;
                font-size: 1.3rem;
                line-height: 1.6rem;
                letter-spacing: -0.01em;
                color: #4D5053;
            }
            .list-weaknesses {
                display: flex;
                .tag {
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                font-size: 1.3rem;
                line-height: 1.6rem;
                text-align: center;
                letter-spacing: -0.01em;
                padding: 0.4rem 1.1rem;
                border-radius: 0.2rem;
                text-transform: capitalize;
                &:not(:last-child) {
                    margin-right: 1rem;
                }

                &.bug {
                color: var(--type-bug);
                background: rgba(155, 186, 72, 0.1);
                }

                &.dark {
                    color: var(--type-dark);
                    background: rgba(89, 87, 97, 0.1);
                }

                &.dragon {
                    color: var(--type-dragon);
                    background: rgba(44, 106, 193, 0.1);
                }

                &.electric {
                    color: var(--type-electric);
                    background: rgba(238, 217, 103, 0.1);
                }

                &.fairy {
                    color: var(--type-fairy);
                    background: rgba(226, 150, 225, 0.1);
                }

                &.fighting {
                    color: var(--type-fighting);
                    background: rgba(196, 77, 97, 0.1);
                }

                &.fire {
                    color: var(--type-fire);
                    background: rgba(233, 99, 3, 0.1);
                }

                &.flying {
                    color: var(--type-flying);
                    background: rgba(166, 187, 232, 0.1);
                }

                &.ghost {
                    color: var(--type-ghost);
                    background: rgba(97, 110, 183, 0.1);
                }

                &.grass {
                    color: var(--type-grass);
                    background: rgba(92, 164, 138, 0.1);
                }

                &.ground {
                    color: var(--type-ground);
                    background: rgba(206, 128, 86, 0.1);
                }

                &.ice {
                    color: var(--type-ice);
                    background: rgba(139, 206, 193, 0.1);
                }

                &.normal {
                    color: var(--type-normal);
                    background: rgba(160, 162, 159, 0.1);
                }

                &.poison {
                    color: var(--type-poison);
                    background: rgba(172, 106, 202, 0.1);
                }

                &.psychic {
                    color: var(--type-psychic);
                    background: rgba(235, 139, 133, 0.1);
                }

                &.rock {
                    color: var(--type-rock);
                    background: rgba(139, 206, 193, 0.1);
                }

                &.steel {
                    color: var(--type-steel);
                    background: rgba(101, 148, 161, 0.1);
                }

                &.water {
                    color: var(--type-water);
                    background: rgba(136, 163, 212, 0.1);
                }
            }
            }
        }

        .stats {
            .title-stats {
                font-weight: 600;
                font-size: 1.3rem;
                line-height: 1.6rem;
                letter-spacing: -0.01em;
                color: #4D5053;
                margin-bottom: 1.6rem;
                display: block;
            }
            .all-stats {
                display: flex;
                .single-stat {
                    margin-right: 2.2rem;
                    .stat-name {
                        font-weight: 400;
                        font-size: 1.2rem;
                        line-height: 1.5rem;
                        color: #7A7D80;
                        text-transform: capitalize;
                        display: block;
                        &:not(:last-child) {
                            margin-bottom: 1.3rem;
                        }
                    }
                }
                .show-stats-bar {
                    width: 100%;
                    max-width: 28.3rem;
                    margin-top: 0.5rem;
                    .single-bar {
                        width: 100%;
                        background: #EFF3F6;
                        height: 0.3rem;
                        position: relative;
                        .base-stat{
                            background: var(--red-primary);
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 100%;
                        }
                        .separators {
                            display: flex;
                            justify-content: space-evenly;
                            width: 28.3rem;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            li {
                                width: 0.4rem;
                                height: 100%;
                                background: var(--white);

                            }
                        }
                        &:not(:last-child) {
                            margin-bottom: 2.5rem;
                        }
                    }
                }
            }
        }
    }
`;