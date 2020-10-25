import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/wrapper';

const ContactStyled = styled.div`
    h1{
      padding: 5em;
    }
`;

export default function Contact () {
  return (
    <div>
      <ContactStyled>
        <Wrapper>
          <h1>Contact</h1>
        </Wrapper>
      </ContactStyled>
    </div>
  );
}
