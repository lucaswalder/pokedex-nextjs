import styled from "styled-components";

import arrowDown from '@/assets/arrow-down-select.svg'

export const MainContent = styled.section`
    .container {
        display: flex;
        justify-content: space-between;
        .right-area {
            padding-top: 7rem;
            padding-bottom: 7rem;
            padding-left: 7.5rem;
            border-left: 1px solid #EFF3F6;
            width: 100%;
            max-width: 97.9rem;
        }

        .top-area {
            display: flex;
            margin-bottom: 7rem;
            justify-content: space-between;
           .left {
               display: flex;
               align-items: center;
            span {
                display: block;
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                font-size: 1.8rem;
                line-height: 150%;
                color: #4D5053;
                margin-left: 1.8rem;
            }
           }

           .custom-select {
               width: 100%;
               max-width: 40rem;
               position: relative;
               .selected-item {
                    display: flex;
                    align-items: center;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1.8rem;
                    line-height: 150%;
                    color: #4D5053;
                    cursor: pointer;
                    max-width: 100%;
                    height: 5.6rem;
                    border: 1px solid #A0AFBA;
                    background: url(${arrowDown.src}) no-repeat right 21px center;
                    padding: 0 2.1rem;
                    border-radius: 5px;
                    transform: border-radius .3s ease;
                    strong {
                        text-transform: capitalize;
                    }
                    &.active {
                        border-radius: 5px 5px 0 0;
                    }

               }
               .custom-box-type {
                   display: flex;
                   flex-direction: column;
                   height: 0;
                   pointer-events: none;
                   overflow: scroll;
                   position: absolute;
                   top: 5.6rem;
                   left: 0;
                   width: 100%;
                   padding: 0;
                   border-radius: 0 0 5px 5px;
                   z-index: 1;
                   background: var(--white);
                   transform: all .3s all;
                   &::-webkit-scrollbar {
                    width: 3px;
                    }
                    
                    &::-webkit-scrollbar-thumb {
                    background: var(--blue-primary); 
                    border-radius: 10px;
                    }
                   &.active {
                       height: 28rem;
                       pointer-events: all;
                       padding: 2.1rem;
                       border: 1px solid #A0AFBA;
                       border-top: none;

                   }
                   button {
                       display: flex;
                       padding: 1.5rem 0;
                       align-items: center;
                       span {
                        font-weight: 500;
                        font-size: 1.6rem;
                        line-height: 150%;
                        text-transform: capitalize;
                        margin-left: 2rem;
                        
                       }
                       &.normal {
                    span {
                        color: var(--type-normal);
                    }
                }

                    &.fighting {
                        span {
                            color: var(--type-fighting);
                        }
                    }

                    &.flying {
                        span {
                            color: var(--type-flying);
                        }
                    }

                    &.poison {
                        span {
                            color: var(--type-poison);
                        }
                    }

                    &.ground {
                        span {
                            color: var(--type-ground);
                        }
                    }

                    &.rock {
                        span {
                            color: var(--type-rock);
                        }
                    }

                    &.bug {
                        span {
                            color: var(--type-bug);
                        }
                    }

                    &.ghost {
                        span {
                            color: var(--type-ghost);
                        }
                    }

                    &.steel {
                        span {
                            color: var(--type-steel);
                        }
                    }

                    &.fire {
                        span {
                            color: var(--type-fire);
                        }
                    }

                    &.water {
                        span {
                            color: var(--type-water);
                        }
                    }

                    &.grass {
                        span {
                            color: var(--type-grass);
                        }
                    }

                    &.electric {
                        span {
                            color: var(--type-electric);
                        }
                    }

                    &.psychic {
                        span {
                            color: var(--type-psychic);
                        }
                    }

                    &.ice {
                        span {
                            color: var(--type-ice);
                        }
                    }

                    &.dragon {
                        span {
                            color: var(--type-dragon);
                        }
                    }

                    &.dark {
                        span {
                            color: var(--type-dark);
                        }
                    }

                    &.fairy {
                        span {
                            color: var(--type-fairy);
                        }
                    }
                   }
               }
           }
        }
        .grid-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3.2rem;
        }

        .load-more {
            font-family: 'Montserrat',sans-serif;
            font-weight: 600;
            font-size: 1.4rem;
            line-height: 1.7rem;
            letter-spacing: -0.01em;
            color: var(--blue-primary);
            padding: 1.4rem 2rem;
            background: rgba(63, 93, 179, 0.1);
            border-radius: 6px;
            width: 100%;
            max-width: fit-content;
            margin: 6.8rem auto 0;
            display: block;
            transition: all .3s;
            &:hover {
                background: rgba(63, 93, 179, 0.2);
            }
        }

        .error-message {
            h4 {
                font-family: 'Montserrat',sans-serif;
                font-weight: 600;
                font-size: 1.8rem;
                line-height: 150%;
                color: #4D5053;
                span {
                    color: var(--red-primary);
                }
            }
            p {
                font-family: 'Montserrat',sans-serif;
                font-weight: 600;
                font-size: 1.8rem;
                line-height: 150%;
                color: #4D5053;
            }
        }

        aside {
            width: 100%;
            max-width: 23.9rem;
            display: flex;
            flex-direction: column;
            padding-bottom: 7rem;
            button {
                display: flex;
                align-items: center;
                filter: grayscale(100%);
                opacity: .6;
                transition: all .3s ease;
                padding: 1.5rem 0 ;
                &:first-child {
                    padding-top: 0;
                }
                &:hover {
                    filter: none;
                    opacity: 1;
                }
                &.active {
                    filter: none;
                    opacity: 1;
                }
                .icon {
                    margin-right: 2.9rem;
                }

                span {
                    font-weight: 500;
                    font-size: 1.5rem;
                    line-height: 150%;
                    color: #ACB9C1;
                    text-transform: capitalize;
                    transition: color .3s ease;
                }

                &.all {
                    span {
                        color: var(--blue-primary);
                    }
                }

                &.normal {
                    span {
                        color: var(--type-normal);
                    }
                }

                &.fighting {
                    span {
                        color: var(--type-fighting);
                    }
                }

                &.flying {
                    span {
                        color: var(--type-flying);
                    }
                }

                &.poison {
                    span {
                        color: var(--type-poison);
                    }
                }

                &.ground {
                    span {
                        color: var(--type-ground);
                    }
                }

                &.rock {
                    span {
                        color: var(--type-rock);
                    }
                }

                &.bug {
                    span {
                        color: var(--type-bug);
                    }
                }

                &.ghost {
                    span {
                        color: var(--type-ghost);
                    }
                }

                &.steel {
                    span {
                        color: var(--type-steel);
                    }
                }

                &.fire {
                    span {
                        color: var(--type-fire);
                    }
                }

                &.water {
                    span {
                        color: var(--type-water);
                    }
                }

                &.grass {
                    span {
                        color: var(--type-grass);
                    }
                }

                &.electric {
                    span {
                        color: var(--type-electric);
                    }
                }

                &.psychic {
                    span {
                        color: var(--type-psychic);
                    }
                }

                &.ice {
                    span {
                        color: var(--type-ice);
                    }
                }

                &.dragon {
                    span {
                        color: var(--type-dragon);
                    }
                }

                &.dark {
                    span {
                        color: var(--type-dark);
                    }
                }

                &.fairy {
                    span {
                        color: var(--type-fairy);
                    }
                }
            }
        }
    }

    @media (max-width: 1050px) {
        .container {
            aside {
                max-width: 16.9rem;
            }
        }
    }

    @media (max-width: 991px) {
        .container {
            aside {
                display: none;
            }
            .right-area {
                padding-left: 0;
                border: none;
                .top-area {
                    .custom-select {
                        display: block;
                    }
                }
            }
        }
    }

    @media (max-width: 991px) {
        .container {
            .right-area {
                padding-left: 0;
                border: none;
                .top-area {
                   flex-direction: column;
                   align-items: center;
                   margin-bottom: 5.5rem;
                   .custom-select {
                       margin-top: 4.6rem;
                       max-width: 100%;
                   }
                }
                .grid-list {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
        }
    }
`