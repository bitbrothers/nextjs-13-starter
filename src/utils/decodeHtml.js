export const decodeHtml = (html) => {
  if (html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  return "";
};
