import moment from "moment";

export const getFormatedDate = () => {
  return moment().format("MMMM do YYYY, h:mm:ss a");
};

export const isDigital = (char) => {
  if (!/^\d+$/.test(char)) {
    return false;
  }
  return true;
};
