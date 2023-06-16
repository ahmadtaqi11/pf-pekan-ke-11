import styled from "styled-components"

const StyledHero = styled.div`
    padding: 1rem;
    text-align: center; 
    
    h2 {
        font-size: 2.44rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.primary};
    }

    h3 {
        font-size: 1.59rem;
        color: ${({ theme }) => theme.colors.secondary};
        margin-bottom: 1rem;
    }

    p {
        text-align: justify;
        margin-bottom: 2rem;
        color: #64748b;

    }

    img {
        max-width: 100%;
        border-radius: 12px;
    }

    @media screen and (min-width: 992px) {
        text-align: left;
        max-width: 1200px;
        margin: 0 auto;

        section {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
    }

    // Medium Screen: 768px
    @media screen and (min-width: 768px) {
        flex-direction: row;
        text-align: left;
        
        .poster {
        flex-basis: 40%;
        padding-left: 1rem; 
        }
        .info {
        flex-basis: 60%;
        padding-right: 1rem;
        }
    }
    // Large Screen
    @media screen and (min-width: 992px) {
    }
`;

export default StyledHero;
