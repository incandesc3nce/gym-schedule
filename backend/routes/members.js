const express = require('express');
const router = express.Router();
const Member = require('../models/member.js');

module.exports = router;

// get all
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// get one
router.get('/:id', getMember, (req, res) => {
  res.json(res.member);
});

//create one
router.post('/', async (req, res) => {
  const member = new Member({
    surname: req.body.surname,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    active_member: req.body.active_member,
    member_since: req.body.member_since
  });
  try {
    const newMember = await member.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//update one
router.patch('/:id', getMember, async (req, res) => {
  if (req.body.surname != null) {
    res.member.surname = req.body.surname;
  }
  if (req.body.name != null) {
    res.member.name = req.body.name;
  }
  if (req.body.phone != null) {
    res.member.phone = req.body.phone;
  }
  if (req.body.email != null) {
    res.member.email = req.body.email;
  }
  if (req.body.active_member != null) {
    res.member.active_member = req.body.active_member;
  }
  if (req.body.member_since != null) {
    res.member.member_since = req.body.member_since;
  }
  try {
    const updatedMember = await res.member.save();
    res.json(updatedMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete one
router.delete('/:id', getMember, async (req, res) => {
  try {
    await res.member.deleteOne();
    res.json({ message: 'Deleted member' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


async function getMember(req, res, next) {
  let member;
  try {
    member = await Member.findById(req.params.id);
    if (member == null) return res.status(404).json({ message: 'Cannot find member' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.member = member;
  next();
}