
// 1)create json server-require
const jsonserver= require('json-server')
// 2)create json server -create
const mediaplayerserver =jsonserver.create()
// 3)create path for the json file (data) -router
const router =jsonserver.router("db.json")


// 4)create middleware to convet or parse json -defaults()
const middleware =jsonserver.defaults()
// 5)allow server to use router and middleware
mediaplayerserver.use(middleware)
mediaplayerserver.use(router)
// 6 set up port for the server to run
PORT =3000 || process.env.PORT
// 7 listen to the request
mediaplayerserver.listen(PORT,()=>{
    console.log(`server running sucessfully at port number ${PORT}`);
})