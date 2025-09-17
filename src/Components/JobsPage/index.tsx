import { useEffect, useState } from 'react';
import FilterSidebar from '../FilterSidebar';
import ProfileCard from '../ProfileCard';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useJobStore } from '../../Hooks/CustomHooks.ts';
import { JobSummaryModel } from '../../Models/JobSummaryModel.ts';
import JobsCard from '../JobCard/index.tsx';
import Loader from '../Loader/Loader.tsx';
const JobsPage = observer((): ReactNode => {
  const [searchInput, setSearchInput] = useState('');
  const jobStore = useJobStore();

  useEffect(() => {
    jobStore.fetchJobDetails();
  }, []);

  const renderSearchBox = () => {
    return (
      <div>
        <input
          value={searchInput}
          placeholder='search jobs'
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
          jobStore.JobsList.map((jobcard: JobSummaryModel, idx: number) => (
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
          <FilterSidebar fetchJobDetails={jobStore.fetchJobDetails} />
        </div>
        <div>
          {renderSearchBox()}
          {renderJobsList()}
        </div>
      </div>
    );
  };

  switch (jobStore.apiStatus) {
    case 'pending':
      return <Loader data-testid="loader" />;
      break;
    case 'success':
      return renderJobsPage();
      break;
    case 'failure':
      return <h1>Something Went Wrong</h1>;
      break;
  }
});

export default JobsPage;
