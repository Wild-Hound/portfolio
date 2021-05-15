export const menuBtnAct = (e, menuId) => {
  const temp = document.getElementById(menuId);
  if (temp.style.display === "none") {
    temp.style.display = "block";
  } else {
    temp.style.display = "none";
  }
};
