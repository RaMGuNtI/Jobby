import { useEffect, useState, type ReactNode } from 'react';
import {
  Sidebar,
  SectionTitle,
  CheckboxGroup,
  CheckboxLabel,
  RadioGroup,
  RadioLabel,
} from './styledComp';
import { EmployeeType, SalaryRanges } from '../Contansts/constants';
import { useJobStore } from '../../Hooks/CustomHooks';

const FilterSidebar = () => {
  const [employeeType, setEmployeeType] = useState<string[]>([]);
  const [salary, setSalary] = useState<string>('');

  const handleEmployeeTypeChange = (value: string, checked: boolean): void => {
    if (checked) {
      setEmployeeType([...employeeType, value]);
    } else {
      setEmployeeType(employeeType.filter((type) => type !== value));
    }
  };

  const handleSalaryChange = (sal: string): void => {
    setSalary(sal);
  };

  const jobStore = useJobStore();

  useEffect(() => {
    jobStore.fetchJobDetails(employeeType, salary);
  }, [employeeType, salary]);

  const renderEmployeeTypeFilters = (): ReactNode => {
    return Object.keys(EmployeeType).map((e, idx) => {
      return (
        <CheckboxLabel>
          <input
            key={idx}
            type="checkbox"
            checked={employeeType.includes(e)}
            onChange={(ev) => handleEmployeeTypeChange(e, ev.target.checked)}
          />{' '}
          {e}
        </CheckboxLabel>
      );
    });
  };

  const renderSalaryFilters = () => {
    return Object.keys(SalaryRanges).map((e) => {
      return (
        <RadioLabel>
          <input
            type="radio"
            name="salary"
            checked={salary === e}
            onChange={() => handleSalaryChange(e)}
          />
          {e}
        </RadioLabel>
      );
    });
  };

  return (
    <Sidebar>
      <SectionTitle>Type of Employment</SectionTitle>
      <CheckboxGroup>{renderEmployeeTypeFilters()}</CheckboxGroup>
      <SectionTitle>Salary Range</SectionTitle>
      <RadioGroup>{renderSalaryFilters()}</RadioGroup>
    </Sidebar>
  );
};

export default FilterSidebar;
