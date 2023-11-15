// projectDataModule.js
const projectDataModule = (() => {
    const projectData = [
        {
            projectName: 'Default',
            tasks: [
                {
                    taskTitle: 'Code'
                },
            ]
        }
    ];

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
    

    //display the list of projects
    const displayProjects = () => {
        projectListDIV.innerHTML = '';
        projectDataModule.projectData.forEach(project => {
            const projectEntry = document.createElement('button');
            projectEntry.textContent = project.projectName;
            projectEntry.id = project.projectName;
            projectListDIV.appendChild(projectEntry);
        });
    };
    displayProjects();

    newListButton.addEventListener('click', () => {
        popup.classList.remove('inactive');
        popup.classList.add('active');
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let title = document.getElementById('title').value;
        projectDataModule.addProject(title);
        displayProjects();
        popup.classList.remove('active');
        popup.classList.add('inactive');
    });

    const displaytasks = () => {
        listBox.innerHTML = '';//clear the div of text
        //display the project title
        const listEntry = document.createElement('div');
        listEntry.textContent = `Project: ` + projectId;
        listEntry.id = projectId;
        listEntry.classList.add('listEntry')
        listBox.appendChild(listEntry);
        const taskHeader = document.createElement('div');
        taskHeader.textContent = 'Tasks:'
        taskHeader.classList.add('listEntry')
        listBox.appendChild(taskHeader)
    
        //display the list of tasks
        //get the current object
        const currentProject = projectDataModule.getProject(projectId);
        //create a container
        const tasklist = document.createElement('div');
        tasklist.id = 'tasklist'
        tasklist.textContent = 'tasklist';
        listBox.appendChild(tasklist);
        currentProject.tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('taskDiv')
            taskDiv.textContent = task.taskTitle;
            tasklist.appendChild(taskDiv);
        });
        
    
        //display the add new task button
        const addNewTaskButton = document.createElement('button');
        addNewTaskButton.textContent = 'Add new task';
        addNewTaskButton.id = 'newTaskButton'
        listEntry.appendChild(addNewTaskButton);    
    }

    projectListDIV.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            projectId = event.target.id;
            displaytasks(); 
        };
    });
    
    const getProjectId = () => projectId;


    return{
        getProjectId,
        displayProjects
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

    function displayTasks(tasklist){
        currentProject.tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('taskDiv')
            taskDiv.textContent = task.taskTitle;
            tasklist.appendChild(taskDiv);
        });
    }
    
    //newTask popup
    listBox.addEventListener('click', (event) => {
        if (event.target.id === 'newTaskButton') {
            console.log('you need a pop up');
            newTaskPop.classList.remove('inactive');
            newTaskPop.classList.add('active');
        };
    });
    
    //Form to add a new task
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        //reference the div id of the selected project 
        let projectId = projectListModule.getProjectId();
        console.log(projectId);
        let tasktitleValue = document.getElementById('taskTitle').value;
        let tasktitle = {
            taskTitle: tasktitleValue
        }
        
        currentProject = projectDataModule.getProject(projectId);
        currentProject.tasks.push(tasktitle);        
        //reference the task list container
        const tasklist = document.getElementById('tasklist')
        listBox.appendChild(tasklist);
        tasklist.innerHTML = '';    
        displayTasks(tasklist);
        //close the popup
        newTaskPop.classList.remove('active');
        newTaskPop.classList.add('inactive');
    });
})();