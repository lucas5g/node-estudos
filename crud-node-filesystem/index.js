import fs from 'fs'

console.log('[CRUD] Node - File System')

const crud = {
    posts: [],
    create({ id, content }) {
        const data = { id, content }
        crud.posts.push(data)
        fs.writeFileSync('./db.json', JSON.stringify(crud.posts, 0, 2), { encoding: 'utf-8' })
    },
    read() {
        return JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }))
    }
}

crud.create({ id: Date.now(), content: 'Olá pessoas' })

console.log(crud.read())
// Create 

