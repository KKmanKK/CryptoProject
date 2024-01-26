export const debounce = (func, ms) => {
  let timeId;
  return function () {
    // const dFunc = func.apply(this, arguments);

    clearTimeout(timeId);
    timeId = setTimeout(() => func.apply(this, arguments), ms);
  };
};
