const express = require('express');
const router = express.Router();
const Tutorial = require('../models/tutorialModel');

//get all the tutorial post
router.get('/all', async (req, res) => {
    try {
        // res.send('<h2>Hello World, what is Happening here on earth</h2>')
        const tutorial = await Tutorial.find({});
        res.json(tutorial);

    } catch (error) {
        console.log(error)
    }

})

//Making a post request
router.post('/', async (req, res) => {

    try {
        // const { title, author, tutorialType } = req.body;
        console.log(req.body);
        const tutor = await Tutorial.create(req.body);
        res.status(200).json(tutor);

    } catch (error) {
        console.log(error)
    }
})

router.get('edit/:id', async (req, res) => {
    try {
        const editTutor = await Tutorial.findOne({ _id: req.params.id });
        res.status(200).json(editTutor);

    } catch (error) {
        console.log(error)
    }
})

//Updating a post
router.put('/:id', async (req, res) => {
    try {
        let tutorial = await Tutorial.findById(req.params.id);
        // res.json(tutorial)
        tutorial = await Tutorial.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json(tutorial)

    } catch (error) {
        console.log(error);
    }
})

//Deleting a post
router.delete('/ok/:id', async (req, res) => {
    try {
        const tutorial = await Tutorial.findByIdAndDelete(req.params.id)
        res.status(200).json({ msg: "Succesfully Deleted" });
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;