import styled from "styled-components";

const StyledDetailMovie = styled.div`
  // Mobile Screen
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  img {
    border-radius: 12px;
    max-width: 100%;
  }
  h2 {
    font-size: 2.44rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  h3 {
    font-size: 1.59rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
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

export default StyledDetailMovie;
