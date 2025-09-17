import { FaStar, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import {
  Card,
  Header,
  LogoAndTitle,
  Logo,
  Title,
  Rating,
  Salary,
  Meta,
  SectionTitle,
  Description,
} from './styledComp';
import type { ReactNode } from 'react';
import type { JobSummaryModel } from '../../Models/JobSummaryModel';

const JobsCard = ({
  companyLogoUrl,
  employmentType,
  jobDescription,
  location,
  packagePerAnnum,
  rating,
  title,
}: JobSummaryModel): ReactNode => {
  return (
    <Card>
      <Header>
        <LogoAndTitle>
          <Logo src={companyLogoUrl} alt="Company Logo" />
          <div>
            <Title>{title}</Title>
            <Rating>
              <FaStar color="gold" /> {rating}
            </Rating>
          </div>
        </LogoAndTitle>
        <Salary>{packagePerAnnum}</Salary>
      </Header>
      <Meta>
        <span>
          <FaMapMarkerAlt /> {location}
        </span>
        <span>
          <FaBriefcase /> {employmentType}
        </span>
      </Meta>
      <SectionTitle>Description</SectionTitle>
      <Description>{jobDescription}</Description>
    </Card>
  );
};

export default JobsCard;
