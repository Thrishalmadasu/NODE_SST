// const fs = require('fs')

// const data = fs.readFileSync('file.txt');

// console.log(""+data);

// fs.writeFileSync('file.txt',"Hello World",'utf-8',(err)=>{
//     console.log('file modified');
// })

// fs.appendFileSync('file.txt',"Hi world");

// console.log(""+data);

// fs.mkdir("dir",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('dir formed');
// })

// fs.rmdir('./dir',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('dir removed');
// });

// fs.renameSync('dir','newDir');

// const p = '/Users/siddharthtaneja/node-pr/file.txt';
// const path = require("path"); 
// const dirname = path.dirname(p); const extension = path.extname(p);
// console.log(dirname);
// console.log(extension);

// const dir = 'newDir';
// const inputFile = 'file.txt'

// const data = fs.readFileSync(inputFile);

// fs.writeFileSync('./'+dir+'/'+inputFile,data);

const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('ContentType','text/html');
    res.write('<html><head><title>node js class</title></head><body>')
    res.write('<h1>Hello world!</h1>');
    res.write('</body></html>');
    res.end();
})

const port = 3000;
const host = 'localhost';

server.listen(port,host,()=>{
    console.log(`server is listening on http://${host}:${port}`);
})
