let http = require("http");
let url = require("url");
let tasks = [];

let main = `
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  </head>

  <body style="font-family: 'Epilogue', sans-serif;">
    <h2>MEAN Stack July 2021 Task Planner 🎆💡</h2>
    <h3>Add a new task by clicking on the Add Task link 👇👇👇</h3>
    <ul style="list-style: none">
      <li><a href="appendTask" style="text-decoration: none">👉 Append Task 👈</a></li>
      <br />
      <li>
        <a href="removeTask" style="text-decoration: none">👉 Remove Task 👈</a>
      </li>
      <br />
      <li><a href="listTask" style="text-decoration: none">👉 See All Tasks 👈</a></li>
    </ul>
  </body>

</html>
`;
let appendTask = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Epilogue', sans-serif;">
  <h2>Please add tasks below</h2>
    <form action="addForm">
        <label>Emp Id</label>
        <input type="text" name="empId" style="padding: 3px;"/><br/><br>
        <label>Task Id</label>
        <input type="text" name="taskId"style="padding: 3px;"/><br/><br>
        <label>Task</label>
        <input type="text" name="task"style="padding: 3px;"/><br/><br>
        <label>Deadline</label>
        <input type="date" name="deadline"style="padding: 3px;"/><br/><br><hr>
        <input type="submit" value="submit"style="border-radius:2px;padding:5px; background-color: blueviolet; color:white;font-family: 'Epilogue', sans-serif;font-size: 1.1rem"/>
        <input type="reset" value="reset"style="border-radius:2px;padding:5px;background-color: orange; color:white; font-family: 'Epilogue', sans-serif;font-size: 1.1rem"/><br>
    </form><br>
    <a href="main" style=" font-family: 'Epilogue', sans-serif;font-size: 1.1rem; text-decoration:none;">Back</a>
</body>
</html>
`;

let removeTask = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Epilogue', sans-serif;">
  <h2>Delete Tasks by it's ID</h2>
    <form action="deleteForm">
        <label>Task Id</label>
        <input type="text" name="taskId"style="padding: 3px;"/><br><br>
        <input type="submit" value="submit"style="border-radius:2px;padding:5px; background-color: blueviolet; color:white; font-family: 'Epilogue', sans-serif;font-size: 1.1rem"/>
        <input type="reset" value="reset"style="border-radius:2px;padding:5px;background-color: orange; color:white;font-family: 'Epilogue', sans-serif;font-size: 1.1rem"/> <br><br>
    </form>
    <a href="main" style="font-family: 'Epilogue', sans-serif;font-size: 1.1rem;text-decoration:none;">Back</a>
</body>
</html>
`;


let server = http.createServer((request, response) => {
  let urlInfo = url.parse(request.url, true);
  if (urlInfo.path != "/favicon.ico") {
    if (urlInfo.path == "/removeTask") {
      response.write(removeTask);
    } else if (urlInfo.pathname == "/deleteForm") {
      let task = urlInfo.query;
      let result = tasks.find((elementt) => elementt.taskId == task.taskId);
      if (result != undefined) {
        tasks.pop(result);
        response.write(`Successfully deleted the task Yay!!!`);
      } else {
        response.write(`Task is nowhere to be found :(`);
      }
    } else if (urlInfo.path == "/appendTask") {
      response.write(appendTask);
    } else if (urlInfo.pathname == "/addForm") {
      let task = urlInfo.query;
      let result = tasks.find((elementt) => elementt.taskId == task.taskId);
      response.writeHead(200, { "content-type": "text/html" });
      if (result == undefined) {
        tasks.push(task);
        response.write(`<strong style='color:red'>Task Added Successfully!, Array size is: </strong>` + tasks.length);
        response.write(main);
      } else {
        response.write("Task Id must be unique!");
        response.write(appendTask);
      }
    } else if (urlInfo.path == "/listTask") {
      let tableDisplay =
        `<table border=1 ><tr style="font-family: 'Epilogue', sans-serif;"><th>Emp Id</th><th>Task Id</th><th>Task</th><th>Date</th></tr>`;
      let i = 0;
      let cont = "";

      while (i < tasks.length) {
        cont +=
          `<tr style="font-family: 'Epilogue', sans-serif; padding: 18px;"><td>` +
          tasks[i].empId +
          `</td><td>` +
          tasks[i].taskId +
          ` </td><td>` +
          tasks[i].task +
          `</td><td>` +
          tasks[i].deadline +
          `</td></tr>`;
        i++;
      }
      let end = "</table>";
      let total = tableDisplay + cont + end;

      response.write(total);
      response.write(`<br><a href="main" style="font-family: 'Epilogue', sans-serif;font-size: 1.1rem;text-decoration:none;">Back</a>`);
    } else {
      response.write(main);
    }
  }

  response.end();
});

server.listen(9090, () => console.log("Server running on port number 9090"));
