const bcrypt = require('bcryptjs');

class User {

    static init (database) {
        this.users = null;
        this.database = database;
    }

    static async getAll() {
        try {
            var db = await this.database;
            const { rows } = await db.query(`SELECT * FROM "users"`);

            return rows;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    static async findUserByEmail(model) {
        try {
            const db = await this.database;

            const { email } = model;

            const { rows } = await db.query(`SELECT * FROM "users" where "email"=$1`, [email]);

            return rows.length > 0 ? rows[0] : null;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    static async createUser(model) {
        try {
            const db = await this.database;

            const { email, password } = model;

            const { rows } = await db.query('INSERT INTO "users"("email", "password_hash") VALUES($1::text, $2::text) RETURNING *', [email, await bcrypt.hash(password, 8)]);

            return rows.length > 0 ? rows[0] : null;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    static async updateUser(model) {
        try {
            const db = await this.database;

            const { email, new_password } = model;

            const { rows } = await db.query('UPDATE "users" SET "password_hash"=$2 WHERE "email"=$1 RETURNING *', [email, await bcrypt.hash(new_password, 8)]);

            return rows.length > 0 ? rows[0] : null;
        } catch (err) {
            console.log(err);
            return null
        }
    }

    static async deleteUser(model) {
        try {
            const { email } = model;

            const db = await this.database;

            const { rows } = await db.query('DELETE FROM "users" WHERE "email"=$1 RETURNING *', [email]);

            return rows.length > 0 ? rows[0] : null;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    static async checkPassword(newPassword, oldPassword) {
        return bcrypt.compare(newPassword, oldPassword);
    }
}

module.exports = User;