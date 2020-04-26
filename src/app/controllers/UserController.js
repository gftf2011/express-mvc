const User = require('../models/User');

class UserController {
    constructor() {}

    async show(req, res) {
        const users = await User.getAll();

        return res.json(users);
    }

    async store(req, res) {
        const userExists = await User.findUserByEmail(req.body);

        if (userExists) {
            return res.status(400).json({ error: 'User already exists!' });
        }

        const user = await User.createUser(req.body);

        return res.json(user);
    }

    async update(req, res) {
        const userExists = await User.findUserByEmail(req.body);

        if (!userExists) {
            return res.status(400).json({ error: 'User does not exists!' });
        }

        if (await User.checkPassword(req.body.new_password, userExists.password_hash)) {
            return res.status(400).json({ error: 'New password is equal to old one!' });
        }

        if (!(await User.checkPassword(req.body.password, userExists.password_hash))) {
            return res.status(401).json({ error: 'Password does not match!' });
        }

        const user = await User.updateUser(req.body);

        return res.json(user);
    }

    async delete(req, res) {
        const userExists = await User.findUserByEmail(req.body);

        if (!userExists) {
            return res.status(400).json({ error: 'User does not exists!' });
        }

        const user = await User.deleteUser(req.body);

        return res.json(user);
    }
}

module.exports = new UserController();