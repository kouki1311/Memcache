const express=require('express');
const multer=require('multer');//multerモジュールを読み込み
const uuidv4=require('uuid/v4');

const app=express();
app.use(multer().none());
//webフォルダの中身を公開する
app.use(express.static('web1'));

//ポート
let port =3000;

//ルートにアクセスしたときにhelloを送信。
app.get('/api/v1/list',(req,res)=>
{
//クライントに送るjsonデータ
const todoList=[
    {title:'JavaScriptを勉強する',done:true},
    {title:'Node.jsを勉強する',done:false},
    {title:'Web APIを作る',done:false}
];


    //res.send('hello');

    //JSONを送信
    res.json(todoList);
});


app.listen(port,()=>console.log('Listening on Port 3000'));