const express = require('express')
const app= express()
const mysql = require('mysql')


mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password : "",
    database: 'todo list'
})
//TODOS TABLE
//listen db query
db.connect((err, res )=> {
if (err) throw err
else console.log( 'MySQl is runing... ')
})

//insert
app.get('/todo-insert', (req , resp)=> {
    //new task 
    let nwTask ={title: 'first task', status :'INPROGRESS'}
    //Comminiquer avec db 
    let sql = `INSERT INTO Table SET ? ` 

    db.query(sql, newTask, (err, resQuery)=>{
if (err) throw err 
else {
    console.log(resQuery) //msg
    resp.send("Todo Created ..")
};
    })
})
app.listen( '9000', ()=>{
    console.log('server is runing on port 9000..')
})
//Inserted id 1 confirmer que la ligne est deja cree 