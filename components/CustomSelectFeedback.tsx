import React, { useState } from "react";
import ReactSelect, { ActionMeta, ValueType } from "react-select";
import { SelectComponentsProps } from "react-select/src/Select";

const capitalize = (value: string): string => {
  return (
    value.toUpperCase().substring(0, 1) +
    value.toLowerCase().substring(1, value.length)
  );
};

export interface ICustomSelectOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface ICustomSelectProps extends SelectComponentsProps {
  options: ICustomSelectOption[];
  variant?: "default" | "ghostBig" | "ghostSmall";
  labelText?: string;
  showLabel?: boolean;
  className?: string;
  border?: boolean;
  width?: string;
  shadow?: boolean;
  radius?: boolean;
  disabled?: boolean;
  disableInnerState?: boolean;
  label?: string | JSX.Element;
}

export const getOptionValue = (option: ICustomSelectOption) => {
  return option.value;
};

export const CustomSelect: React.FC<any> = ({
  className = "",
  id,
  name,
  options,
  errors,
  showLabel = false,
  label = name,
  defaultValue,
  value,
  onChange,
  border = false,
  variant = "default",
  width = "100%",
  shadow = true,
  radius = true,
  disabled = false,
  disableInnerState = false,
  ...rest
}) => {
  const customStyles = {
    default: {
      container: (provided: any) => ({
        ...provided,
        display: "flex",
        height: "50px",
        width: "100% !important",
        borderWidth: "1px !important",
        borderRadius: "8px !important",

        borderColor: "#DADCDF",
        "&:focus": {
          borderColor: "#302e2c",
        },
        zIndex: 11,
      }),
      control: (provided: any) => ({
        ...provided,
        width: width,
        background: "#fff",
        borderRadius: "5px",
        overflow: "hidden",
        border: 0,
        // This line disable the blue border
        boxShadow: "none",
      }),
      option: (provided: any, state: any) => ({
        ...provided,
        opacity: state.isDisabled ? 0.5 : 1,
        pointerEvents: state.isDisabled ? "none" : "all",
        textDecoration: state.isDisabled ? "line-through" : "none",
        fontSize: "18px ",
        background: "transparent",
        lineHeight: "24px",
        color: 'theme("colors.secondary")',
        cursor: "pointer",
        "&:hover": {
          background: "rgba(80, 158, 47, 0.2)",
        },
      }),
      menu: (provided: any) => ({
        ...provided,
        background: "#ffffff",
        boxShadow: "0px 1px 10px  rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        padding: "5px 0 ",
      }),
      singleValue: (provided: any, state: any) => ({
        ...provided,
        paddingLeft: "10px",
        height: "auto",
        color: state.isDisabled ? "#6d6d6d" : "",
      }),
      valueContainer: (provided: any, state: any) => ({
        ...provided,
        height: "100%",
        background: state.isDisabled ? "#DADCDF" : "",
      }),
      placeholder: (provided: any) => ({
        ...provided,
        paddingLeft: "10px",
      }),
      indicatorsContainer: (provided: any, state: any) => ({
        ...provided,
        background: state.isDisabled ? "#DADCDF" : "",
      }),
    },
    ghost: {
      container: (provided: any) => ({
        ...provided,
        display: "flex",
        height: "50px",
        width: "auto",
        maxWidth: "200px",
        borderWidth: `${border ? "1px !important" : "none !important"}`,
        borderColor: "#DADCDF",
        cursor: "pointer",
        padding: "0",
      }),
      menu: (provided: any) => ({
        ...provided,
        background: "#ffffff",
        boxShadow: shadow ? "0px 1px 10px  rgba(0, 0, 0, 0.2)" : "",
        borderRadius: "8px",
        padding: "5px 0",
        width: "max-content",
      }),
      menuList: (provided: any) => ({
        ...provided,
      }),
      control: (provided: any) => ({
        ...provided,
        width: "100% !important",
        background: "#fff",
        border: 0,
        boxShadow: "none !important",
        borderRadius: radius ? "100px" : "",
        outline: "none !important",
        display: "flex",
        flexWrap: "no-wrap",
        padding: "0 10px 0 20px",
        cursor: "pointer",
        alignItems: "center",
        "&:hover": {
          background: "#F7F7F7",
        },
      }),
      option: (provided: any, state: any) => ({
        ...provided,
        opacity: state.isDisabled ? 0.5 : 1,
        pointerEvents: state.isDisabled ? "none" : "all",
        textDecoration: state.isDisabled ? "line-through" : "none",
        fontSize: "18px ",
        background: "transparent",
        lineHeight: "24px",
        color: 'theme("colors.secondary")',
        cursor: "pointer",
        "&:hover": {
          background: "rgba(80, 158, 47, 0.2)",
        },
        textOverflow: "auto",
        overflow: "visible",
        position: "relative",
      }),
      indicatorSeparator: () => ({ display: "none" }),
      dropdownIndicator: (base: any) => ({
        ...base,
        color: variant === "ghostSmall" ? "gray-900" : "gray-700",
        "&:hover": {
          color: "#302E2C",
        },
      }),
      singleValue: (provided: any) => ({
        ...provided,
        color: variant === "ghostSmall" ? "gray-900" : "gray-700",
        fontSize: variant === "ghostSmall" ? "16px" : "18px",
        //positioning
        position: "relative",
        pointerEvents: "none",
        maxWidth: "none",
        top: "auto",
        transform: "none",
        fontWeight: variant !== "ghostSmall" ? 700 : 400,
        height: "auto",
        alignItems: "center",
        margin: "0",
        //truncate
        display: "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }),
      valueContainer: (provided: any) => ({
        ...provided,
        height: "100%",
        padding: "0 !important",
      }),
    },
  };

  const [innerValue, setInnerValue] =
    React.useState<ValueType<ICustomSelectOption, boolean>>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  React.useEffect(() => {
    setInnerValue(value || defaultValue);
  }, [value]);

  const handleOnChange = (
    value: ValueType<ICustomSelectOption, boolean>,
    actionMeta: ActionMeta<ICustomSelectOption>
  ) => {
    if (!disableInnerState) {
      setInnerValue(value);
    }
    onChange && onChange(value, actionMeta);
  };

  return (
    <div
      className={`${
        variant === "ghostBig" || variant === "ghostSmall" ? "" : "w-full mb-6"
      }  ${isFocused ? "isFocused" : ""} ${errors ? "isInvalid" : ""}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {showLabel && (
        <label className="block mb-1 text-sm text-gray-700" htmlFor={name}>
          {typeof label === "string" ? capitalize(label) : label}
        </label>
      )}
      <ReactSelect
        id={id}
        aria-label={name}
        instanceId={id}
        name={name}
        defaultValue={defaultValue}
        selectedValue={innerValue || defaultValue}
        value={innerValue}
        options={options}
        errors={errors}
        styles={
          variant === "default"
            ? customStyles["default"]
            : customStyles["ghost"]
        }
        onChange={handleOnChange}
        className={`${className || ""} form-select`}
        classNamePrefix="form-select"
        isSearchable={false}
        isDisabled={disabled}
        {...rest}
      />
      {errors && <CustomSelectFeedback name={name} error={errors} />}
    </div>
  );
};

interface ICustomSelectFeedbackProps {
  error: any;
  name: string;
}
const CustomSelectFeedback: React.FC<ICustomSelectFeedbackProps> = ({
  error,
  name,
}) => {
  return (
    <p
      data-testid={`${name}-input-error`}
      className="mt-1 text-xs text-red-500"
    >
      {error?.value || error}
    </p>
  );
};
