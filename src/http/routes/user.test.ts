// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import { appFactory } from '../app';
import { UsersService } from '../../domain/users/usersService';

const userData = { firstName: 'test', lastName: 'user', age: 22 };

const mockUserRepository = {
  getAll: jest.fn(),
  add: jest.fn(),
};

const userService = new UsersService(mockUserRepository);

const app = appFactory(userService);

describe('user route test', () => {
  describe('Post /users test', () => {
    beforeEach(() => {
      mockUserRepository.getAll.mockClear();
      mockUserRepository.add.mockClear();
    });

    it('should return 200 an array of users', async () => {
      mockUserRepository.add.mockResolvedValue(userData);

      const { body: user } = await request(app)
        .post('/users')
        .send({ firstName: 'test', lastName: 'user', age: 22 })
        .expect(200);

      expect(user).toEqual(userData);
    });

    it('should return 400 when invalid body', async () => {
      const {
        body: { message, details },
      } = await request(app).post('/users').send({}).expect(400);

      expect(message).toEqual('Invalid Request');
      expect(details[0]).toHaveProperty('message', 'Invalid value');
      expect(details[0]).toHaveProperty('field', 'firstName');
    });
  });
});
