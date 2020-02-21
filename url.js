const express=require('express')
const router=express.router();

router.get('/name',(req,res,next)=>{
rest.status(200).json({
message:' hello/name'
});
});
router.post('/',(req,res,next)=>{
rest.status(200).json({
message:' /name'
});
});
router.get('/nameage',(req,res,next)=>
{
const age=req.params.page;
if(age>='10'&&age<='18')
{ res.status(200).json({
message:'you are a teen'age
  
});
} else if(age<='10'){
res.status(200).json({
message:'you are a child'age
});

else{
(res.status(200).json({message:'you are an adult'age});
)};
module.exports=router;
