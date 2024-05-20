import * as React from 'react';
import { forwardRef } from 'react';
import Label from '../label/Label';
import Feedback from '../feedback/Feedback';
import useFieldId from '../hooks/useFieldId';
import FieldWrapper from '../wrapper/FieldWrapper';

export interface ICheckbox {
  id?: string;
  label?: string;
  name?: string;
  className?: string;
  colSpan?: number;
  feedback?: boolean;
  value?: any;
  list?: ICheckbox[];
}

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  ({ id, label, name, className, colSpan, feedback = true, list, ...props }, ref) => {
    const fieldId = useFieldId(id);

    if (Array.isArray(list) && list.length) {
      return (
        <FieldWrapper colSpan={colSpan} type="checkbox-group" className={className}>
          <Label label={label} name={name} />
          {list.map((radio) => (
            <Checkbox
              key={radio?.value}
              ref={ref}
              name={name}
              feedback={false}
              {...radio}
              {...props}
            />
          ))}
          {feedback && <Feedback name={name} />}
        </FieldWrapper>
      );
    }

    return (
      <FieldWrapper colSpan={colSpan} type="checkbox" className={className}>
        <input ref={ref} id={fieldId} name={name} type="checkbox" {...props} />
        <Label label={label} htmlFor={fieldId} />
        {feedback && <Feedback name={name} />}
      </FieldWrapper>
    );
  }
);

export default Checkbox;
