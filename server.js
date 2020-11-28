var express = require("express")
var app = express()
app.use(express.json());
const PORT = 3000;
var userTab=[
]
var id=0
app.post('/addUser',function(req,res){
    let userExists=false
    for(let i=0;i<userTab.length;i++){
        if(req.body.user.username==userTab[i].username){
            userExists=true
        }
    }
    if(userExists){
        res.send({succeeded:false})
    }
    else{
        userTab.push({id:id,username:req.body.user.username,password:req.body.user.password,registerDate:req.body.user.registerDate})
        // console.log(userTab)
        res.send({succeeded:true})
        id++
    }
})
app.post('/deleteUser',function(req,res){
    console.log(req.body.user.id)
    for(let i=0;i<userTab.length;i++){
        if(userTab[i].id==req.body.user.id){
            userTab.splice(i,1)
        }
    }
    console.log(userTab)
    res.send(userTab)
})
app.post('/getUsersData',function(req,res){
    res.send(userTab)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})