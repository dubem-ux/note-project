const {initDBPool} = require('../database/database.js')

const notes = ((req,res,next)=>{
    try{
        if(req.method === 'post'){
            `INSERT (id,name,phoneNumber,note)
            VALUES(${req.body});`;
        };
        if(req.method === 'GET'){
            `SELECT * FROM note;`
            console.log(`data returned`)
        };
    }catch(err){
        next(err);
    }
});

const noteid = ((req,res,next)=>{
    try{
        if( req.method === 'GET'){
            `SELECT notes.id FROM notes
            where id = ${toString(id)};`;
        }
        else if(req.method === 'PUT'){
            `UPDATE note FROM notes
            WHERE id = ${toString(id)}}`
        }
        else if(req.method === 'PUT'){
            `DELETE note FROM notes
            WHERE id = ${toString(id)}}`
        }
    }catch(err){
        next(err)
    }
})

initDBPool()

module.exports = {notes,noteid}
