let count = 0;
let value = document.getElementById("count");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    value.textContent = count;

    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "black";
    }
  });
});
