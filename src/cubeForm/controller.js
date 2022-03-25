const queries=require('./queries')
const pool=require('../../db');
const getForms=(req,res)=>{
    pool.query(queries.getForms, (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}


const getUserForms=(req,res)=>{
    const id=req.params.id;
    pool.query(queries.checkID,[id],(error,results)=>{
        if (error) throw error
        if(!results.rows.length){
            res.send('No such user.');
      }
      pool.query(queries.getUserForms,[id],(error,results)=>{
          if(error) throw error
          res.status(200).json(results.rows);
      })
    })
}
module.exports={
    getForms,
    getUserForms,
}