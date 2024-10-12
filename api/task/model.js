const db = require('../../data/dbConfig');

async function getTasks() {
    const tasks = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select(
            'task_id', 'task_description',
            'task_notes', 'task_completed',
            'project_name', 'project_description'
        )

    tasks.forEach(row => {
        row.task_completed = 
        row.task_completed === 1 ? 
         true : false
    })

    return tasks
}

function createTask() {
    
}

module.exports = {
    getTasks,
    createTask
}
