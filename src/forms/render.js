import React from "react";

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import './render.css'

export const renderField = field => {  
  const {
    meta: { touched, error }
  } = field;
  const isError = !!touched && !!error;
  
  return (
    <div className="formGroup">
      <TextField
        className={field.className}
        {...field.input}
        error={isError}
        fullWidth
        label={field.label}
        placeholder={field.placeholder}
        required={!field.fieldNotRequired}
      />
      <div className="formInputWarning">
        {isError && <span className="text-danger">{error}</span>}
      </div>
    </div>
  );
};

export const renderSelect = field => {

  const {
    meta: { touched, error }
  } = field;
  const isError = !!touched && !!error;
  const value = field.options.find((e) => e.value === field.initialValue) || { value: ''};
  
  return (
    <div className="formGroup">
      <FormControl required fullWidth>
        <InputLabel htmlFor={field.name}>{field.label}</InputLabel>
        <Select
          value={value.value}
          onChange={field.onChangeHandler}
        >
          {field.options.map((data, key) => {
            return <MenuItem key={key} selected={key === 0} value={data.value}>{data.label}</MenuItem>
          })}
        </Select>
        <div className="formInputWarning">
          {isError && <span className="text-danger">{error}</span>}
        </div>
      </FormControl>
    </div>
  );
};