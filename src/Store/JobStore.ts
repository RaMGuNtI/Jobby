import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';
import { EmployeeType, SalaryRanges } from '../Components/Contansts/constants';
import {
  JobSummaryModel,
  type JobApiResponse,
} from '../Models/JobSummaryModel';

type Status = 'pending' | 'success' | 'failure';

export class JobStore {
  JobsList: JobSummaryModel[] = [];

  apiStatus: Status = 'pending';

  constructor() {
    makeAutoObservable(this);
  }

  setApiStatus = (status: Status) => {
    this.apiStatus = status;
  };

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
        const jobs = res.jobs.map(
          (job: JobApiResponse) => new JobSummaryModel(job)
        );
        this.setJobsList(jobs);
        this.setApiStatus('success');
      })

      .catch((err) => {
        this.setApiStatus('failure');
        console.log(err);
      });
  };

  setJobsList = (jobModels: JobSummaryModel[]) => {
    this.JobsList = jobModels;
  };
}

const jobStore = new JobStore();
export default jobStore;
