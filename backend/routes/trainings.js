const express = require('express');
const router = express.Router();
const Training = require('../models/training.js');

module.exports = router;

// get all
router.get('/', async (req, res) => {
  try {
    const trainings = await Training.find();
    res.json(trainings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// get one
router.get('/:id', getTraining, (req, res) => {
  res.json(res.training);
});

// create one
router.post('/', async (req, res) => {
  const training = new Training({
    trainer: req.body.trainer,
    members: req.body.members,
    date: req.body.date,
    start_time: req.body.start_time,
    end_time: req.body.end_time
  });
  try {
    const newTraining = await training.save();
    res.status(201).json(newTraining);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// update one
router.patch('/:id', getTraining, async (req, res) => {
  if (req.body.trainer != null) {
    res.training.trainer = req.body.trainer;
  }
  if (req.body.members != null) {
    res.training.members = req.body.members;
  }
  if (req.body.date != null) {
    res.training.date = req.body.date;
  }
  if (req.body.start_time != null) {
    res.training.start_time = req.body.start_time;
  }
  if (req.body.end_time != null) {
    res.training.end_time = req.body.end_time;
  }
  try {
    const updatedTraining = await res.training.save();
    res.json(updatedTraining);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// delete one
router.delete('/:id', getTraining, async (req, res) => {
  try {
    await res.training.deleteOne();
    res.json({ message: 'Deleted training' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


async function getTraining(req, res, next) {
  let training;
  try {
    training = await Training.findById(req.params.id);
    if (training == null) return res.status(404).json({ message: 'Cannot find training' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.training = training;
  next();
}