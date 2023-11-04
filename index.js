const projectListDIV = document.getElementById('projectList');
const projetData = [
    {
        projectName: 'Default',
        tasks: [
            {
                title: 'Code'
            },
        ]
    }
]
let projectList = ['Default']; //list of project names
let projectNew =[]; //list to compare exisitng project names
let itemList = {}; //

const project = {
    projectName: '',
    tasks: []
};

function Item(title, description, dueDate, priority) {
    return {
        title, description, dueDate, priority
    };
}

function newProject() {
    const newListButton = document.getElementById('newList');
    const popup = document.getElementById('popup');
    
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
            itemList[title] = [];
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
            projectEntry.id = project;
            projectListDIV.appendChild(projectEntry);
            projectNew.push(project);
        }
    });
}
newProject();


//reference the list of to do container
const listBox = document.getElementById('listBox');

function populateTheListBox() {
    projectListDIV.addEventListener('click', (event) => {
        let projectId = event.target.id;
        listBox.innerHTML = ''; //clear the list box
        
        let listEntry = document.createElement('div');
        listEntry.textContent = itemList[projectId];   
    })
}

function addNewItem() {
}