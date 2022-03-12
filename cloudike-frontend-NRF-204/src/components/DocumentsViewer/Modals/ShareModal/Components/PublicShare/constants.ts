export const initialValues = {
  password: '',
  limit: '',
};

export const getTime = () => {
  const time = new Date();

  return `${time.getHours()}:${time.getMinutes()}`;
};

export const linkCopyTimeOut = 3000;
