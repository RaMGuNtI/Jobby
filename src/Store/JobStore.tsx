import { makeAutoObservable } from 'mobx';
import type { JobDetailStore } from './JobDetailStore';
import Cookies from 'js-cookie';
class JobStore {
  JobsList: JobDetailStore[] | undefined;
  constructor() {
    makeAutoObservable(this);
  }

  fetchJobDetails(
    employment_type: string[] = [''],
    minimum_package: string = '',
    searchInput: string = ''
  ) {
    let employmentTypeParameter = employment_type.join(',').toUpperCase();
    employmentTypeParameter = employmentTypeParameter.split(' ').join('');
    let packageParameter = null;
    switch (minimum_package) {
      case '10 LPA and above': {
        packageParameter = 1000000;
        break;
      }
      case '20 LPA and above': {
        packageParameter = 2000000;
        break;
      }
      case '30 LPA and above': {
        packageParameter = 3000000;
        break;
      }
      case '40 LPA and above': {
        packageParameter = 4000000;
        break;
      }
      default: {
        packageParameter = 0;
      }
    }
    console.log(employmentTypeParameter);
    fetch(
      `https://apis.ccbp.in/jobs?employment_type=${employmentTypeParameter}&minimum_package=${packageParameter}&search=${searchInput}`,
      {
        method: 'GET',
        headers: { authorization: `Bearer ${Cookies.get('Token')}` },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setJobsList(res.jobs);
        console.log(res);
      });
  }
  setJobsList(lis: JobDetailStore[]) {
    this.JobsList = lis;
  }
}

const jobStore = new JobStore();
export default jobStore;
