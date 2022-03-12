export const responseAdapter = (array: [any]) => {
  const responseArray = [];
  array.map((item) => {
    const { bytes, modified, folder, name } = item;
    responseArray.push({
      name,
      bytes,
      modified: new Date(modified),
      folder,
    });
  });

  return responseArray;
};
