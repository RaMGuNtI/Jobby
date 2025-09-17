import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

export const useStores = () => useContext(MobXProviderContext);

export const useAuthStore = () => useStores().authStore;
export const useJobStore = () => useStores().jobStore;
export const useJobDetailStore = () => useStores().jobDetailStore;
export const useProfileStore = () => useStores().profileStore;
