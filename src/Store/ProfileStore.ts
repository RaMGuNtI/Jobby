import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';

interface ProfileInterface {
  name: string;
  profile_image_url: string;
  short_bio: string;
}

type Status = 'pending' | 'success' | 'failure';

export class ProfileStore {
  profileDetails: ProfileInterface | undefined;
  apiStatus: Status = 'pending';

  constructor() {
    makeAutoObservable(this);
  }

  setApiStatus(status: Status) {
    this.apiStatus = status;
  }

  fetchProfileDetails() {
    this.setApiStatus('pending');
    fetch('https://apis.ccbp.in/profile', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${Cookies.get('Token')}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setProfileDetails(res.profile_details);
        this.setApiStatus('success');
      })
      .catch((err) => {
        this.setApiStatus('failure');
        console.log(err);
      });
  }
  
  setProfileDetails(profileDetails: ProfileInterface) {
    this.profileDetails = profileDetails;
  }
}
const profileStore = new ProfileStore();
export default profileStore;
