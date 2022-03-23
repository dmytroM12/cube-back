const Pool=require('pg').Pool;
const pool=new Pool({
    user: "postgres",
    password:'dima1288',
    host:"localhost",
    database: "cube",
    port:5433 

});
module.exports=pool;