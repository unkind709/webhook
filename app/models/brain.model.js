var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BrainSchema = new Schema({
    input: {
        type: String, 
        required: 'Input is required'
    },
    output: {
        type: String, 
        required: 'Input is required'
    }
});

mongoose.model('Brain', BrainSchema);