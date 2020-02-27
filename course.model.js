const mongoose=require ("mongoose")
var courseSchema=new mongoose.schema({
  courseName: {
  type :String,
  required :"Required"
  },
   courseid: {
  type :String,
  },
   coursefee: {
  type :String,
  },
  
  mongoose.model("course",courseSchema)
