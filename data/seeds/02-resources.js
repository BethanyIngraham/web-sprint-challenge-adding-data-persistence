exports.seed = async function(knex) {
    await knex('resources').del()
    await knex('resources').insert([
        {
            resource_name: 'VS Code', 
            resource_description: 'An open source code editor'
        },
        {
            resource_name: 'SQLite Studio', 
            resource_description: 'For creating and editing databases'
        },
        {
            resource_name: 'Postman', 
            resource_description: 'Allows user to design, test and debug APIs'
        }
    ])
}