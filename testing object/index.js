const projectListDIV = document.getElementById('projectList');
const projectData = [
    // {
    //     projectName: 'Default',
    //     tasks: [
    //         {
    //             taskTitle: 'Code'
    //         },
    //     ]
    // }
]


//reference the list of to do container
const listBox = document.getElementById('listBox');


function populateTheListBox() {
    projectListDIV.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            let projectId = event.target.id;
            console.log(projectId);///////////////
            listBox.innerHTML = ''; //clear the list box
            
            //create the div container
            let listEntry = document.createElement('div');
            listBox.appendChild(listEntry);
            listEntry.textContent = projectId

            //create add new task button
            let addNewTaskButton = document.createElement('button');
            addNewTaskButton.textContent = 'Add new task';
            listEntry.appendChild(addNewTaskButton);

            console.log(listEntry);
            // let findObject = projectData.find(project => project.projectName === 'Default');
            let findObject = projectData.find(project => project.projectName === projectId);
            console.log(findObject);
            console.log(projectId);
            
            //listEntry.textContent = findObject.tasks[0].taskTitle;
            console.log(listEntry.textContent);
        }
    })
}
populateTheListBox();


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
    })
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let title = document.getElementById('title').value;
        //console.log(title);  

        //itemList[title] = [];
        let newProjectTitle = {
            projectName: title,
            tasks: [
                {
                    taskTitle: ''
                }
            ]
        }
        //projectList.push(title);
        projectData.push(newProjectTitle);
        //console.log(projectList);

        let projectEntry = document.createElement('button');
        console.log(projectEntry);///////////////////
        projectEntry.textContent = title;
        projectEntry.id = title;
        projectListDIV.appendChild(projectEntry);

        popup.classList.remove('active');
        popup.classList.add('inactive')
        //newProject();
    })
}
newProject();