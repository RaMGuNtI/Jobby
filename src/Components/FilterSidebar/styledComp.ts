import styled from 'styled-components';

export const Sidebar = styled.div`
  background-color: #1c1c1c;
  color: #fff;
  padding: 20px;
  border-radius: 16px;
  width: 250px;
  height: fit-content;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  input {
    accent-color: #4cafef;
    cursor: pointer;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  input {
    accent-color: #4cafef;
    cursor: pointer;
  }
`;
