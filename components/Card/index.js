import styled from "styled-components";

const StyledDiv = styled.div`
  border: solid 1px red;
  border-radius: 4px;
  padding: 8px;
`;

const StyledH3 = styled.h3`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.25rem;
`;

const StyledP = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
`;

export default function Card() {
  return (
    <StyledDiv>
      <StyledH3>Homer Simpson</StyledH3>
      <StyledP>
        Homer Jay Simpson is a fictional character and the main protagonist of
        the American animated sitcom The Simpsons. He is voiced by Dan
        Castellaneta and first appeared, along with the rest of his family, in
        The Tracey Ullman Show short Good Night on April 19, 1987.
      </StyledP>
    </StyledDiv>
  );
}
