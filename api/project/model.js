const db = require('../../data/dbConfig');

async function getProjects() {
   
    const projects = await db('projects as p');
    projects.forEach(row => {
        row.project_completed = 
        row.project_completed === 1 ?
         true : false
    })
    
    return projects
}

async function createProject(projectObj) {
   
    const [project_id] = await db('projects').insert(projectObj)

    const project = await db('projects')
        .where('project_id', project_id)
        .first()
    
    const createdProject = {
        ...project,
        project_completed: project.project_completed ? true : false
    }

    return createdProject
}

module.exports = {
    getProjects,
    createProject
}

