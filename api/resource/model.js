const db = require('../../data/dbConfig');

async function getResources() {
    const resources = await db('resources')

    return resources   
}

async function createResource(resourceObj) {
    const [resource_id] = await db('resources').insert(resourceObj)

    const resource = await db('resources')
        .where('resource_id', resource_id)
        .first()
    
    return resource
}

module.exports = {
    getResources,
    createResource
}
