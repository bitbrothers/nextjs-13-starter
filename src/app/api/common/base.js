import Header from "./header";

const base = async (url, options) => {
  const fetchUrl = process.env.NEXT_PUBLIC_API_URL + url;
  const body = options.data
    ? { body: JSON.stringify({ payload: options.data }) }
    : {};

  try {
    const res = await fetch(fetchUrl, {
      headers: Header,
      ...{ ...options, ...body },
    });
    const data = await res.json();
    if (data.message === "Please authenticate") {
      console.log("Please Authenticate");
    }
    return { data, status: res.status };
  } catch (error) {
    console.error("Server error");
  }
};

export const get = (url, params = {}) => {
  const urlParams = new URLSearchParams(params).toString();
  if (urlParams) url = `${url}?${urlParams}`;
  const options = { method: "GET" };
  return base(url, options);
};

export const post = (url, data = {}) => {
  const options = { method: "POST", data };
  return base(url, options);
};

export const putCart = (productId) =>
  post("/carts", {
    userId: 5,
    date: "2020-02-03",
    products: [{ productId, quantity: 1 }],
  });
