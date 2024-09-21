const express = require('express')
const Workout = require('../models/Workout')
const router = express.Router()
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutControllers')
//get all workouts

router.get('/',getWorkouts)

//get a single workout

router.get('/:id',getWorkout)

//post  NEW workoiut

router.post('/',createWorkout)

//delete workout

router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete a workout'})
})

//update workout

router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a worout'})
})

module.exports= router