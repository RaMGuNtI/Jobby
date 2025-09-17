export interface JobApiResponse {
  company_logo_url: string;
  employment_type: string;
  id: string;
  job_description: string;
  location: string;
  package_per_annum: string;
  rating: number;
  title: string;
}
export class JobSummaryModel {
  companyLogoUrl: string;
  employmentType: string;
  id: string;
  jobDescription: string;
  location: string;
  packagePerAnnum: string;
  rating: number;
  title: string;

  constructor(data: JobApiResponse) {
    this.companyLogoUrl = data.company_logo_url;
    this.employmentType = data.employment_type;
    this.id = data.id;
    this.jobDescription = data.job_description;
    this.location = data.location;
    this.packagePerAnnum = data.package_per_annum;
    this.rating = data.rating;
    this.title = data.title;
  }
}
