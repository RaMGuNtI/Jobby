import { fireEvent, render, screen } from '@testing-library/react';
import FilterSidebar from '.';

describe('test for success cases', () => {
  test('calls fetchJobDetails when employee type or salary changes', () => {
    
    const mockFetch = jest.fn();

    render(<FilterSidebar fetchJobDetails={mockFetch} />);

    expect(mockFetch).toHaveBeenCalledWith([], '');

    fireEvent.click(screen.getByLabelText('Full Time'));

    expect(mockFetch).toHaveBeenCalledWith(['Full Time'], '');

    fireEvent.click(screen.getByLabelText('10 LPA and above'));

    expect(mockFetch).toHaveBeenCalledWith(['Full Time'], '10 LPA and above');

    fireEvent.click(screen.getByLabelText('30 LPA and above'));

    expect(mockFetch).toHaveBeenCalledWith(['Full Time'], '30 LPA and above');
    
    fireEvent.click(screen.getByLabelText('Internship'));
    
    expect(mockFetch).toHaveBeenCalledWith(['Full Time', 'Internship'], '30 LPA and above');
  });
});
