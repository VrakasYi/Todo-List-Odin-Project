import { init } from './init.js';
init();

// projectDataModule.js
const projectDataModule = (() => {

    let projectData = [];
    if (!localStorage.getItem('localData')) {
        projectData = [
            {
                projectName: 'Default',
                tasks: [
                    {
                        taskTitle: 'Code the to do project',
                        highPrio: true,
                        date: '2023-11-31',
                        //done: 'false'
                    },
                ]
            }
        ];
    } else {
        let storedData = JSON.parse(localStorage.getItem('localData'));
        projectData.push(...storedData);
    };


    const addProject = (title) => {
        const newProject = {
            projectName: title,
            tasks: []
        };
        projectData.push(newProject);
        //update the local storage
        localStorage.setItem('localData', JSON.stringify(projectData));
    }

    const getProject = (projectId) => {
        return projectData.find(project => project.projectName === projectId);
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

    //NEW PROJECT BUTTON
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
        //create a container, name it tasklist and insert it into listbox
        const tasklist = document.createElement('div');
        tasklist.id = 'tasklist'
        listBox.appendChild(tasklist);

        //display the current tasks
        DPTModule.displayTasks1(currentProject, tasklist);
         
        //display the add new task button
        const addNewTaskButton = document.createElement('button');
        addNewTaskButton.textContent = 'Add new task';
        addNewTaskButton.id = 'newTaskButton'
        listEntry.appendChild(addNewTaskButton);    
    }

    projectListDIV.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {            
            //setProjectId(event.target.id);
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
    
    //newTask popup
    listBox.addEventListener('click', (event) => {
        if (event.target.id === 'newTaskButton') {
            console.log('you need a pop up');
            newTaskPop.classList.remove('inactive');
            newTaskPop.classList.add('active');
        };
    });
    
    //add new task form
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        //reference the div id of the selected project 
        const projectId = projectListModule.getProjectId();
        const tasktitleValue = document.getElementById('taskTitle').value;
        const checkbox = document.getElementById('prio');
        let prio;
        if (checkbox.checked) {
            prio = true;
        } else {
            prio = false;
        };
        const date = document.getElementById('date').value;
        const tasktitle = {
            taskTitle: tasktitleValue,
            highPrio: prio,
            date: date
        }
        
        currentProject = projectDataModule.getProject(projectId);
        // projectDataModule.projectData[currentProject].tasks = tasktitle; 
        currentProject.tasks.push(tasktitle);

        //update the local storage
        localStorage.setItem('localData', JSON.stringify(projectDataModule.projectData));

        //reference the task list container
        const tasklist = document.getElementById('tasklist')
        listBox.appendChild(tasklist);
        tasklist.innerHTML = '';
        DPTModule.displayTasks1(currentProject, tasklist);
        //displayTasks(tasklist);

        newTaskPop.classList.remove('active');
        newTaskPop.classList.add('inactive');
    });
})();

//DisplayTasksModule
const DPTModule = (() => {
    function displayTasks1(currentProject, tasklist){
        currentProject.tasks.forEach((task, index) => {
            //create containers for the properties of each task
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('taskDiv')
            const tTitle = document.createElement('div');
            tTitle.textContent = task.taskTitle;
            taskDiv.appendChild(tTitle);
            const tPrio = document.createElement('div');
            if (task.highPrio === true) {
                tPrio.textContent = 'High prio'
            } else {
                tPrio.textContent = 'Low prio'
            }
            taskDiv.appendChild(tPrio);
            const tdate = document.createElement('div');
            tdate.textContent = 'Due date: ' + task.date;
            taskDiv.appendChild(tdate);

            const delButton = document.createElement('button');
            delButton.textContent = 'Delete'
            
            //add delete functionality
            delButton.addEventListener('click', () => {
                //tasklist.removeChild(taskDiv);
                taskDiv.remove();
                currentProject.tasks.splice(index, 1);      
                //update the local storage
                localStorage.setItem('localData', JSON.stringify(projectDataModule.projectData));          
            });
            
            taskDiv.appendChild(delButton);
            tasklist.appendChild(taskDiv);    
        });
    }
    
    return {
        displayTasks1
    };
})();