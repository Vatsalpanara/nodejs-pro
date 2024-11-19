const http = Require("http");
const port = 6000;

const portHander=(req,res)=>{
    res.write("<h1>Welcome to My Thoery</h1>");
    res.end();
};

const server=http.createServer(portHander);
server.listen(port,(err)=>{
    err?console.log(err):console.log("Thoery Started on port") +port; 
});
