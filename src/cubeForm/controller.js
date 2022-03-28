const queries=require('./queries')
const pool=require('../../db');
const getForms=(req,res)=>{
    pool.query(queries.getForms, (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}


const getUserForms=(req,res)=>{
    const id=parseInt(req.params.id);
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


const addForm=(req,res)=>{
    const {uid,name,rows,columns}=req.body;
    pool.query(queries.checkID,[uid],(error,results)=>{
        if(error) throw error
        if(!results.rows.length){
            res.send("No such user")
            
        }
        pool.query(queries.checkForm,[uid,name], (error,results)=>{
            const formFound=results.rows.length;
            if(formFound){
                res.send('Form already exist.')
            }
            pool.query(queries.addForm,[uid, name, rows,columns],(error,results)=>{
                if (error) throw error;
                res.status(200).send("Form created.")
            })
        })
    })
}
const updateForm=(req,res)=>{
    const {uid,name,rows,columns}=req.body;
    pool.query(queries.checkForm,[uid,name], (error,results)=>{
        const noFormFound=!results.rows.length;
        if(noFormFound){
            res.send('Form does not exist.')
        }
        pool.query(queries.updateForm,[rows,columns,name,uid],(error,results)=>{
            if (error) throw error;
            res.status(200).send("Form updated.")
        })

    })
}

const deleteForm=(req,res)=>{
    const {uid,name}=req.body;
    pool.query(queries.checkForm,[uid,name], (error,results)=>{
        const noUserFound=!results.rows.length;
        if(noUserFound){
            res.send('Form does not exist.')
        }
        pool.query(queries.deleteForm,[uid,name],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Form deleted.")
        })

    })
}

module.exports={
    getForms,
    getUserForms,
    addForm,
    updateForm,
    deleteForm
}