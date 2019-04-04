var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var sql = require('mysql');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true

}));

//var dbURL=process.env.dbURL;

var con = sql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });  
  /*
  sql.connect(dbURL,function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

*/
var port=process.env.port||5000;
app.listen(port,function()
           {
    console.log('server has been started');	
    }
)

app.get("/",(req,res,next)=>{
            console.log("welcome");
            res.send("this is just to check whether the services are working or not");
        
        });
        
app.get('/Doctor/:id',(req,res,next)=>{
    	res.header("Access-Control-Allow-Origin","*");

	    var request = new sql.Request();
		
		request.query("select * from DOCS where DOC_UID="+req.params.id+";",(err,recordset)=>{
			if(err){
		console.log(error);}
		else
       { res.status(302).send(recordset);
	   }
		
		})
		
});


app.delete('/Doctor/:id',  (req,res,next)=>{
        res.header("Access-Control-Allow-Origin","*");
        var request = new sql.Request();
        request.query("delete * from DOCS where DOC_UID="+req.params.id+";",(err,recordset)=>{
        if(err)
        {console.log("no data found");

        }
        else
        {res.send(doctor);
        }

        });
});

app.post('/Doctor', function (req, res) {
	res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    request.query("insert into DOCS values('"+req.body.DOC_UID+"','"+req.body.DNAME+"','"+req.body.DESIGNATION+"','"+req.body.EMAIL_ID+"');", function (err, recordset){
        if (err){
            console.log(err);}
        else
        {
            res.send("Doctor has  been added");
            console.log(recordset);
        }
    });
});

app.put('/Doctor/:id', function (req, res) {
	res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    request.query("update DOCS set DNAME='"+req.body.DNAME+"', DESIGNATION ='"+req.body.DESIGNATION+"', EMAIL_ID ='"+req.body.EMAIL_ID+"'  where DOC_ID='"+req.params.id+";", function (err, recordset){
        if (err){
            console.log(err);}
        else
        {
            res.send("Doctor has  been added");
            console.log(recordset);
        }
    });
});