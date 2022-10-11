export const truncate = (str, n) => 
    (str.length > n) ? str.slice(0, n-1) + '...' : str;

export const formatNumber = (num) =>
    num.toFixed(1).replace(/(\d)(?=(\d{2}))/g)
 