var mongoose = require ('mongoose');

var userSchema = mongoose.Schema({
  facebookObject:
    { facebookId: mongoose.Schema.Types.Mixed,
    name: String,
    picture: mongoose.Schema.Types.Mixed,
    email: mongoose.Schema.Types.Mixed,
    birthday: mongoose.Schema.Types.Mixed
    },
  testObject:
    {core:
    { uniqueTestId:mongoose.Schema.Types.Mixed,
    testQuestions:Array,
    testResults: Array,
    compareArray:Array
    }
  }
})

var  User = mongoose.model('User', userSchema)

module.exports = {
  User: User
}


//USER data structure var User = {
//  _id:mongoID,
//  fbObj:{ 'facebookId': fbId,
//          'name': userName,
//          'picture': picUrl(will be pic file),
//          'email': email,
//          'birthday': birthday},
//  tObj:{core:
//   {uniqueTestId:id,testQuestions:[{testQs}], testResults: [{testResultsEntire}], compareArray:[score0,score1,score2,score3,score4,score5]},
//   career:{...} }
//}

