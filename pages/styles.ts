import styled from "styled-components";

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
            align-items: center;
            margin-bottom: 7rem;
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
            button {
                display: flex;
                align-items: center;
                filter: grayscale(100%);
                transition: filter .3s ease;
                &:not(:last-child) {
                    margin-bottom: 4rem;
                }
                &:hover {
                    filter: none;
                }
                &.active {
                    filter: none;
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
`