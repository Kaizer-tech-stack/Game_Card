let tasks = [];

function displayTasks() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html +=
      "<li>" +
      tasks[i] +
      "<button onclick='removeTask(" +
      i +
      ")'> x</button></li>  ";
  }
  document.getElementById("list").innerHTML = html;
}
