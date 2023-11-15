export function initPL() {
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
    popup.appendChild(popupButtonContainer);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    popupButtonContainer.appendChild(submitButton);

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
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

    const newTaskLabel = document.createElement('label');
    newTaskLabel.setAttribute('for', 'taskTitle');
    newTaskFormElement.appendChild(newTaskLabel);

    const newTaskInput = document.createElement('input');
    newTaskInput.type = 'text';
    newTaskInput.id = 'taskTitle';
    newTaskInput.placeholder = 'New Task';
    newTaskFormElement.appendChild(newTaskInput);

    const newTaskSubmitButton = document.createElement('button');
    newTaskSubmitButton.type = 'submit';
    newTaskSubmitButton.textContent = 'Submit';
    newTaskForm.appendChild(newTaskSubmitButton);

    const listBox = document.createElement('div');
    listBox.id = 'listBox';
    main.appendChild(listBox);
}