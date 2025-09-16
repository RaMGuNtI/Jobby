import { FaStar, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { type JobDetailInterface } from '../../Store/JobDetailStore';

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

const JobDetailCard = ({
  company_logo_url,
  employment_type,
  job_description,
  location,
  package_per_annum,
  rating,
  title,
}: JobDetailInterface):ReactNode => {
  return (
    <Card>
      <Header>
        <LogoAndTitle>
          <Logo src={company_logo_url} alt="Company Logo" />
          <div>
            <Title>{title}</Title>
            <Rating>
              <FaStar color="gold" /> {rating}
            </Rating>
          </div>
        </LogoAndTitle>
        <Salary>{package_per_annum}</Salary>
      </Header>
      <Meta>
        <span>
          <FaMapMarkerAlt /> {location}
        </span>
        <span>
          <FaBriefcase /> {employment_type}
        </span>
      </Meta>
      <SectionTitle>Description</SectionTitle>
      <Description>{job_description}</Description>
    </Card>
  );
};

export default JobDetailCard;
