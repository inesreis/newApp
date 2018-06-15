//http://localhost:3000/'your page name'

const express= require("express");
const hbs = require('hbs');

const app= express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname+'/public'));

app.get('/',(request,response)=>{
    //response.send('<h1>Hello from ines</h1>');
 
    response.render('welcome.hbs',{
        title:"My Site",
        text:"blablabla"
    });
});

app.get('/about',(request,response)=>{
    /*response.send({
        name:'ines',
        likes:['nutela','dormir']
    });*/

    response.render('welcome.hbs',{
        title:"About",
        text:"Who cares??"
    });
});

app.get('/carochao',(request,response)=>{
   /* 
    var html=`<body><h1>${date}</h1></body>`;
    response.send(html);
*/

var date= new Date().toString();
    response.render('carochao.hbs',{
        title:"O Carochao",
        subtitle:"e a Carochinha",
        text:"Vivem aqui, coitados ",
        date:`${date}`
    });
});




app.listen(3000);

