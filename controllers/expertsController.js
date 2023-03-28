const Students=require('../models/students');
const Users=require('../models/users');

exports.getStudent=async(req,res)=>{
try {
//     const students=await Students.findAll({where:{expertId:req.user.id}})
// console.log(students);

    const a=await Users.findAll({
        include:[{model:Students,as :"student",
        // association:{foreignKey:"userId"},
        where:{expertId:req.user.userId}
    }]
    })
// console.log(a);
console.log(req.user);
  
    // console.log(a);

    // let studentId=[];z
    // let studentInfo=[];

    // students.forEach (student => {
    //     studentId.push(student.userId)
    //    studentInfo= await Users.findOne({where:{id:student.userId}})
    // });
    // console.log(studentId);
    // console.log(studentInfo);



    res.render("Expert/dashExpert",{
        pageTitle:"داشبورد کارشناس",
        path:"/dashboard/dash-expert",
        layout:"./layouts/dashLayout",
        // students
    })
} catch (err) {
    console.log(err);
}
}