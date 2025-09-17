// creating json server

// 1)import json server library
const jsonServer = require ('json-server')
// 2)create json server using create() method
const mediaPlayerServer = jsonServer.create();
// 3)connect jsonserver with db json file
const router = jsonServer.router('db.json')
//4) create a middleware that process request and response

const middleware = jsonServer.defaults()

// 5)use middleware
mediaPlayerServer.use(middleware)
// 6)use router

mediaPlayerServer.use(router)

const PORT = 5000;



mediaPlayerServer.listen(PORT,()=>{
    console.log("media player server is running in PORT:", PORT);
    
})