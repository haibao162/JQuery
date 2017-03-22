var  User  =  require('./User');
function  Teacher(id,name,age){
    User.apply(this,[id,name]);
    this.teach=function(res){
    	//console.log(User.age);
        res.write(this.name+"Teach");
    }
}
module.exports=Teacher;