const selectify = (sel) => {
  sel.style.display = "none";
  const newSel = document.createElement("div");
  const icon = document.createElement("img");
  const text = document.createElement("div");
  const iconTextWrap = document.createElement("div");
  const arrowDown = document.createElement("div");
  icon.src = "img/planet.svg";
  icon.alt = "planet.svg";
  icon.style.float = "left";
  text.appendChild(document.createTextNode(sel.children[0].textContent));
  text.style.paddingLeft = "20px";
  text.style.float = "left";
  iconTextWrap.style.display = "inline-block";
  iconTextWrap.appendChild(icon);
  iconTextWrap.appendChild(text);
  newSel.style.position = "relative";
  newSel.style.width = "227px";
  newSel.style.height = "20px";
  newSel.style.background = "#3B3B3B";
  newSel.style.color = "white";
  newSel.style.padding = "12px";
  newSel.style.cursor = "pointer";
  arrowDown.style.width = "8px";
  arrowDown.style.height = "8px";
  arrowDown.style.borderLeft = "2px solid white";
  arrowDown.style.borderBottom = "2px solid white";
  arrowDown.style.display = "inline-block";
  arrowDown.style.float = "right";
  arrowDown.classList.toggle("rotated135");
  newSel.appendChild(iconTextWrap);
  newSel.appendChild(arrowDown);
  sel.parentNode.insertBefore(newSel, sel.nextSibling);

  const newSelOptions = document.createElement("div");
  newSelOptions.style.position = "absolute";
  newSelOptions.style.top = "44px";
  newSelOptions.style.left = "0";
  const toggleHideSelOptions = (e) => {
    if (!e) return;
    newSelOptions.classList.toggle("hidden");
    arrowDown.classList.toggle("rotatedMinus45");
    arrowDown.classList.toggle("rotated135");
  }
  for (let i = 0; i < sel.children.length; i++) {
    const option = sel.children[i];
    const newSelOptionsOption = document.createElement("div");
    newSelOptionsOption.setAttribute("data-value", option.value);
    newSelOptionsOption.textContent = option.textContent;
    newSelOptionsOption.style.background = "#3B3B3B";
    newSelOptionsOption.style.color = "white";
    newSelOptionsOption.style.width = "231px";
    newSelOptionsOption.style.padding = "10px";
    newSelOptionsOption.style.cursor = "pointer";
    newSelOptionsOption.onclick = (e) => {
      toggleHideSelOptions();
      text.innerHTML = "";
      text.appendChild(document.createTextNode(newSelOptionsOption.textContent));
    }
    newSelOptions.appendChild(newSelOptionsOption);
  }
  //newSel.parentNode.insertBefore(newSelOptions, newSel.nextSibling);
  newSel.appendChild(newSelOptions);
  toggleHideSelOptions('e attribute should not be empty');
  newSel.onclick = toggleHideSelOptions;
}