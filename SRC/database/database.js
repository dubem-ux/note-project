const {config} = require ('dotenv');
const {mysql} = require ('mysql2');

config();

var pool = mysql.createConnection(process.env.DATABASE_URL);

const client = pool.promise();


const noteTable = `CREATE TABLE IF NOT EXISTS
            note(
              id SERIAL PRIMARY KEY UNIQUE,
              title VARCHAR(30) NOT NULL,
              note VARCHAR NOT NULL
            );`;

function initDBPool() {
              try {
                pool.query(noteTable,  ((err, results, fields)=>{
                  console.log('Tables created successfully');

                }));   
              } catch (err) {
              
                  console.log('Unable to create tables: ', err);
                }
}

const dropTables = (()=>{
  const query1 = 'TRUNCATE note CASCADE';

  try {
    pool.query(query1);
  }catch(err){
    console.log(error);
  }
}) 

module.exports = { client, initDBPool, pool, dropTables}