var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var sql = require('mssql');
var cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true

}));
app.use(cors());
//var dbURL=process.env.dbURL;

var config = {
    server: process.env.SERVER,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
  };
 /* 
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });  
*/  
  sql.connect(config,function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


var port=process.env.port||5000;
app.listen(port,function()
           {
    console.log('server has been started');	
    }
)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/",(req,res,next)=>{
            console.log("welcome");
            res.send("this is just to check whether the services are working or not");
        
        });
    
//Doctor routes
app.get('/Doctor/:id',(req,res,next)=>{
    	res.header("Access-Control-Allow-Origin","*");
	    var request = new sql.Request();
		
		request.query("select * from DOCS where DOC_UID='"+req.params.id+"';",(err,recordset)=>{
			if(err){
		console.log(error);}
		else
       { res.status(302).send(recordset);
	   }
		
		})
		
});

app.get('/Doctor/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    
    request.query("select * from DOCS ;",(err,recordset)=>{
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
        request.query("delete * from DOCS where DOC_UID='"+req.params.id+"';",(err,recordset)=>{
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
            res.send("Doctor has  been Modified");
            console.log(recordset);
        }
    });
});

app.put('/Doctor/:id', function (req, res) {
	res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    request.query("update DOCS set DNAME='"+req.body.DNAME+"', DESIGNATION ='"+req.body.DESIGNATION+"', EMAIL_ID ='"+req.body.EMAIL_ID+"'  where DOC_ID='"+req.params.id+"';", function (err, recordset){
        if (err){
            console.log(err);}
        else
        {
            res.send("Doctor has  been added");
            console.log(recordset);
        }
    });
});


//Child routes        
app.get('/Child/:id',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");

    var request = new sql.Request();
    
    request.query("select * from CHILD where CHILD_ID='"+req.params.id+"';",(err,recordset)=>{
        if(err){
    console.log(error);}
    else
   { res.status(302).send(recordset);
   }
    
    })
    
});

app.get('/Child/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    
    request.query("select * from CHILD ;",(err,recordset)=>{
        if(err){
    console.log(error);}
    else
   { res.status(302).send(recordset);
   }
    
    })
    
});

app.delete('/Child/:id',  (req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    request.query("delete * from CHILD where CHILD_ID='"+req.params.id+"';",(err,recordset)=>{
    if(err)
    {console.log("no data found");

    }
    else
    {res.send(doctor);
    }

    });
});

app.post('/Child', function (req, res) {
res.header("Access-Control-Allow-Origin","*");
var request = new sql.Request();
request.query("insert into CHILD values('"+req.body.CHILD_ID+"','"+req.body.GENDER+"','"+req.body.TIMING+"','"+req.body.DATEDAY+"','"+req.body.HEIGHT+"','"+req.body.WEIGHT+"');", function (err, recordset){
    if (err){
        console.log(err);}
    else
    {
        res.send("Child has  been added");
        console.log(recordset);
    }
});
});

app.put('/Child/:id', function (req, res) {
res.header("Access-Control-Allow-Origin","*");
var request = new sql.Request();
request.query("update CHILD set WEIGHT='"+req.body.WEIGHT+"', HEIGHT ='"+req.body.HEIGHT+"', TIMEING ='"+req.body.TIMEING+"', DATEDAY='"+req.body.DATEDAY+ "' where CHILD_ID='"+req.params.id+"';", function (err, recordset){
    if (err){
        console.log(err);}
    else
    {
        res.send("Child Details have been modified");
        console.log(recordset);
    }
});
});


//Login routes
app.get('/Login/:id',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");

    var request = new sql.Request();
    
    request.query("select * from LOGIN where EMAIL_ID='"+req.params.id+"';",(err,recordset)=>{
        if(err){
    console.log(err);}
    else
   { res.status(302).send(recordset);
   }
    
    })
    
});

app.get('/Login/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    
    request.query("select * from LOGIN ;",(err,recordset)=>{
        if(err){
    console.log(error);}
    else
   { res.status(302).send(recordset);
   }
    
    })
    
});

app.delete('/Login/:id',  (req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    request.query("delete * from LOGIN where EMAIL_ID='"+req.params.id+"';",(err,recordset)=>{
    if(err)
    {console.log("no data found");

    }
    else
    {res.send(doctor);
    }

    });
});

