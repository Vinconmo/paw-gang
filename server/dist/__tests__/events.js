"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../server");
dotenv_1.default.config();
const TEST_PORT = process.env.TEST_PORT || 3003;
const request = (0, supertest_1.default)(server_1.app);
let server;
beforeAll((done) => {
    server = server_1.app.listen(TEST_PORT);
    done();
});
afterAll((done) => {
    server.close();
    mongoose_1.default.connection.close();
    done();
});
describe('event endpoints', () => {
    let eventId;
    const placeId = 'test_place_id';
    const userId = 'test_user_id';
    // GET all events
    (0, globals_1.test)('Get / - should get all events', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/events');
        (0, globals_1.expect)(response.status).toBe(200);
    }));
    //POST events
    (0, globals_1.test)('POST /events - should create a new event', () => __awaiter(void 0, void 0, void 0, function* () {
        const newEvent = {
            place_id: placeId,
            park_name: 'New Park',
            address: '123 Park Lane',
            date: new Date('2024-01-01T00:00:00Z').toISOString(),
            user: userId, // Use the same user_id for later retrieval
            dog_avatar: 'dog_avatar_url',
        };
        const response = yield request.post('/events').send(newEvent);
        (0, globals_1.expect)(response.status).toBe(201);
        (0, globals_1.expect)(response.body).toHaveProperty('_id');
        (0, globals_1.expect)(response.body.place_id).toBe(newEvent.place_id);
        (0, globals_1.expect)(response.body.park_name).toBe(newEvent.park_name);
        (0, globals_1.expect)(response.body.address).toBe(newEvent.address);
        (0, globals_1.expect)(response.body.date).toBe(newEvent.date);
        (0, globals_1.expect)(response.body.user).toBe(newEvent.user);
        (0, globals_1.expect)(response.body.dog_avatar).toBe(newEvent.dog_avatar);
        eventId = response.body._id;
    }));
    // GET Events by place_id
    (0, globals_1.test)('GET /events/park/:place_id - should retrieve events by place_id', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get(`/events/park/${placeId}`);
        (0, globals_1.expect)(response.status).toBe(200);
        (0, globals_1.expect)(response.body).toBeInstanceOf(Array);
        (0, globals_1.expect)(response.body.length).toBeGreaterThan(0);
        (0, globals_1.expect)(response.body[0]).toHaveProperty('place_id', placeId);
        (0, globals_1.expect)(response.body[0]).toHaveProperty('park_name', 'New Park');
    }));
    // GET Events by user_id
    (0, globals_1.test)('GET /events/user/:user - should retrieve events by user_id', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get(`/events/user/${userId}`);
        (0, globals_1.expect)(response.status).toBe(200);
        (0, globals_1.expect)(response.body).toBeInstanceOf(Array);
        (0, globals_1.expect)(response.body.length).toBeGreaterThan(0);
        (0, globals_1.expect)(response.body[0]).toHaveProperty('user', userId);
        (0, globals_1.expect)(response.body[0]).toHaveProperty('park_name', 'New Park');
    }));
    // GET Event by ID
    (0, globals_1.test)('GET /events/:id - should retrieve an event by its ID', () => __awaiter(void 0, void 0, void 0, function* () {
        if (!eventId) {
            throw new Error('No event ID found for retrieval test');
        }
        const response = yield request.get(`/events/${eventId}`);
        (0, globals_1.expect)(response.status).toBe(200);
        (0, globals_1.expect)(response.body).toHaveProperty('_id', eventId);
        (0, globals_1.expect)(response.body).toHaveProperty('place_id', placeId);
        (0, globals_1.expect)(response.body).toHaveProperty('park_name', 'New Park');
        (0, globals_1.expect)(response.body).toHaveProperty('address', '123 Park Lane');
        (0, globals_1.expect)(response.body).toHaveProperty('date');
        (0, globals_1.expect)(response.body).toHaveProperty('user', userId);
        (0, globals_1.expect)(response.body).toHaveProperty('dog_avatar', 'dog_avatar_url');
    }));
    // PUT (EDIT) -> Only dates
    // ^Andre
    (0, globals_1.test)('PUT /events/:id - should update the event date', () => __awaiter(void 0, void 0, void 0, function* () {
        const newDate = new Date('2024-02-01T00:00:00Z');
        const response = yield request
            .put(`/events/${eventId}`)
            .send({ date: newDate });
        (0, globals_1.expect)(response.status).toBe(200);
        (0, globals_1.expect)(response.body).toHaveProperty('message', 'Event updated successfully');
        (0, globals_1.expect)(response.body.updatedEvent).toHaveProperty('date', newDate);
        // Verify the date was updated
        const checkResponse = yield request.get(`/events/${eventId}`);
        (0, globals_1.expect)(checkResponse.status).toBe(200);
        (0, globals_1.expect)(checkResponse.body.date).toBe(newDate);
    }));
    // Delete
    (0, globals_1.test)('DELETE /events/:id - should delete the event', () => __awaiter(void 0, void 0, void 0, function* () {
        if (!eventId) {
            throw new Error('No event ID found for deletion test');
        }
        let before = yield request.get(`/events/${eventId}`);
        const response = yield request.delete(`/events/${eventId}`);
        (0, globals_1.expect)(response.status).toBe(200);
        (0, globals_1.expect)(response.body).toHaveProperty('message', 'Event deleted successfully');
        const checkResponse = yield request.get(`/events/${eventId}`);
        (0, globals_1.expect)(checkResponse.status).toBe(400);
    }));
});
