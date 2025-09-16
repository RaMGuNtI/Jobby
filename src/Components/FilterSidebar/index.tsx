import { useEffect, useState, type ReactNode } from 'react';
import {
  Sidebar,
  SectionTitle,
  CheckboxGroup,
  CheckboxLabel,
  RadioGroup,
  RadioLabel,
} from './styledComp';
import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';

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
  const store = useContext(MobXProviderContext);
  useEffect(() => {
    const { jobStore } = store;
    jobStore.fetchJobDetails(employeeType, salary);
  }, [salary, employeeType, store]);

  const renderEmployeeTypeFilters = ():ReactNode => {
    return ['Full Time', 'Part Time', 'Freelance', 'Internship'].map((e) => {
      return (
        <CheckboxLabel>
          <input
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
    return [
      '10 LPA and above',
      '20 LPA and above',
      '30 LPA and above',
      '40 LPA and above',
    ].map((e) => {
      return (
        <RadioLabel>
          <input
            type="radio"
            name="salary"
            onChange={() => handleSalaryChange(e)}
          />{' '}
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
