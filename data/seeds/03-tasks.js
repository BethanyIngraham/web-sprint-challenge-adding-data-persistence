exports.seed = async function(knex) {
    await knex('tasks').del()
    await knex('tasks').insert([
        {
            task_description: 'Create a react app in your terminal, and run npm start', 
            task_completed: true, 
            project_id: 1
        },
        {
            task_description: 'Make your components and pass them as props', 
            task_completed: true, 
            project_id: 1
        },
        {
            task_description: 'Design a form using state', 
            task_completed: false, 
            project_id: 1
        },
        {
            task_description: 'Learn data types and let/const variables', 
            task_completed: true, 
            project_id: 2
        },
        {
            task_description: 'Write Javascript functions', 
            task_completed: true, 
            project_id: 2
        },
        {
            task_description: 'Practice using arrays and objects', 
            task_completed: true, 
            project_id: 2
        },
        {
            task_description: 'Include the five different types of loops in your functions', 
            task_completed: true, 
            project_id: 2
        },
        {
            task_description: 'Build four tables using Knex for your relational database',  
            task_completed: false, 
            project_id: 3
        },
        {
            task_description: 'Create model functions and endpoints using CRUD operations',  
            task_completed: false, 
            project_id: 3
        },
        {
            task_description: 'Write an asynchronous function using try/catch', 
            task_completed: false, 
            project_id: 4
        },
        {
            task_description: 'Write an asynchronous function using .then/.catch', 
            task_completed: false, 
            project_id: 4
        },
        {
            task_description: 'Explain the differences between these syntaxes', 
            task_completed: false, 
            project_id: 4
        }
    ])
}