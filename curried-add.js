function curriedAdd(total = 0) {
    return function(nextValue) {
      if (nextValue === undefined) return total;
      return curriedAdd(total + nextValue);
    };
  }
  
  let firstAdder = curriedAdd();
  let secondAdder = curriedAdd();
  let thirdAdder = curriedAdd();
  
module.exports = { curriedAdd };
