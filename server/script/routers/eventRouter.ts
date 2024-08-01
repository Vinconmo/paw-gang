import express from 'express';

export const eventRouter: express.Router = express.Router();
const {
  getEventsbyPark,
  getEventsbyUser,
  getEvents,
  postEvents,
  deleteEvent,
  editEvent,
} = require('./controllers/eventsController.js');

router.get('/events/', getEvents);
router.get('/events/park/:place_id', getEventsbyPark);
router.get('/events/user/:user', getEventsbyUser);
router.post('/events', postEvents);
router.delete('/events/:_id', deleteEvent);
router.put('/events/:_id', editEvent);
