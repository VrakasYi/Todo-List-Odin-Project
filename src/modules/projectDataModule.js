// projectDataModule.js
// const projectDataModule = (() => {
//     const projectData = [
//         {
//             projectName: 'Default',
//             tasks: [
//                 {
//                     taskTitle: 'Code the to do project',
//                     priority: 'High',
//                     date: ''
//                 },
//             ]
//         }
//     ];

//     const addProject = (title) => {
//         const newProject = {
//             projectName: title,
//             tasks: []
//         };
//         projectData.push(newProject);
//     }

//     const getProject = (title) => {
//         return projectData.find(project => project.projectName === title);
//     }


//     return {
//         addProject,
//         getProject,
//         projectData        
//     };
// })();
// export default projectDataModule;
export function projectDataModule () {
    const projectData = [
        {
            projectName: 'Default',
            tasks: [
                {
                    taskTitle: 'Code the to do project',
                    priority: 'High',
                    date: ''
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
}