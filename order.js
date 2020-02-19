const express= require('express');
const router= express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message:'getting Orders' 
    });
});
router.post('/', (req,res,next)=>{
    res.status(201).json({
        message:'created an order ' 
    });
});
router.get('/:ordernumber', (req,res,next)=>{
    const id=req.params.orderId;
    res.status(200).json({
        message:'number details' ,
        number: number
    });
});

router.delete('/:orderId', (req,res,next)=>{
    const id=req.params.orderId;
    res.status(200).json({
        message:'Order cancelled' ,
        id: id
    });
});

module.exports = router;
