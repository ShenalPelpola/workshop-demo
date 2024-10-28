function debounce(callback, delay) {
  let timeout;

  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();
    
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}


export { debounce, throttle };