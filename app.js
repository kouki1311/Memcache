let express=require("express");
let app=express();

app.set('view engin','ejs');

let port=pro.env.PORT||3000;
app.listen(port);
console.log("Listening on port"+port);

let calulatePraime=(n)=>{
    let prime=1;
    for(let i=n;i>1;i--)
    {
        let is_prime=true;
        for(let j=2;j<i;j++)
        {
            if(i%j==0)
            {
            is_prime=false;
            break;
        }
    }
    if(is_prime)
    {
        prime=i;
        break;
    }
    }
    return prime;
}

app.get('/'=(req,res)=>{
if(req.query.n)
{
    let prime=calulatePraime(req.query.n);
    res.render('index',{n:req.query.n,prime:prime});
}
else{
    res.render('index',{});
}
});