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
    //reference the list of to do container
    const projectListDIV = document.getElementById('projectList');
    const newListButton = document.getElementById('newList');
    const popup = document.getElementById('popup');
    const form = document.getElementById('newListForm');
    const listBox = document.getElementById('listBox');
    let projectId;// Initialize the projectId variable


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

    projectListDIV.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            projectId = event.target.id;
            listBox.innerHTML = '';
    
            const listEntry = document.createElement('div');
            listEntry.textContent = projectId;
            listEntry.id = projectId;
    
            const addNewTaskButton = document.createElement('button');
            addNewTaskButton.textContent = 'Add new task';
            addNewTaskButton.id = 'newTaskButton'
    
            listEntry.appendChild(addNewTaskButton);
            listBox.appendChild(listEntry);
    
            const findObject = projectDataModule.getProject(projectId);
        };
    });
    const getProjectId = () => projectId;


    return{
        getProjectId,
    };
})();

//ListBoxModule.js
const ListBoxModule = (() => {
    //reference the list of to do container
    const listBox = document.getElementById('listBox');
    //reference the new task pop up form div
    const newTaskPop = document.getElementById('newTaskPop');
    //reference the new task pop up form
    const taskForm = document.getElementById('newTaskForm');
    let currentProject;
    
    listBox.addEventListener('click', (event) => {
        if (event.target.id === 'newTaskButton') {
            console.log('you need a pop up');
            newTaskPop.classList.remove('inactive');
            newTaskPop.classList.add('active');
        };
    });
    
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        //reference the div id of the selected project 
        let projectId = projectListModule.getProjectId();
        console.log(projectId);
        let tasktitle = document.getElementById('taskTitle').value;
        currentProject = projectDataModule.getProject(projectId);
        // projectDataModule.projectData[currentProject].tasks = tasktitle; 
        currentProject.tasks.push(tasktitle);
        console.log(projectId, currentProject, projectDataModule);
        newTaskPop.classList.remove('active');
        newTaskPop.classList.add('inactive');
    });

})();