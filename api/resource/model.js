const db = require('../../data/dbConfig');

async function getResources() {
    const resources = await db('resources as r')

    return resources   
}

function createResource() {
    return 'creating resources'
}

module.exports = {
    getResources,
    createResource
}
