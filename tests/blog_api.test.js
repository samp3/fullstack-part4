const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

afterAll(() => {
    server.close()
})


test('a valid note can be added ', async () => {
    const newBlog = {
        title: 'async/await yksinkertaistaa asynkronisten funktioiden kutsua',
        author: 'Pekka'
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const response = await api
        .get('/api/blogs')

    const contents = response.body.map(r => r.content)

    expect(response.body.length).toBe(initialNotes.length + 1)
    expect(contents).toContain('async/await yksinkertaistaa asynkronisten funktioiden kutsua')
})
/*const Blog = mongoose.model('Blog', {
    title: String,
    author: String,
    url: String,
    likes: Number
})*/
