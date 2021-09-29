function getFixedTime() {
  return Date.now() - 1632920243899;
}

export const getApplicationNumber = () => {
  return parseInt(getFixedTime() / 600 / 60);
};
