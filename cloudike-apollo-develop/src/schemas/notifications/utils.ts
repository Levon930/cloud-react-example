export const notificationsMapper = (data) => {
  const toCamelCase = (text) => {
    text = text.replace(/[_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
    return text.substr(0, 1).toLowerCase() + text.substr(1);
  };
  const newData = data.map((dataItem) => {
    const newDataItem = {};
    for (const key in dataItem) {
      const newKey = toCamelCase(key);
      newDataItem[newKey] = dataItem[key];
    }
    return newDataItem;
  });
  return newData;
};