app.post('/Login', function (req, res) {
res.header("Access-Control-Allow-Origin","*");
var request = new sql.Request();
request.query("insert into LOGIN values('"+req.body.EMAIL_ID+"','"+req.body.PASSWORD+"','"+req.body.ROLE+"');", function (err, recordset){
    if (err){
        console.log(err);}
    else
    {
        res.send("Credentials have been added");
        console.log(recordset);
    }
});
});

app.put('/Login/:id', function (req, res) {
res.header("Access-Control-Allow-Origin","*");
var request = new sql.Request();
request.query("update LOGIN set PASSWORD='"+req.body.PASSWORD+"', ROLE ='"+req.body.ROLE+"' where EMAIL_ID='"+req.params.id+"';", function (err, recordset){
    if (err){
        console.log(err);}
    else
    {
        res.send("Login Details have been modified");
        console.log(recordset);
    }
});
});

//Detail routes
app.get('/Detail/:id',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");

    var request = new sql.Request();
    
    request.query("select * from DETAIL where CHILD_ID='"+req.params.id+"';",(err,recordset)=>{
        if(err){
    console.log(error);}
    else
   { res.status(302).send(recordset);
   }
    
    })
    
});

app.get('/Detail/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    
    request.query("select * from DETAIL ;",(err,recordset)=>{
        if(err){
    console.log(error);}
    else
   { res.status(302).send(recordset);
   }
    
    })
    
});

app.delete('/Detail/:id',  (req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    request.query("delete * from DETAIL where CHILD_ID='"+req.params.id+"';",(err,recordset)=>{
    if(err)
    {console.log("no data found");

    }
    else
    {res.send(doctor);
    }

    });
});

app.post('/Detail', function (req, res) {
res.header("Access-Control-Allow-Origin","*");
var request = new sql.Request();
request.query("insert into DETAIL values('"+req.body.F_NAME+"','"+req.body.M_NAME+"','"+req.body.CHILD_ID+"','"+req.body.DOC_UID+"','"+req.body.EMAIL_ID+"','"+req.body.ADDRESS+"','"+req.body.ADHAR_CARD+"');", function (err, recordset){
    if (err){
        console.log(err);}
    else
    {
        res.send("Details have been added");
        console.log(recordset);
    }
});
});

app.put('/Detail/:id', function (req, res) {
res.header("Access-Control-Allow-Origin","*");
var request = new sql.Request();
request.query("update DETAIL set F_NAME='"+req.body.F_NAME+"', M_NAME ='"+req.body.M_NAME+"', DOC_UID ='"+req.body.DOC_UID+"', EMAIL_ID ='"+req.body.EMAIL_ID+"', ADDRESS ='"+req.body.ADDRESS+"', ADHAR_CARD ='"+req.body.ADHAR_CARD+"' where CHILD_ID='"+req.params.id+"';", function (err, recordset){
    if (err){
        console.log(err);}
    else
    {
        res.send("Detail have been modified");
        console.log(recordset);
    }
});
});

//Vac routes
app.get('/Vac/:id',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");

    var request = new sql.Request();
    
    request.query("select * from VAC where CHILD_ID='"+req.params.id+"';",(err,recordset)=>{
        if(err){
    console.log(error);}
    else
   { res.status(302).send(recordset);
   }
    
    })
    
});

app.get('/Vac/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    
    request.query("select * from VAC ;",(err,recordset)=>{
        if(err){
    console.log(error);}
    else
   { res.status(302).send(recordset);
   }
    
    })
    
});

app.delete('/Vac/:id',  (req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    var request = new sql.Request();
    request.query("delete * from VAC where CHILD_ID='"+req.params.id+"';",(err,recordset)=>{
    if(err)
    {console.log("no data found");

    }
    else
    {res.send(doctor);
    }

    });
});

app.post('/Vac', function (req, res) {
res.header("Access-Control-Allow-Origin","*");
var request = new sql.Request();
request.query("insert into VAC values('"+req.body.VAC_NO+"','"+req.body.CHILD_ID+"');", function (err, recordset){
    if (err){
        console.log(err);}
    else
    {
        res.send("Vacs have been added");
        console.log(recordset);
    }
});
});

app.put('/Vac/:id', function (req, res) {
res.header("Access-Control-Allow-Origin","*");
var request = new sql.Request();
request.query("update VAC set VAC_NO='"+req.body.VAC_NO+"' where CHILD_ID='"+req.params.id+"';", function (err, recordset){
    if (err){
        console.log(err);}
    else
    {
        res.send("Vac have been modified");
        console.log(recordset);
    }
});
});
