import styled from "styled-components";

export const CardContent = styled.div`
    background: var(--white);
    border-radius: 12px;
    width: 100%;
    max-width: 28rem;
    height: 30.4rem;
    position: relative;
    padding-top: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: box-shadow .3s ease;
    cursor: pointer;
    &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0px 10px 51px -5px rgba(183, 189, 193, 0.3);
        z-index: -1;
    }
    &.grass {
        .image {
            .bg {
                background: #D6EBDC;
            }
        }
    }

    &.normal {
        .image {
            .bg {
                background: rgba(141, 141, 141, 0.2);
            }
        }
    }

    &.fighting {
        .image {
            .bg {
                background: rgba(196, 77, 97, 0.2);
            }
        }
    }

    &.flying {
        .image {
            .bg {
                background: rgba(158, 180, 227, 0.2);
            }
        }
    }

    &.poison {
        .image {
            .bg {
                background: rgba(172, 106, 202, 0.2);
            }
        }
    }

    &.ground {
        .image {
            .bg {
                background: rgba(203, 119, 74, 0.2);
            }
        }
    }

    &.rock {
        .image {
            .bg {
                background: rgba(134, 203, 190, 0.2);
            }
        }
    }

    &.bug {
        .image {
            .bg {
                background: rgba(131, 158, 56, 0.2);
            }
        }
    }

     &.ghost {
        .image {
            .bg {
                background: rgba(97, 110, 183, 0.2);
            }
        }
    }

    &.steel {
        .image {
            .bg {
                background: rgba(101, 148, 161, 0.2);
            }
        }
    }

    &.fire {
        .image {
            .bg {
                background: #FFEBCA;
            }
        }
    }

     &.water {
        .image {
            .bg {
                background: #DFECF5;
            }
        }
    }

    &.electric {
        .image {
            .bg {
                background: rgba(207, 190, 93, 0.2);
            }
        }
    }

     &.psychic {
        .image {
            .bg {
                background: rgba(235, 140, 133, 0.2);
            }
        }
    }

     &.ice {
        .image {
            .bg {
                background: rgba(124, 197, 182, 0.2);
            }
        }
    }

    &.dragon {
        .image {
            .bg {
                background: rgba(70, 105, 153, 0.2);
            }
        }
    }

    &.dark {
        .image {
            .bg {
                background: rgba(61, 60, 63, 0.2);
            }
        }
    }

    &.fairy {
        .image {
            .bg {
                background: rgba(221, 138, 220, 0.2);
            }
        }
    }
    .image {
        position: relative;
        width: 100%;
        max-width: 20rem;
        height: 20rem;
        padding: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .bg {
            width: 16.5rem;
            height: 16.5rem;
            border-radius: 50%;
        }
        img {
            max-width: 14.1rem;
            height: 18rem;
            position: absolute;
        }
    }

    .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 22.3rem;
        margin-top: 1.4rem;
        .left {
            .id {
                display: block;
                margin-bottom: 0.6rem;
                font-weight: 500;
                font-size: 1.3rem;
                line-height: 150%;
                color: #7A7D80;
            }
            h5 {
                font-family: 'Montserrat', sans-serif;
                text-transform: capitalize;
                font-weight: 600;
                font-size: 1.8rem;
                line-height: 150%;
                color: #2F3133;
            }
        }
    }
        &:hover {
            box-shadow: 0px 12px 40px -5px rgba(90, 96, 100, 0.3);
    }
`;