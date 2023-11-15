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
        //tasklist.textContent = 'tasklist';
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
export default projectListModule;