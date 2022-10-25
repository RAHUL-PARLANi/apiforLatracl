const router = require('express').Router();
let bg = require('../models/data.schema');

router.route('/').get((req,res) => {
    bg.find({'checkOutTime':"N/A"})
        .then(bgs => res.json(bgs))
        .catch(err => res.status(400).json('Error: ' +err));
});
router.route('/all').get((req,res)=>{
    bg.find().then(bgs=>res.json(bgs))
    .catch(err=>res.status(400).json('Error: ' +err));
})
router.route('/add').post((req,res) => {
const  checkInTime=req.body.checkInTime || "N/A";
const  driverName=req.body.driverName || "N/A";
const  numberPlate=req.body.numberPlate || "N/A";
const  checkOutTime="N/A";
const  newExercise = new bg({checkInTime,driverName,numberPlate,checkOutTime});
newExercise.save()
.then(() => res.json('PArking added'))
.catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res) => {
    bg.findById(req.params.id)
        .then(bgs => {
            bgs.checkOutTime=req.body.checkOutTime;
            bgs.save()
                //.then(() => res.json('Exercise updated !'))
                .then(() => res.json('Parking updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;