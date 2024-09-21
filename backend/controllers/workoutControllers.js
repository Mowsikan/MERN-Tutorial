const workout= requie('../models/Workout')

//get all workouts

const getWorkouts= async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}
//get a single workout

const getWorkout = async(req,res)=>{
    const {id} = req.params

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error:'No such workout found'})
    }
    res.status(200).json(workout)
}
//create a new workout

const createWorkout = async(req,res)=>{
    const { title, load, reps } = req.body;

    try {
        const workout = Workout.create({ title, load, reps });

  
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports={
    createWorkout,
    getWorkout,
    getWorkouts
}