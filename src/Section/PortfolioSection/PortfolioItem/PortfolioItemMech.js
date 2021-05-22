export const gitAct = (e, link1, link2) => {
  e.preventDefault();
  window.open(link1, "first");
  setTimeout(function () {
    window.open(link2, "second");
  }, 500);
};

export const liveAct = (e, link1) => {
  link1 !== "" ? window.open(link1) : console.log("");
};
