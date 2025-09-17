import { observer } from 'mobx-react';
import { useEffect, type ReactNode } from 'react';
import Loader from '../Loader/Loader';
import { ProfileCardBox } from './styledComp';
import { useProfileStore } from '../../Hooks/CustomHooks';
const ProfileCard = observer((): ReactNode => {
  const profileStore = useProfileStore();
  const { apiStatus, profileDetails } = profileStore;
  useEffect(() => {
    profileStore.fetchProfileDetails();
  }, []);

  const renderProfileCard = (): ReactNode => {
    return (
      <ProfileCardBox>
        <div>
          <img src={profileDetails?.profile_image_url} />
        </div>
        <div>
          <h3>{profileDetails?.name}</h3>
        </div>
        <div>
          <p>{profileDetails?.short_bio}</p>
        </div>
      </ProfileCardBox>
    );
  };

  switch (apiStatus) {
    case 'pending':
      return <Loader />;
      break;
    case 'success':
      return renderProfileCard();
      break;
    case 'failure':
      return <h1>Something Went Wrong</h1>;
      break;
  }
});

export default ProfileCard;
