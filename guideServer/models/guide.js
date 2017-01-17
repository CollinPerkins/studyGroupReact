var mongoose = require('mongoose');
var schema = mongoose.Schema;

//Define the model
const guideSchema = new Schema({
  guide_code: String,
  name: String,
  book_name: String,
  url_guide: String,
  participants: Number,
  completed: Number,
  subjects: [
              {
                subject_code: String,
                name: String,
                completed: Boolean;
                comments:{
                            user: String,
                            text: String,
                            create_date: {type: Date, default: Date.now}
                          }
              }
            ]
  create_date: {type: Date default: Date.now}
  modify_date: Date
});

const modelGuide = mongosee.model('guide', guideSchema);

//Export the model
module.exports = modelGuide;
