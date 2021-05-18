
const express=require('express');//expressモジュールを読み込み
const multer=require('multer');//multerモジュールを読み込む
//const uuidv4=require('uuid/v4');//uuidモジュールを読み込む

const app=express();//expressアプリを生成する

app.use(multer().none());//multerでブラウザ送信されたデータを解釈する
app.use(express.static('web'));//webフォルダの中身を公開する

//TODOリストデータ
const todoList=[];

//http:localhsot:300/api/v1/listにアクセスしてきたときに
//TODOリストを返す
app.get('/api/v1/list',(req ,res)=>{
    res.json(todoList);
});

//TODOリストに項目を追加する
app.post('/api/v1/add',(req,res)=>{
    //クライアントから送信データを取得する
    const todoData=req.body;
    const todoTitle=todoData.title;

    
    //ユニークIDを生成する
//const id=uuidv4();

//TODO項目を作る
    const todoItem={
 
        title:todoTitle,
        done:false
    };
    //TODOリストに項目を追加する
    todoList.push(todoItem);

    //コンソールに出力する
    console.log('Add:'+JSON.stringify(todoItem));

    //追加した項目をクライアントに返す
    res.json(todoItem);

});
app.delete('/api/v1/item/:id',(req,res)=>{
    const index=todoList.findIndex((item)=>item.id===req.params.id);

    //項目が見つかった場合
    if(index>=0)
    {
        const deleted=todoList.splice(index,1);
        console.log('Delete:'+json.stringify(deleted[0]));
    }
    //ステータスコード200
    res.sendStatus(200);
})


// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));
