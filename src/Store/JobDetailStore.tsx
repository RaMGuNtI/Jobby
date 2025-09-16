import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';
export interface JobDetailInterface {
  company_logo_url: string;
  company_website_url?: string;
  employment_type: string;
  id: string;
  job_description: string;
  title?: string;
  skills?: { image_url: string; name: string }[];
  life_at_company?: {
    decription: string;
    image_url: string;
  };
  similar_jobs?: {
    company_logo_url: string;
    employment_type: string;
    id: string;
    job_description: string;
    location: string;
    rating: number;
    title: string;
  }[];
  location: string;
  package_per_annum: string;
  rating: number;
}

type Status = 'pending' | 'success' | 'failure';
export class JobDetailStore {
  jobDetails: JobDetailInterface | undefined;
  apiStatus: Status = 'pending';
  constructor() {
    makeAutoObservable(this);
  }

  setApiStatus(status: Status) {
    this.apiStatus = status;
  }
  fetchJobDetails(id: string) {
    this.setApiStatus('pending');
    fetch(`https://apis.ccbp.in/jobs/${id}`, {
      method: 'GET',
      headers: { authorization: `Bearer ${Cookies.get('Token')}` },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setJobDetails(res.job_details);
        this.setApiStatus('success');
        console.log(res);
      });
  }
  setJobDetails(det: JobDetailInterface) {
    this.jobDetails = det;
  }
}

const jobDetailStore = new JobDetailStore();

export default jobDetailStore;
