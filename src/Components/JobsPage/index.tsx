import { useContext, useEffect, useState } from 'react';
import FilterSidebar from '../FilterSidebar';
import ProfileCard from '../ProfileCard';
import { MobXProviderContext, observer } from 'mobx-react';
import JobDetailCard from '../JobDetailCard/index.tsx';
import type { JobDetailInterface } from '../../Store/JobDetailStore.tsx';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
const JobsPage = (): ReactNode => {
  const [searchInput, setSearchInput] = useState('');
  const { jobStore } = useContext(MobXProviderContext);
  useEffect(() => {
    const fetchJobsList = async () => {
      await jobStore.fetchJobDetails();
    };
    fetchJobsList();
  }, []);
  return (
    <div>
      <div>
        <ProfileCard />
        <FilterSidebar />
      </div>
      <div>
        <div>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            onClick={() =>
              jobStore.fetchJobDetails(undefined, undefined, searchInput)
            }
          >
            Search
          </button>
        </div>
        <div>
          {jobStore.JobsList &&
            jobStore.JobsList.map(
              (jobcard: JobDetailInterface, idx: string) => {
                console.log(jobcard);
                return (
                  <Link to={`/jobs/${jobcard.id}`}>
                    <JobDetailCard key={idx} {...jobcard} />
                  </Link>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(JobsPage);
