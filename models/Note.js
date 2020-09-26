const mongoose = require('mongoose');
const Joi = require('joi')

const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Please add a title'],
        trim:true,
    },
    description:{
        type:String,
        required:[true, 'Please add a description'],
    },
    status:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Note = mongoose.model('Note',NoteSchema);

// input validator
const validateNote = note =>{
    const schema = {
        title:Joi.string().required(),
        description:Joi.string().required(),
        status:Joi.boolean(),
    }

    return Joi.validate(note,schema)
}

exports.Note = Note;
exports.Validate = validateNote;

