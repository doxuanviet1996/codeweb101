var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
{
	name:
	{
		type: String,
		required: true,
		unique: true
	},
	password:
	{
		type: String,
		require: true
	}
},
{
	timestamps: true
})

var users = mongoose.model('user',userSchema);

module.exports = users;