export default (value) => {
  if (typeof value !== 'string') throw new Error('Plus space filter only for strings.');
  return value.concat(' ');
};

