//ListBoxModule.js
// const ListBoxModule = (() => {
//     //reference the list of to do container
//     const listBox = document.getElementById('listBox');
//     //reference the new task pop up form div
//     const newTaskPop = document.getElementById('newTaskPop');
//     //reference the new task pop up form
//     const taskForm = document.getElementById('newTaskForm');

//     let currentProject;
//     function displayTasks(tasklist){
//         currentProject.tasks.forEach(task => {
//             const taskDiv = document.createElement('div');
//             taskDiv.classList.add('taskDiv')
//             taskDiv.textContent = task.taskTitle;
//             tasklist.appendChild(taskDiv);
//             //listBox.appendChild(tasklist);
//         });
//     }
    
//     //newTask popup
//     listBox.addEventListener('click', (event) => {
//         if (event.target.id === 'newTaskButton') {
//             console.log('you need a pop up');
//             newTaskPop.classList.remove('inactive');
//             newTaskPop.classList.add('active');
//         };
//     });
    
//     taskForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         //reference the div id of the selected project 
//         let projectId = projectListModule.getProjectId();
//         let tasktitleValue = document.getElementById('taskTitle').value;
//         let tasktitle = {
//             taskTitle: tasktitleValue
//         }
        
//         currentProject = projectDataModule.getProject(projectId);
//         // projectDataModule.projectData[currentProject].tasks = tasktitle; 
//         currentProject.tasks.push(tasktitle);
        
//         //reference the task list container
//         const tasklist = document.getElementById('tasklist')
//         listBox.appendChild(tasklist);
//         tasklist.innerHTML = '';
//         displayTasks(tasklist);

//         newTaskPop.classList.remove('active');
//         newTaskPop.classList.add('inactive');
//     });
// })();
// export default ListBoxModule;
export function ListBoxModule() {
    
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
            //listBox.appendChild(tasklist);
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
    
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        //reference the div id of the selected project 
        let projectId = projectListModule.getProjectId();
        let tasktitleValue = document.getElementById('taskTitle').value;
        let tasktitle = {
            taskTitle: tasktitleValue
        }
        
        currentProject = projectDataModule.getProject(projectId);
        // projectDataModule.projectData[currentProject].tasks = tasktitle; 
        currentProject.tasks.push(tasktitle);
        
        //reference the task list container
        const tasklist = document.getElementById('tasklist')
        listBox.appendChild(tasklist);
        tasklist.innerHTML = '';
        displayTasks(tasklist);

        newTaskPop.classList.remove('active');
        newTaskPop.classList.add('inactive');
    });
};