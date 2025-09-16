import styled from 'styled-components';
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    color: gray;
    font-size: small;
    margin: 5px 0px 5px 0px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }
`;

export const Input = styled.input`
  padding: 8px;
`;
