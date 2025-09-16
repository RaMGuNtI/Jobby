import { MobXProviderContext, observer } from 'mobx-react';
import { useContext, useEffect, type ReactNode } from 'react';
import Loader from '../Loader/Loader';
import { ProfileCardBox } from './styledComp';
// eslint-disable-next-line react-refresh/only-export-components
const ProfileCard = (): ReactNode => {
  console.log(useContext(MobXProviderContext));
  const { profileStore } = useContext(MobXProviderContext);
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
  ) : (
    renderProfileCard()
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(ProfileCard);
