### 部署服务器 http://148.100.87.15:8080
### api访问示例 http://148.100.87.15:8080/api/todos
---
## 开发说明
### 文件目录结构
  + 前端
    + meandocker中的vue-client文件 基于vue构建
    + 构建后打包的静态文件模板在express-server中的dist
    + 计划引入 axios element.ui
    + 通过接口直接请求后端输出
  + 后端
    + 启动后端文件 在express-server下运行 **node server.js**
    + express-server文件
      + server.js
        + 后端文件入口 定义express实例
        + 引入后端依赖文件
      + express-server/app/routes.js 
        + 为数据的接口输出,包括
          + post 增加 
          + get  获取
          + delete 删除
          + patch 更新  
        + 请求接口格式
          + 第一个参数为接口请求的地址
          + 第二个参数为接口请求的回调函数
          ~~~
            app.get('/api/todos', function (req, res) {
                getTodos(res);
            })
          ~~~
          
  + 数据库
    + express-server/app/models
      + 每一个表为一个model,统一命名为**xx model.js**
    + express-server/app/routes.js
      + 在每建完一个表后在该文件最顶行增加
      ~~~
        var Todo = require('./models/todo')
      ~~~
  + docker本地环境配置
    + 安装docker(网上教程)
    + 安装docker composer
    + docker中安装mongo镜像
      + sudo docker pull mongo 拉取远程镜像
      + sudo docker run --name mongo -d mongo 在后台运行name为docker
      + sudo docker start mongo 运行镜像 

