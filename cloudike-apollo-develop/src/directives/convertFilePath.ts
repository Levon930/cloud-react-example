export const convertFilePath = async (next) => {
  const path = await next();

  if (typeof path === 'string') {
    // FIXME remove when frontend will be ready
    return path;
    // return path[0] === '/' ? path.substr(1) : `/${path}`;
  }

  return path;
};
