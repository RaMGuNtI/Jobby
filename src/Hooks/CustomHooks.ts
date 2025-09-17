import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import type { AuthStore } from '../Store/AuthStore';
import type { JobStore } from '../Store/JobStore';
import type { JobDetailStore } from '../Store/JobDetailStore';
import type { ProfileStore } from '../Store/ProfileStore';

interface MobxContextType {
  authStore: AuthStore;
  jobStore: JobStore;
  jobDetailStore: JobDetailStore;
  profileStore: ProfileStore;
}

export const useStores = () =>
  useContext(MobXProviderContext) as MobxContextType;

export const useAuthStore = () => useStores().authStore;
export const useJobStore = () => useStores().jobStore;
export const useJobDetailStore = () => useStores().jobDetailStore;
export const useProfileStore = () => useStores().profileStore;
