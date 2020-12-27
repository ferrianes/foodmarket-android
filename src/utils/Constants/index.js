export const currencyFormatter = (locales, currency, money) => {
  const curr = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency,

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  }).format(money);

  return curr;
};

export const toFixedNumberFormatter = (number) =>
  Number.parseFloat(number).toFixed(1);
