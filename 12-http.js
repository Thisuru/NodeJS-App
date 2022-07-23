const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to the home page')
    } else if(req.url === '/about'){
        res.end('About Page')
    } else {
        res.end(`
            <h1> OOPS !!! </h1>
            <p>You have requested for any wrong address </p>
            <a href = "/">Get back to HOME Page</a>
        `)

    }
})

server.listen(5000)