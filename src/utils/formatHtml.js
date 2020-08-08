const formatHtml = (str) => {
  const element = document.createElement("div");
  if (str && typeof str === "string") {
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
    element.innerHTML = str;
    str = element.textContent;
    element.textContent = "";
  }
  return str;
};

export default formatHtml;
