import styled, { keyframes } from "styled-components";

import bgRed from '@/assets/bg-red.svg'
import bgBlue from '@/assets/bg-blue.svg'
import stars from '@/assets/lighting.svg'

const upAndDown = keyframes`
    0% {
        transform: translateY(0);
    }

    66% {
        transform: translateY(-15px);

    }

    100% {
        transform: translateY(0);

    }
`;

export const AreaSlide = styled.section`
    .slideHero {
        overflow: visible;
        .swiper-pagination {
            width: fit-content;
            left: initial;
            right: 11.2rem;
            bottom: 7.7rem;
        }
    }
`;

export const  SlideContent = styled.div`
    padding-top: 2.7rem;
    height: 70.6rem;
    position: relative;
    &.red {
        background: url(${bgRed.src}) no-repeat center center;
        background-size: cover;
    }

    &.blue {
        background: url(${bgBlue.src}) no-repeat center center;
        background-size: cover;
    }
    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        position: relative;
    }

    .description {
        margin-top: 0.8rem;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 150%;
        text-align: center;
        color: var(--white);
    }
    .top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4.7rem;
        span {
            color: var(--white);
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 1.6rem;
            cursor: pointer;
        }
    }
    .tag {
        background: var(--white);
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 12.1rem;
        padding: 0.4rem 0.6rem;
        border-radius: 244px;
        margin-bottom: 3.4rem;
        .icon {
            margin-right: 0.8rem;
            width: 2.6rem;
            height: 2.6rem;
            display: grid;
            place-content: center;
            border-radius: 50%;
        }
        p {
            font-weight: 600;
            font-size: 1.5rem;
            line-height: 150%;
        }
        &.red {
            .icon {
                background: rgba(194, 0, 1, .2);
            }

            p {
                color: var(--red-primary);
            }
        }

        &.blue {
            .icon {
                background: rgba(63, 103, 186, .15);
            }

            p {
                color: var(--blue-primary);
            }
        }

    }

    .image-pokeball {
        position: absolute;
        bottom: -27.6rem;
        left: 50%;
        margin-left: -40rem;
        animation: ${upAndDown} 6s linear infinite ;
        &::before {
            position: absolute;
            content: '';
            width: 170rem;
            height: 5.7rem;
            top: -4.3rem;
            left: 50%;
            margin-left: -85rem;
            background: url(${stars.src}) no-repeat center center;
        }
    }

    .explore-btn {
        position: absolute;
        left: 0;
        bottom: 8rem;
        display: flex;
        align-items: center;
        transform: rotate(-90deg);
        flex-direction: row-reverse;
        span {
            font-weight: 500;
            font-size: 1.3rem;
            line-height: 150%;
            color: var(--white);
            margin-left: 3rem;
        }

        .icon {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
            transform: rotate(90deg);
            &.red {
                background: #C90C0C;
            }

            &.blue {
                background: rgba(175, 192, 227, .3);
            }
        }
    }

    .pagination {
        position: absolute;
        z-index: 9;
        right: 0;
        left: initial;
        width: fit-content;
        bottom: 7.7rem;
        span {
            background: var(--white);
        }
    }
    @media (max-width: 480px) {
        padding-top: 2.5rem;
        height: 72.1rem;
        background-size: contain;
        .top {
            margin-bottom: 6rem;
            .logo{
                max-width: 12.6rem;
            }
        }

        h1 {
            font-size: 4.8rem;
            line-height: 5.9rem;
            text-align: center;
            margin-bottom: 2.4rem;
            max-width: 32.7rem;
        }
        .image-pokeball {
            bottom: -26.6rem;
            margin-left: -36rem;
            margin-right: -18rem;
        }
        .explore-btn {
            display: none;
        }
        .pagination {
            display: none;
        }
    }
`;