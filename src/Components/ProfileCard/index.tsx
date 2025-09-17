import { observer } from 'mobx-react';
import { useEffect, type ReactNode } from 'react';
import Loader from '../Loader/Loader';
import { ProfileCardBox } from './styledComp';
import { useProfileStore } from '../../Hooks/CustomHooks';
const ProfileCard = observer((): ReactNode => {
  const profileStore = useProfileStore();
  const { apiStatus, profileDetails } = profileStore;
  useEffect(() => {
    const fetchProfile = async () => {
      await profileStore.fetchProfileDetails();
    };
    fetchProfile();
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

  return apiStatus === 'pending' ? (
    <ProfileCardBox>
      <Loader />
    </ProfileCardBox>
  ) : apiStatus === 'success' ? (
    renderProfileCard()
  ) : (
    <h1>Something went Wrong</h1>
  );
});

export default ProfileCard;
