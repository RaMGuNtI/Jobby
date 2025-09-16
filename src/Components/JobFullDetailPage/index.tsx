/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect, type ReactNode } from 'react';
import {
  Card,
  Header,
  Logo,
  TitleWrapper,
  Title,
  Rating,
  Meta,
  Package,
  Section,
  SectionTitle,
  Description,
  VisitLink,
  SkillsGrid,
  Skill,
  SkillIcon,
  LifeContainer,
  LifeImage,
} from './styledComp';
import { MobXProviderContext, observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
const JobFullDetailCard = () => {
  const { jobDetailStore } = useContext(MobXProviderContext);
  const { jobDetails, fetchJobDetails } = jobDetailStore;
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetchJobDetails(params.id);
  }, []);
  const job = jobDetails;

  const renderJobSkills = (): ReactNode => {
    return (
      job.skills && (
        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            {job.skills.map(
              (skill: { image_url: string; name: string }, index: number) => (
                <Skill key={index}>
                  <SkillIcon src={skill.image_url} alt={skill.name} />
                  <span>{skill.name}</span>
                </Skill>
              )
            )}
          </SkillsGrid>
        </Section>
      )
    );
  };

  const renderJobLifeAtCompany = (): ReactNode => {
    return (
      job.life_at_company && (
        <Section>
          <SectionTitle>Life at Company</SectionTitle>
          <LifeContainer>
            <p>{job.life_at_company.decription}</p>
            <LifeImage
              src={job.life_at_company.image_url}
              alt="life at company"
            />
          </LifeContainer>
        </Section>
      )
    );
  };

  const renderHeader = (): ReactNode => {
    return (
      <Header>
        <Logo src={job.company_logo_url} alt="company logo" />
        <TitleWrapper>
          <Title>{job.title}</Title>
          <Rating>⭐ {job.rating}</Rating>
          <Meta>
            <span>{job.location}</span> | <span>{job.employment_type}</span>
          </Meta>
        </TitleWrapper>
        <Package>{job.package_per_annum}</Package>
      </Header>
    );
  };

  const renderSection = (): ReactNode => {
    return (
      <Section>
        <SectionTitle>Description</SectionTitle>
        <Description>{job.job_description}</Description>
        {job.company_website_url && (
          <VisitLink
            href={job.company_website_url}
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </VisitLink>
        )}
      </Section>
    );
  };

  function renderJobFullDeTailPage(): ReactNode {
    return (
      <Card>
        {renderHeader()}
        {renderSection()}
        {renderJobSkills()}
        {renderJobLifeAtCompany()}
      </Card>
    );
  }
  return jobDetails === undefined ? <Loader /> : renderJobFullDeTailPage();
};

export default observer(JobFullDetailCard);
