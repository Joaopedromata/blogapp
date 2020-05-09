if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: 'mongodb+srv://joaopedromata:<password>@cluster0-4wzhi.mongodb.net/test?retryWrites=true&w=majority'}
}else{
    module.exports = {mongoURI: 'mongodb://localhost/blogapp'}
}
