export const formatError = (err) => {
  console.log('err', err);
  return err;
};

export const toCamelCase = (text) => {
  text = text.replace(/[_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
  return text.substr(0, 1).toLowerCase() + text.substr(1);
};

export async function waitTask(id, dataSources) {
  return await new Promise((resolve) => {
    const interval = setInterval(async () => {
      const { progress, url } = await dataSources.storageApi.backgroundTask(id);

      if (progress === 'done') {
        resolve(url);
        clearInterval(interval);
      }
    }, 1000);
  });
}
