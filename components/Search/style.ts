import styled from "styled-components";

export const SearchContent = styled.section`
    padding: 11.9rem 0 9.1rem;
    background: linear-gradient(284.15deg, #EFF3F6 15.54%, rgba(239, 243, 246, 0) 86.34%);
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        z-index: 2;
    }

    h2 {
        max-width: 19.5rem;
        line-height: 3.9rem;
    }

    .input-box {
        background: var(--white);
        padding: 0 0.7rem;
        height: 5.6rem;
        border-radius: 12.2rem;
        width: 100%;
        max-width: 40.3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid transparent;
        transition: border-color .3s ease;
        &:focus-within {
            border-color: rgba(62, 117, 195, 1);
        }
        input {
            margin-left: 1.8rem;
            border: none;
            background: transparent;
            color: var(--black);
            outline: none;
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 150%;
            &::placeholder {
                font-style: normal;
                font-weight: 400;
                font-size: 1.5rem;
                line-height: 150%;
                color: var(--gray01);
            }
        }
        .icon {
            width: 4.2rem;
            height: 4.2rem;
            display: grid;
            place-items: center;
            background: rgba(158, 185, 225, .1);
            border-radius: 50%;
            cursor: pointer;
        }
    }

    @media (max-width: 480px) {
        padding: 19rem 0 5.1rem;
        .container {
            flex-direction: column;
        }

        h2 {
            font-size: 2.8rem;
            max-width: 100%;
            margin-bottom: 4.1rem;
        }
    }
`;