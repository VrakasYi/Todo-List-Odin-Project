let projectList = ['Default'];
let projectNew =[];

function Item(title, description, dueDate, priority) {
    return {
        title, description, dueDate, priority
    };
}

function newProject() {
    const newListButton = document.getElementById('newList');
    const popup = document.getElementById('popup');
    const projectListDIV = document.getElementById('projectList');
    
    //Popup to add new project
    const form = document.getElementById('newListForm');
    newListButton.addEventListener('click', () => {
        popup.classList.remove('inactive');
        popup.classList.add('active');
        //define new list name
        //append new list name into the projectList-
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let title = document.getElementById('title').value;
            console.log(title);            
            projectList.push(title);
            console.log(projectList);
            popup.classList.remove('active');
            popup.classList.add('inactive')
            newProject();
        })
    })
    

    //projectList.array.forEach(project => {
    projectList.forEach(project => {
        if(!projectNew.includes(project)){
            // create new project html
            let projectEntry = document.createElement('button');
            projectEntry.textContent = project;
            projectListDIV.appendChild(projectEntry);
            projectNew.push(project);
        }
    });
}
newProject();