document.addEventListener("DOMContentLoaded", () => {
  const notiNumEl = document.querySelector("div.amount");
  const notiEls = document.querySelectorAll(".notifcations > li");

  const markAllAsRead = () => {
    notiNumEl.innerHTML = "0";
    notiEls.forEach((el) => {
      el.className = "read";
    });
  };

  document.querySelector("header > button").addEventListener("click", (e) => {
    e.preventDefault();
    markAllAsRead();
  });
});
