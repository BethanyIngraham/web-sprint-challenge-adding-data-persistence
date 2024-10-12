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

async function createTask(taskObj) {
    const [task_id] = await db('tasks').insert(taskObj)

    const task = await db('tasks')
        .where('task_id', task_id)
        .first()
    
    const createdTask = {
        ...task,
        task_completed: task.task_completed ? true : false
    }

    return createdTask
}

module.exports = {
    getTasks,
    createTask
}
