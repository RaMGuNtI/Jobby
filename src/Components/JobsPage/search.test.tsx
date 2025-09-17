import { Provider } from 'mobx-react';
import jobStore from '../../Store/JobStore';
import JobsPage from '.';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import profileStore from '../../Store/ProfileStore';

beforeEach(() => {
  jest.resetAllMocks();
});

test('fetch when search button is triggered success case', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      jobs: [
        {
          id: '1',
          title: 'Frontend Developer',
          company_logo_url: 'logo.png',
          employment_type: 'Full Time',
          job_description: 'Awesome frontend work',
          location: 'Remote',
          package_per_annum: '10 LPA',
        },
      ],
    }),
  } as unknown as Response);

  render(
    <MemoryRouter>
      <Provider jobStore={jobStore} profileStore={profileStore}>
        <JobsPage />
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByTestId('loader')).toBeInTheDocument();

  waitFor(() => {
    expect(screen.getByTestId('loader')).not.toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('search jobs'), {
      target: { value: 'dev' },
    });
    fireEvent.click(screen.getByText('Search'));
    expect(global.fetch).toHaveBeenCalledWith(
      `https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=dev`
    );
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Awesome frontend work')).toBeInTheDocument();
  });
});

test('fetch when search button is triggered failure case', async () => {
  global.fetch = jest.fn().mockRejectedValue({
    json: jest.fn().mockRejectedValue({
      error: 'Invalid Request',
    }),
  });

  render(
    <MemoryRouter>
      <Provider jobStore={jobStore} profileStore={profileStore}>
        <JobsPage />
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByTestId('loader')).toBeInTheDocument();
  waitFor(() => {
    expect(screen.getByTestId('loader')).not.toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('search jobs'), {
      target: { value: 'dev' },
    });
    fireEvent.click(screen.getByText('Search'));
    expect(global.fetch).toHaveBeenCalledWith(
      `https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=dev`
    );
    expect(screen.getByText('Something Went Wrong')).toBeInTheDocument();
  });
});
