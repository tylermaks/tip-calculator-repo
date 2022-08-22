const getTip = (billAmount, people, percentage) => {
    const result =
      billAmount && people > 0
        ? ((billAmount * (percentage / 100)) / people).toFixed(2)
        : "0.00";
    return result;
  };
  const getTotal = (billAmount, people, percentage) => {
    const total =
      billAmount && people > 0
        ? ((billAmount * (1 + percentage / 100)) / people).toFixed(2)
        : "0.00";
     return total;
  };
  
  export {getTip, getTotal};