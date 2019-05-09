var fs = require("fs");

const path = __dirname + "/projects";

function readDir(url) {
    let projectsObj = { projects: [] };
    let currentList = fs.readdirSync(path, { withFileTypes: true });

    for (var i = 0; i < currentList.length; i++) {
        projectsObj.projects.push({ name: currentList[i].name });
    }
    return projectsObj;
}

let projectsList = readDir(path);

let html = `<!DOCTYPE html>
    <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8">
            <title>Portfolio</title>
        </head>
        <body>
        <h1>Portfolio</h1>
        <ul>
        `;

module.exports = function createIndexPage() {
    for (let i = 0; i < projectsList.projects.length; i++) {
        html +=
            `  <li> <a href="` +
            `/${projectsList.projects[i].name}"` +
            ` </a> ` +
            `${projectsList.projects[i].name}` +
            ` </li>
            `;
    }
    html += `</ul>
        </body>
        </html>`;
    return html;
};
