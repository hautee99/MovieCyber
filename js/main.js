window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("headerFixed").style.transform =
      "translate(-50%,0)";
  } else {
    document.getElementById("headerFixed").style.transform =
      "translate(-50%,-100%)";
  }
};
