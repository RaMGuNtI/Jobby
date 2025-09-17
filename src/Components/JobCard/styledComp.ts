import styled from 'styled-components';
export const Card = styled.div`
  background-color: #2a2a2a;
  color: #fff;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: contain;
  background-color: #fff;
  padding: 4px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
`;

export const Salary = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #4cafef;
`;

export const Meta = styled.div`
  display: flex;
  gap: 20px;
  margin: 12px 0;
  color: #ccc;
  font-size: 14px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  margin: 15px 0 8px;
  color: #fff;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #ddd;
  line-height: 1.5;
`;
