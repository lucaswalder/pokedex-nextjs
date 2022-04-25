import styled from "styled-components";

import bgBlue from '@/assets/bg-blue.svg'

export const Hero = styled.section`
    padding: 12rem 0;
    background: url(${bgBlue.src}) no-repeat center center;
    background-size: cover;
    .container {
        position: relative;
    }
    h1 {
        text-align: center;
    }
    span {
        color: var(--white);
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.6rem;
        cursor: pointer;
        transition: opacity .3s ease;
        position: absolute;
        top: -6rem;
        right: 0;
    }

    @media (max-width: 1050px) {
        span {
            right: 2rem;
        }
    }
    @media (max-width: 480px) {
        padding: 6rem 0 4rem;
        h1 {
            font-size: 3.2rem;
        }
        span {
            top: -4rem;
        }
    }
`;

export const MainContent = styled.section`
    padding: 10rem 0;
    .top {
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
    .grid-pokemons {
        margin-top: 6rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 3.2rem;
        .btn-del {
            background: var(--red-primary);
            padding: 1rem;
            border-radius: 4px;
            color: var(--white);
            font-weight: 600;
            margin-top: 1rem;
        }
    }

    @media (max-width: 1050px) {
        .grid-pokemons {
            gap: 5rem 1.2rem;
        }
    }

    @media (max-width: 991px) {
        .grid-pokemons {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 480px) {
        padding: 4rem 0;
        .grid-pokemons {
            display: flex;
            flex-direction: column;
            align-items: center;
            .item {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .btn-del {
                width: 100%;
                max-width: 28rem;
            }
        }
    }
`;