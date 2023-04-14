const isSSR = typeof window === "undefined";

export const cache = {
  checkItem: (key) =>
    isSSR ? false : localStorage.getItem(key) ? true : false,
  getItem: (key) => JSON.parse(localStorage.getItem(key)),
  setItem: (data = {}) => {
    // console.log(data);
    return Object.keys(data).forEach((key) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(data[key]));
      }
    });
  },
  removeItem: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};
