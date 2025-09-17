import { useEffect, useState } from 'react';
import FilterSidebar from '../FilterSidebar';
import ProfileCard from '../ProfileCard';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useJobStore } from '../../Hooks/CustomHooks.ts';
import { JobModel } from '../../Store/JobModel.ts';
import JobsCard from '../JobCard/index.tsx';
import Loader from '../Loader/Loader.tsx';
const JobsPage = observer((): ReactNode => {
  const [searchInput, setSearchInput] = useState('');
  const jobStore = useJobStore();

  useEffect(() => {
    const fet = async () => {
      await jobStore.fetchJobDetails();
    };
    fet();
  }, []);

  const renderSearchBox = () => {
    return (
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
    );
  };

  const renderJobsList = () => {
    return jobStore.JobsList.length !== 0 ? (
      <div>
        {jobStore.JobsList &&
          jobStore.JobsList.map((jobcard: JobModel, idx: number) => (
            <Link to={`/jobs/${jobcard.id}`} key={jobcard.id}>
              <JobsCard {...jobcard} key={idx} />
            </Link>
          ))}
      </div>
    ) : (
      <h1>No Jobs With this filters</h1>
    );
  };

  const renderJobsPage = (): ReactNode => {
    return (
      <div>
        <div>
          <ProfileCard />
          <FilterSidebar />
        </div>
        <div>
          {renderSearchBox()}
          {renderJobsList()}
        </div>
      </div>
    );
  };

  return jobStore.apiStatus === 'pending' ? (
    <Loader />
  ) : jobStore.apiStatus === 'success' ? (
    renderJobsPage()
  ) : (
    <h1>Something went Wrong</h1>
  );
  // return renderJobsPage();
});

export default JobsPage;
