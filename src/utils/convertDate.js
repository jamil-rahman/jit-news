import moment from "moment";
export const convertFromISOStringToLocaleDate = (date) =>
  moment(date).utc().format("DD/MM/YYYY");
