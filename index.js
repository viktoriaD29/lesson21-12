export const getSection = (num) => {
  const el = document.querySelector(`span[data-number="${num}"]`);
  el.dataset;

  const res = el.closest('div');
  res.dataset;
  Object.values(res.dataset);
  return Object.values(res.dataset)[0];
};

