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
            const projectId = event.target.id;
            listBox.innerHTML = '';
    
            const listEntry = document.createElement('div');
            listEntry.textContent = projectId;
    
            const addNewTaskButton = document.createElement('button');
            addNewTaskButton.textContent = 'Add new task';
            addNewTaskButton.id = 'newTaskButton'
    
            listEntry.appendChild(addNewTaskButton);
            listBox.appendChild(listEntry);
    
            const findObject = projectDataModule.getProject(projectId);
        };
    });
})();

//ListBoxModule.js
const ListBoxModule = (() => {
    //reference the list of to do container
    const listBox = document.getElementById('listBox');
    //reference the new task pop up form
    const newTaskPop = document.getElementById('newTaskPop');

    listBox.addEventListener('click', (event) => {
        if (event.target.id === 'newTaskButton') {
            console.log('you need a pop up');
            newTaskPop.classList.remove('inactive')
            newTaskPop.classList.add('active')
        };
    });

})();