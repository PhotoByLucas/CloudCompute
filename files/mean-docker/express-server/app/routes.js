var Todo = require('./models/todo');
var Client = require('./models/client');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};
module.exports = function (app) {
    // 测试
    app.get('/todos', function (req, res) {
        getTodos(res)
    });

    // api ---------------------------------------------------------------------
    // get all todos
    //获取所有client信息
    app.get('/client', (req, res) =>{
        Client.find({}).then(clients=>{
            res.json(clients);
        })
        .catch(err=>{
            console.log('err');
            res.json(err);
        })
        // use mongoose to get all todos in the database
        // getTodos(res);
    });
    //获取单个client信息
    app.get('/client/private',(req,res)=>{
        Client.find({clientID:req.query.id}).then(client=>{
            res.json(client);
        }).catch(err=>{
            res.json(err);
        })
    });
    // create todo and send back all todos after creation
    //增加新客户
    app.post('/client', (req, res) => {
        
        // create a todo, information comes from AJAX request from Angular
        // console.log(req.body)
        // console.log(req.params)
        // console.log(req.query)

        Client.create(req.query,(err,hero)=>{
        if(err){
            res.send('err1');
        }else{
            Client.find(function (err, client) {

                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err) {
                    res.send('err2');
                }
        
                res.json(client); // return all todos in JSON format
            });
        }
        });    
    });
    //更新个人信息
    app.put("/client/modify",(req,res)=>{
        let tempClient={}
        // tempClient为所查询的id对应的人的数据
        Client.find({clientID:req.query.id}).then(client=>{
            // res.json(client);
            tempClient=client;
        }).catch(err=>{
            console.log('err')
            res.json(err);
        })

        Client.update(
            {clientID:req.query.id},
            {
                $set:{
                    name:req.query.name,

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
    // application原本的agular输出前端模板 -------------------------------------------------------------
    // app.get('*', function (req, res) {
    //     res.sendFile(__dirname + '/public/dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    // });


    // record


    // account
};
