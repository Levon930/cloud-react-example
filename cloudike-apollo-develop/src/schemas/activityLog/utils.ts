import { toCamelCase } from '../../utils';

export const logsMapper = (logs) => {
  logs = logs.map((item) => {
    const newData = {};
    for (const key in item) {
      const newKey = toCamelCase(key);
      newData[newKey] = item[key];
    }
    return newData;
  });

  return logs;
};
