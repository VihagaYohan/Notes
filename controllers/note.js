const { Note, Validate } = require("../models/Note");
const express = require("express");

exports.getNotes = async(req, res)=>{
    let notes = await Note.find().sort('createdAt');
    if(!notes) return res.status(400).json({
        sucess:false,
        error:error.details[0].message
    })
    res.status(200).json({
        sucess:true,
        data:notes
    })

}

exports.addNote = async(req, res)=>{
    const {error} = Validate(req.body);
    if(error) return res.status(400).json({
        sucess:false, error:error.details[0].message
    })

    let note = await Note.create(req.body);
    res.status(200).json({
        sucess:true,
        data:note
    })
}


