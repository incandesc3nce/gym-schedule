const express = require('express');
const router = express.Router();
const Trainer = require('../models/trainer.js');

module.exports = router;

// get all
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get one
router.get('/:id', getTrainer, (req, res) => {
  res.json(res.trainer);
});

// create one
router.post('/', async (req, res) => {
  const trainer = new Trainer({
    surname: req.body.surname,
    name: req.body.name,
    middle_name: req.body.middle_name,
    email: req.body.email,
    phone: req.body.phone,
    specialty: req.body.specialty
  });

  try {
    const newTrainer = await trainer.save();
    res.status(201).json(newTrainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// update one
router.patch('/:id', getTrainer, async (req, res) => {
  if (req.body.surname != null) {
    res.trainer.surname = req.body.surname;
  }
  if (req.body.name != null) {
    res.trainer.name = req.body.name;
  }
  if (req.body.middle_name != null) {
    res.trainer.middle_name = req.body.middle_name;
  }
  if (req.body.email != null) {
    res.trainer.email = req.body.email;
  }
  if (req.body.phone != null) {
    res.trainer.phone = req.body.phone;
  }
  if (req.body.specialty != null) {
    res.trainer.specialty = req.body.specialty;
  }
  try {
    const updatedTrainer = await res.trainer.save();
    res.json(updatedTrainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// delete one
router.delete('/:id', getTrainer, async (req, res) => {
  try {
    await res.trainer.deleteOne();
    res.json({ message: 'Deleted trainer' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


async function getTrainer(req, res, next) {
  let trainer;
  try {
    trainer = await Trainer.findById(req.params.id);
    if (trainer == null) return res.status(404).json({ message: 'Cannot find trainer' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.trainer = trainer;
  next();
}