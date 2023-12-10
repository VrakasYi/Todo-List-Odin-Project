import './style.css';
export function init() {

    const containerDiv = document.getElementById('content')

    const header = document.createElement('div');
    header.id = 'header';
    header.textContent = 'DO THE THING';
    containerDiv.appendChild(header);
    const main = document.createElement('div');
    main.id = 'main';
    containerDiv.appendChild(main);
    const left = document.createElement('div');
    left.id = 'left';
    main.appendChild(left);
    const projectList = document.createElement('div');
    projectList.id = 'projectList';
    left.appendChild(projectList);
    const newList = document.createElement('button');
    newList.id = 'newList';
    newList.textContent = 'New project';
    left.appendChild(newList);
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.classList.add('inactive')
    main.appendChild(popup);

    //add the popup children
    const h3popup = document.createElement('h3');
    h3popup.textContent = 'Add a new project';
    popup.appendChild(h3popup);
    const newListForm = document.createElement('form');
    newListForm.id = 'newListForm';
    popup.appendChild(newListForm);

    // Create form elements
    const formElement = document.createElement('div');
    formElement.classList.add('form-element');
    newListForm.appendChild(formElement);

    const label = document.createElement('label'); 
    label.setAttribute('for', 'title');
    formElement.appendChild(label);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'title';
    input.placeholder = 'New project';
    formElement.appendChild(input);

    const popupButtonContainer = document.createElement('div');
    popupButtonContainer.id = 'popupButtCont';
    newListForm.appendChild(popupButtonContainer);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    popupButtonContainer.appendChild(submitButton);

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.id = 'cancelNewProjectButton'
    popupButtonContainer.appendChild(cancelButton);

    const newTaskPop = document.createElement('div');
    newTaskPop.id = 'newTaskPop';
    newTaskPop.classList.add('inactive');
    main.appendChild(newTaskPop);

    const newTaskForm = document.createElement('form');
    newTaskForm.id = 'newTaskForm';
    newTaskPop.appendChild(newTaskForm);

    // Create form elements for the new task popup
    const newTaskFormElement = document.createElement('div');
    newTaskFormElement.classList.add('form-element');
    newTaskForm.appendChild(newTaskFormElement);

    const taksH5 = document.createElement('h5');
    taksH5.textContent = 'Title';
    newTaskFormElement.appendChild(taksH5);
    const newTaskLabel = document.createElement('label');
    //newTaskLabel.textContent = 'Title'
    newTaskLabel.setAttribute('for', 'taskTitle');
    newTaskFormElement.appendChild(newTaskLabel);

    const newTaskInput = document.createElement('input');
    newTaskInput.type = 'text';
    newTaskInput.id = 'taskTitle';
    //newTaskInput.placeholder = 'New Task';
    newTaskFormElement.appendChild(newTaskInput);

    const prioH5 = document.createElement('h5');
    prioH5.textContent = 'High priority';
    prioH5.id = 'prioH5'
    newTaskFormElement.appendChild(prioH5);
    const prioInput = document.createElement('input');
    prioInput.type = 'checkbox';
    prioInput.id = 'prio';
    //prioInput.value = 'no';
    // const prioH5 = document.createElement('label')
    // prioH5.textContent = 'High prio';
    // newTaskFormElement.appendChild(prioH5);
    newTaskFormElement.appendChild(prioInput);

    const dateH5 = document.createElement('h5');
    dateH5.textContent = 'Date';
    newTaskFormElement.appendChild(dateH5);
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'date';
    dateInput.name = 'date';
    newTaskFormElement.appendChild(dateInput);
    
    const newTaskButtonContainer = document.createElement('div');
    newTaskButtonContainer.id = 'newTaskButtonContainer';
    newTaskForm.appendChild(newTaskButtonContainer);

    const newTaskSubmitButton = document.createElement('button');
    newTaskSubmitButton.type = 'submit';
    newTaskSubmitButton.textContent = 'Submit';
    newTaskButtonContainer.appendChild(newTaskSubmitButton);

    const newTaskCancel = document.createElement('button');
    newTaskCancel.type = "button"; //<---NOTE
    newTaskCancel.textContent = 'Cancel'
    newTaskCancel.id = 'newTaskCancel';
    newTaskButtonContainer.appendChild(newTaskCancel);

    const listBox = document.createElement('div');
    listBox.id = 'listBox';
    main.appendChild(listBox);
}