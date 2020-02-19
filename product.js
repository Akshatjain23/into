const express=require('express')
const router=express.router();

router.get('/',(req,res,next)=>{
rest.status(200).json({
message:'handing Get request to /p'
});
});
router.post('/',(req,res,next)=>{
rest.status(200).json({
message:'handing post request to /p'
});
});
router.get('/pnumber',(req,res,next)=>
{
const id=req.params.pnumber;
if(number==='2308')
{ res.status(200).json({
message:'you discovered my birth date'
number:number
});
} else{
res.status(200).json({
message:'other number'
});

router.patch('/',(req,res,next)=>{
rest.status(200).json({
message:'renewed product' /p
});
});
router.delete('/',(req,res,next)=>{
rest.status(200).json({
message:'deleted product' /p
});
});


module.exports=router;
