const getUsers= "SELECT * FROM cubeuser";

const getUserByEmail= "SELECT * FROM cubeuser WHERE email = $1";
const checkEmailExists="SELECT cu FROM cubeuser cu WHERE cu.email=$1"
const addUser="INSERT INTO cubeuser(email,password) VALUES ($1,$2)";
const deleteUser="DELETE FROM cubeuser WHERE email=$1"
module.exports={
    getUsers,
    getUserByEmail,
    checkEmailExists,
    addUser,
    deleteUser
}
