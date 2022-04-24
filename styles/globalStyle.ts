import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --type-bug: #9BBA48;
        --type-dark: #595761;
        --type-dragon: #2C6AC1;
        --type-electric: #D4BC34;
        --type-fairy: #E296E1;
        --type-fighting: #C44D61;
        --type-ground: #CE8056;
        --type-ice: #71BAAC;
        --type-normal: #909090;
        --type-poison: #AC6ACA;
        --type-psychic: #EB8B85;
        --type-rock: #84BEB3;
        --type-ghost: #616EB7;
        --type-grass: #73B861;
        --type-steel: #6594A1;
        --type-water: #4F77BE;
        --type-fire: #E96303;
        --type-flying: #758CBD;

        --blue-primary: #3F5DB3;
        --red-primary: #C20001;

        --white: #fff;
        --black: #000;
        --gray01: #A0AFBA;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
        }

        html {
        font-size: 62.5%;
        @media (max-width: 1050px) {
            font-size: 55%;
        }

        @media (max-width: 480px) {
            font-size: 62.5%;
        }
        }

        html, body {
            overflow-x: hidden;
        }

        button {
        cursor: pointer;
        border: 0;
        background-color: transparent;
        &[disabled] {
            cursor: not-allowed;
        }
        }

        img {
        display: block;
        max-width: 100%;
        }

        a {
        text-decoration: none;
        display: block;
        }

        ul {
        list-style: none;
    }

    h1,h2,h3 {
        font-family: 'Montserrat', sans-serif;
        line-height: 150%;
        }

        h1, h2 {
        letter-spacing: -0.01em;
        font-weight: bold;
        }

        h2,h3 {
        color: #2F3133;
        }

        h1 {
        font-size: 6.4rem;
        color: #FFFFFF;
        }

        h2 {
        font-size: 3.2rem;
        }

        h3 {
        font-weight: 600;
        font-size: 1.8rem;
    }

    .container {
        width: 100%;
        max-width: 124.6rem;
        margin: 0 auto;
        padding: 0px 1.5rem;
    }

`;