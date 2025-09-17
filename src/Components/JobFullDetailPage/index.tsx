import { useEffect, type ReactNode } from 'react';
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
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useJobDetailStore } from '../../Hooks/CustomHooks';

const JobFullDetailCard = observer(() => {
  const jobDetailStore = useJobDetailStore();
  const { jobDetails, fetchJobDetails, apiStatus } = jobDetailStore;
  const params = useParams();

  useEffect(() => {
    if (params.id) fetchJobDetails(params.id);
  }, []);

  const renderSkill = (
    skill: { image_url: string; name: string },
    index: number
  ) => (
    <Skill key={index}>
      <SkillIcon src={skill.image_url} alt={skill.name} />
      <span>{skill.name}</span>
    </Skill>
  );

  const renderJobSkills = (): ReactNode => {
    return (
      jobDetails.skills && (
        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>{jobDetails.skills.map(renderSkill)}</SkillsGrid>
        </Section>
      )
    );
  };

  const renderJobLifeAtCompany = (): ReactNode => {
    return (
      jobDetails.lifeAtCompany && (
        <Section>
          <SectionTitle>Life at Company</SectionTitle>
          <LifeContainer>
            <p>{jobDetails.lifeAtCompany.description}</p>
            <LifeImage
              src={jobDetails.lifeAtCompany.image_url}
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
        <Logo src={jobDetails.companyLogoUrl} alt="company logo" />
        <TitleWrapper>
          <Title>{jobDetails.title}</Title>
          <Rating>⭐ {jobDetails.rating}</Rating>
          <Meta>
            <span>{jobDetails.location}</span> |{' '}
            <span>{jobDetails.employmentType}</span>
          </Meta>
        </TitleWrapper>
        <Package>{jobDetails.packagePerAnnum}</Package>
      </Header>
    );
  };

  const renderSection = (): ReactNode => {
    return (
      <Section>
        <SectionTitle>Description</SectionTitle>
        <Description>{jobDetails.jobDescription}</Description>
        {jobDetails.companyWebsiteUrl && (
          <VisitLink
            href={jobDetails.companyWebsiteUrl}
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
  switch (apiStatus) {
    case 'pending':
      return <Loader />;
      break;
    case 'success':
      return renderJobFullDeTailPage();
      break;
    case 'failure':
      return <h1>Something Went Wrong</h1>;
      break;
  }
});

export default JobFullDetailCard;
