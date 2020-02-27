const mongoose=require("mongoose")
mongoose.connect("mongodb://local host:27107/edureka",{useNewUrlParser: true}(error)=>{
if(!error)
  {
    console.log("success");
    }
    else
  {
    console.log("failure");
    }
});    
