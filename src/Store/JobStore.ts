import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';
import { EmployeeType, SalaryRanges } from '../Components/Contansts/constants';
import { JobModel, type JobApiResponse } from './JobModel';

type Status = 'pending' | 'success' | 'failure';

class JobStore {
  JobsList: JobModel[] = [];
  apiStatus:Status = 'pending'
  constructor() {
    makeAutoObservable(this);
  }

  setApiStatus = (status:Status)=>{
  this.apiStatus =  status
  }

  fetchJobDetails = (
    employment_type: string[] = [],
    minimum_package: string = '',
    searchInput: string = ''
  ) => {
    const employmentTypeParameter = employment_type
      .map((type) => EmployeeType[type as keyof typeof EmployeeType])
      .join(',');
    const packageParameter =
      SalaryRanges[minimum_package as keyof typeof SalaryRanges] || '';

    fetch(
      `https://apis.ccbp.in/jobs?employment_type=${employmentTypeParameter}&minimum_package=${packageParameter}&search=${searchInput}`,
      {
        method: 'GET',
        headers: { authorization: `Bearer ${Cookies.get('Token')}` },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log('API RESPONSE 👉', res);

        const jobs = res.jobs.map((job: JobApiResponse) => new JobModel(job));
        this.setJobsList(jobs);
        this.setApiStatus('success')
      })

      .catch((err) => {
        this.setApiStatus('failure')
        console.log(err);
      });
  };

  setJobsList = (lis: JobModel[]) => {
    this.JobsList = lis;
  };
}

const jobStore = new JobStore();
export default jobStore;
