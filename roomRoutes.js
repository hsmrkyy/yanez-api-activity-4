const express = require('express');
const router = express.Router();
const { getRooms, createRoom, updateRoom, deleteRoom } = require('../controllers/roomController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/', getRooms);

router.post('/', protect, authorize('admin', 'manager'), createRoom);

router.put('/:id', protect, authorize('admin'), updateRoom);

router.delete('/:id', protect, authorize('admin'), deleteRoom);

module.exports = router;
