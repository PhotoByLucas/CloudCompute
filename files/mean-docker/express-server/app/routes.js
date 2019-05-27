var Todo = require('./models/todo');
var Client = require('./models/client');

// function getTodos(res) {
//     Todo.find(function (err, todos) {

//         // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//         if (err) {
//             res.send(err);
//         }

//         res.json(todos); // return all todos in JSON format
//     });
// };
//module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    //获取所有client信息
    app.get('/client', (req, res) =>{
        Client.find({}).sort({update_at:-1}).then(clients=>{
            res.json(client);
        })
        .catch(err=>{
            console.log(2);
            res.json(err);
        })
        // use mongoose to get all todos in the database
        // getTodos(res);
    });
    //获取单个client信息
    app.get('/client/:id',(req,res)=>{
        Client.findById(res.params.id).then(client=>{
            res.json(client);
        }).catch(err=>{
            res.json(err);
        })
    });
    // create todo and send back all todos after creation
    //增加新客户
    app.post('/client', (req, res)=> {
        
        // create a todo, information comes from AJAX request from Angular
        Client.create(req.body,(err,hero)=>{
        if(err){
            res.json(err);
        }else{
            res.json(client);
        }
        });    
    });
    //更新个人信息
    app.put("/client/:id",(req,res)=>{
        Client.UpdatePersonInformation(
            {_id:req.params.id},
            {
                $set:{
                    name:req.body.name,
                    birthdate:req.body.birthdate,
                    address:req.body.address,
                    occupation:req.body.occupation
                }
            },
            { 
                new:true
            }
        ).then(client=>res.json(client))
        .catch(err=>res.json(err));
    });
    //修改密码
    app.put("/client/:id",(req,res)=>{
        Client.UpdatePassword(
            {_id:req.params.id},
            {
                $set:{
                    password:req.body.password
                }
            },
            {
                new:true
            }).then(client=>res.json(client))
            .catch(err=>res.json(err));
    });

    // 删除客户信息
    app.delete('/client/:id', (req, res)=> {
        Client.remove({
            _id: req.params.todo_id
        }).then(client=>res.send('${client.clientID}删除成功'))
        .catch(err=>res.json(err));
    });
   module.exports=app;
    // application -------------------------------------------------------------
    // app.get('*', function (req, res) {
    //     res.sendFile(__dirname + '/public/dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    // });
//};
