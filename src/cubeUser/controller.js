const queries=require('./queries')
const pool=require('../../db');
const getUsers=(req,res)=>{
    pool.query(queries.getUsers, (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getUserByEmail=(req,res)=>{
    const email=req.params.email;
    pool.query(queries.getUserByEmail, [email],(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
const addUser=(req,res)=>{
    const {email,password}=req.body;
    pool.query(queries.checkEmailExists,[email],(error,results)=>{
        if(results.rows.length){
            res.send('Email already exists.');
      }
      pool.query(queries.addUser,[email,password],(error,results)=>{
          if(error) throw error
          res.status(201).send("User created.");
      })
    })
}
const deleteUser=(req,res)=>{
    const email=req.params.email;
    pool.query(queries.getUserByEmail,[email], (error,results)=>{
        const noUserFound=!results.rows.length;
    
        if(noUserFound){
            res.send('User does not exist.')
        }
        const uid=results.rows[0].id
        pool.query(queries.deleteUserForms,[uid],(error,result)=>{
            if (error) throw error
            pool.query(queries.deleteUser,[email],(error,results)=>{
                if(error) throw error;
                res.status(200).send("User deleted.")
            })

        })
})
}
const updateUser=(req,res)=>{
    const email=req.params.email;
    const {password}=req.body;
    pool.query(queries.getUserByEmail,[email], (error,results)=>{
        const noUserFound=!results.rows.length;
        if(noUserFound){
            res.send('User does not exist.')
        }
        pool.query(queries.updateUser,[password,email],(error,results)=>{
            if (error) throw error;
            res.status(200).send("User updated.")
        })

    })
}
module.exports={
    getUsers,
    getUserByEmail,
    addUser,
    deleteUser,
    updateUser
}