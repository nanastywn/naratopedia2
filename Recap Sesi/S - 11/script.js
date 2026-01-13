async function generateIdea() {
  const result = document.getElementById("result");
  const activity = document.getElementById("activity");
  const type = document.getElementById("type");
  const screenshot = document.getElementById("screenshot");

  const url = "https://bored-api.appbrewery.com/random";
  const response = await fetch(url);
  const api = await response.json();

  type.textContent = api.type;
  activity.textContent = api.activity;
  type.style.display = "block";

  let count = 0;

  screenshot.addEventListener("click", function () {
    count && location.reload();
    html2canvas(result).then((callback) => {
      screenshot.setAttribute("href", callback.toDataURL("image/jpg"));
      screenshot.textContent = "✅";
      count = 1;
    });
  });
}
