import { useEffect, useState } from 'react';
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
  const handleEmployeeTypeChange = (value: string, checked: boolean) => {
    if (checked) {
      setEmployeeType([...employeeType, value]);
    } else {
      setEmployeeType(employeeType.filter((type) => type !== value));
    }
  };
  const handleSalaryChange = (sal: string) => {
    setSalary(sal);
  };
  const store = useContext(MobXProviderContext);
  useEffect(() => {
    const { jobStore } = store;
    jobStore.fetchJobDetails(employeeType, salary);
  }, [salary, employeeType, store]);
  return (
    <Sidebar>
      <SectionTitle>Type of Employment</SectionTitle>
      <CheckboxGroup>
        {['Full Time', 'Part Time', 'Freelance', 'Internship'].map((e) => {
          return (
            <CheckboxLabel>
              <input
                type="checkbox"
                checked={employeeType.includes(e)}
                onChange={(ev) =>
                  handleEmployeeTypeChange(e, ev.target.checked)
                }
              />{' '}
              {e}
            </CheckboxLabel>
          );
        })}
      </CheckboxGroup>

      <SectionTitle>Salary Range</SectionTitle>
      <RadioGroup>
        {[
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
        })}
      </RadioGroup>
    </Sidebar>
  );
};

export default FilterSidebar;
