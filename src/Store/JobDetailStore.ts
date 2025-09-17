import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';
import { JobDetailModel } from '../Models/JobDetailModel';

type Status = 'pending' | 'success' | 'failure';

export class JobDetailStore {
  jobDetails!: JobDetailModel;
  apiStatus: Status = 'pending';

  constructor() {
    makeAutoObservable(this);
  }

  setApiStatus = (status: Status) => {
    this.apiStatus = status;
  };

  fetchJobDetails = (id: string) => {
    this.setApiStatus('pending');
    fetch(`https://apis.ccbp.in/jobs/${id}`, {
      method: 'GET',
      headers: { authorization: `Bearer ${Cookies.get('Token')}` },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setJobDetails(new JobDetailModel(res.job_details));
        this.setApiStatus('success');
      })
      .catch((err) => {
        console.error('Fetch failed', err);
        this.setApiStatus('failure');
      });
  };

  setJobDetails = (jobDetails: JobDetailModel) => {
    this.jobDetails = jobDetails;
  };
}

const jobDetailStore = new JobDetailStore();

export default jobDetailStore;
