import { colors } from "../../../colors";
import { fontWeights } from "../../atoms/Text";

export const selectStyles = {
  container: (baseStyles: any, state: any) => ({
    ...baseStyles,
    padding: 0,
    color: `${colors.offWhite}`,
    border: "none",
  }),
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    border: "none",
    borderRadius: state.menuIsOpen ? "36px 36px 0 0" : "36px",
    padding: "2px 6px",
    background: `${colors.pastelPurple}`,
    cursor: "pointer",
    boxShadow: state.menuIsOpen
      ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      : "none",

    "&:hover": {
      background: `${colors.lightPastelPurple}`,
    },

    "@media (min-width: 768px)": {
      padding: "4px 8px",
    },
  }),
  placeholder: (baseStyles: any, state: any) => ({
    ...baseStyles,
    color: `${colors.offWhite}`,
    fontSize: "18px",
    lineHeight: "20px",
    fontWeight: `${fontWeights.bold}`,

    "@media (min-width: 768px)": {
      fontSize: "22px",
      lineHeight: "24px",
    },
  }),
  menu: (baseStyles: any, state: any) => ({
    ...baseStyles,
    width: "100%",
    marginTop: 0,
    borderRadius: "0 0 36px 36px",
    border: 0,
    outline: 0,
    padding: "0 8px",
    background: `${colors.pastelPurple}`,
    overflowY: "scroll",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  }),
  menuList: (baseStyles: any, state: any) => ({
    ...baseStyles,
    width: "100%",
    border: 0,
    outline: 0,
    fontSize: "18px",
    lineHeight: "20px",
    fontWeight: `${fontWeights.bold}`,
    padding: "10px 0",
    borderTop: `2px solid ${colors.darkPastelPurple}`,

    "@media (min-width: 768px)": {
      fontSize: "22px",
      lineHeight: "24px",
    },
  }),
  option: (baseStyles: any, state: any) => ({
    ...baseStyles,
    marginTop: "2px",
    width: "100%",
    cursor: "pointer",
    background: `${colors.pastelPurple}`,
    borderRadius: "36px",
    "&:hover": {
      background: `${colors.lightPastelPurple}`,
    },
    "&:first-of-type": {
      marginTop: "0px",
    },

    "@media (min-width: 768px)": {
      marginTop: "4px",
    },
  }),
  dropdownIndicator: (baseStyles: any, state: any) => ({
    ...baseStyles,
    color: `${colors.offWhite}`,
    border: "none",
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    "&:hover": {
      color: `${colors.offWhite}`,
    },
  }),
  valueContainer: (baseStyles: any, state: any) => ({
    ...baseStyles,
  }),
  singleValue: (baseStyles: any, state: any) => ({
    ...baseStyles,
    fontSize: "18px",
    lineHeight: "20px",
    color: `${colors.offWhite}`,
    fontWeight: `${fontWeights.bold}`,

    "@media (min-width: 768px)": {
      fontSize: "22px",
      lineHeight: "24px",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }),
};
