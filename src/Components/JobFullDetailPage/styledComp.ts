import styled from 'styled-components';

export const Card = styled.div`
  background: #1e1e1e;
  color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
  max-width: 800px;
  margin: 20px auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: contain;
`;

export const TitleWrapper = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;

export const Rating = styled.span`
  color: gold;
  margin-left: 5px;
`;

export const Meta = styled.div`
  font-size: 14px;
  color: #aaa;
`;

export const Package = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 1.5;
`;

export const VisitLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #4e9fff;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SkillsGrid = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #2c2c2c;
  padding: 8px 12px;
  border-radius: 8px;
`;

export const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const LifeContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;

  p {
    flex: 1;
    font-size: 15px;
    line-height: 1.6;
  }
`;

export const LifeImage = styled.img`
  width: 220px;
  border-radius: 10px;
  object-fit: cover;
`;
