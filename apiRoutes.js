const express = require('express');
const router = express.Router();

const {
  getRooms,
  createRoom,
  updateRoom,
  deleteRoom,
} = require('../controllers/roomController');

router.get('/rooms', getRooms);
router.post('/rooms', createRoom);
router.put('/rooms/:id', updateRoom);
router.delete('/rooms/:id', deleteRoom);

module.exports = router;
