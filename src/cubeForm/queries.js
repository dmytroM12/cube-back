const getForms="SELECT * FROM cubeform"
const getUserForms="SELECT * FROM cubeform WHERE id=$1"
const checkForm="SELECT * FROM cubeform WHERE uid=$1 AND name=$2"
const checkID="SELECT * FROM cubeuser WHERE id=$1"
const addForm="INSERT INTO cubeform(uid,name,rows,columns) VALUES ($1,$2,$3,$4)";
const deleteForm="DELETE FROM cubeform WHERE uid=$1 and name=$2"
const updateForm="UPDATE cubeform SET rows=$1,column=$2 WHERE name=$3 and uid=$4"
module.exports={
    getForms,
    getUserForms,
    checkForm,
    checkID,
    addForm,
    deleteForm,
    updateForm,
}