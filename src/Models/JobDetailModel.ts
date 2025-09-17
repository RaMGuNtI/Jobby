import { makeObservable, observable } from 'mobx';
import { JobSummaryModel, type JobApiResponse } from './JobSummaryModel';

interface SkillsType {
  image_url: string;
  name: string;
}

interface LifeAtCompany {
  description: string;
  image_url: string;
}

interface JobDetailApiResponse extends JobApiResponse {
  company_website_url: string;
  skills: SkillsType[];
  life_at_company: LifeAtCompany;
  similar_jobs: JobApiResponse[];
}

export class JobDetailModel extends JobSummaryModel {
  companyWebsiteUrl: string;
  skills: SkillsType[];
  lifeAtCompany: LifeAtCompany;
  similarJobs: JobApiResponse[];

  constructor(data: JobDetailApiResponse) {
    super(data);
    makeObservable(this, {
      companyWebsiteUrl: observable,
      skills: observable,
      lifeAtCompany: observable,
      similarJobs: observable,
    });
    this.companyWebsiteUrl = data.company_website_url;
    this.skills = data.skills;

    this.lifeAtCompany = data.life_at_company;
    this.similarJobs = data.similar_jobs;
  }
}
