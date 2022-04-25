import styled from "styled-components";

export const FooterContent = styled.footer`
    background: var(--blue-primary);
    padding: 9.9rem 0 6.5rem;
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .copy {
        span{
            font-weight: 700;
            font-size: 1.8rem;
            line-height: 180%;
            color: var(--white);
        }
        p {
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 180%;
            color: var(--white);
            opacity: 0.8;
        }
    }

    @media (max-width: 480px) {
        padding: 6rem 0 8.6rem;
        .container {
            flex-direction: column;
        }
        .copy {
            margin-bottom: 4.8rem;
            span {
                display: block;
                text-align: center;
            }
        }
    }
`;