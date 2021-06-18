var person={
    firstname:'john',
    lastname:'Doe',
    getFullName:function(){
      var fullname=this.firstname+''+this.lastname
      return fullname
    }
  }
  
  var logName=function(lang1,lang2){
    console.log('Logged: '+this.getFullName())
    console.log('Argument: '+lang1+''+lang2)
  }
  logName.call(person,'en','es')
  logName.apply(person,['en','es'])
  var  logPersonName=logName.bind(person)
  console.log(logPersonName)