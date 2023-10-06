var mySql=require('mysql');

const con=mySql.createConnection({
    host:"localhost",
    userName:"MUVUNYI",
    user:'root',
    password:'',

})

// con.connect((error)=>{
//     if(error) throw error;
//     console.log('db connected');
// })

con.connect(function(error){
    if(error) throw error;
    console.log('connected');
    con.query('CREATE DATABASE myFirstDb',function(error,result){
        if(error) throw error;
        console.log('db created');
    });
})