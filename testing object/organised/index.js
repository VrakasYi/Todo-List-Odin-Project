// projectDataModule.js
const projectDataModule = (() => {
    const projectData = [];

    const addProject = (title) => {
        const newProject = {
            projectName: title,
            tasks: []
        };
        projectData.push(newProject);
    }

    const getProject = (title) => {
        return projectData.find(project => project.projectName === title);
    }

    return {
        addProject,
        getProject,
        projectData
    };
})();

//projectListModule.js
const projectListModule = (() => {
    const projectListDIV = document.getElementById('projectList');
    const newListButton = document.getElementById('newList');
    const popup = document.getElementById('popup');
    const form = document.getElementById('newListForm');

    newListButton.addEventListener('click', () => {
        popup.classList.remove('inactive');
        popup.classList.add('active');
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let title = document.getElementById('title').value;
        projectDataModule.addProject(title);
        const projectEntry = document.createElement('button');
        projectEntry.textContent = title;
        projectEntry.id = title;
        projectListDIV.appendChild(projectEntry);
        popup.classList.remove('active');
        popup.classList.add('inactive');
    });

})();

//ListBoxModule.js
const ListBoxModule = (() => {
    //reference the list of to do container
    const listBox = document.getElementById('listBox');
    const projectListDIV = document.getElementById('projectList');

    projectListDIV.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const projectId = event.target.id;
            listBox.innerHTML = '';

            const listEntry = document.createElement('div');
            listEntry.textContent = projectId;

            const addNewTaskButton = document.createElement('button');
            addNewTaskButton.textContent = 'Add new task';

            listEntry.appendChild(addNewTaskButton);
            listBox.appendChild(listEntry);

            const findObject = projectDataModule.getProject(projectId);
        }
    });
})();