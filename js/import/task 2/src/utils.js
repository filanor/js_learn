export const checkLocalStorage = () => {
  const cookieFlag = localStorage.getItem("cookieFlag");
  if (cookieFlag) {
    return true;
  }
  return false;
};
