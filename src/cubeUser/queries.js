const getUsers= "SELECT * FROM cubeuser";

const getUserByEmail= "SELECT * FROM cubeuser WHERE email = $1";
const checkEmailExists="SELECT cu FROM cubeuser cu WHERE cu.email=$1"
const addUser="INSERT INTO cubeuser(email,password) VALUES ($1,$2)";
const deleteUser="DELETE FROM cubeuser WHERE email=$1"
const deleteUserForms="DELETE FROM cubeform WHERE uid=$1"
const updateUser="UPDATE cubeuser SET password=$1 WHERE email=$2"
module.exports={
    getUsers,
    getUserByEmail,
    checkEmailExists,
    addUser,
    deleteUser,
    updateUser,
    deleteUserForms
}
