exports.seed = async function(knex) {
    await knex('projects').del()
    await knex('projects').insert([
        {
            project_name: 'React Application', 
            project_description: 'Learning React', 
            project_completed: false
        },
        {
            project_name: 'Vanilla Javascript', 
            project_description: 'Basic JS Tutorial', 
            project_completed: true
        },
        {
            project_name: 'Database Maintenance', 
            project_description: 'Making tables and endpoints', 
            project_completed: false
        },
        {
            project_name: 'Async Promises', 
            project_description: 'Try/Catch or .Then/.Catch', 
            project_completed: false
        }
    ])
}