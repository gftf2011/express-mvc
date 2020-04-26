const bcrypt = require('bcryptjs');

let users = [];

class User {
  static init(database) {
    this.database = database;
  }

  static async getAll() {
    const db = await this.database;

    const { rows } = await db.query('SELECT * FROM "users"');

    users = rows;

    return users;
  }

  static async findUserByEmail(model) {
    const db = await this.database;

    const { email } = model;

    const { rows } = await db.query('SELECT * FROM "users" where "email"=$1', [email]);

    users = rows;

    return users.length > 0 ? users[0] : null;
  }

  static async createUser(model) {
    const db = await this.database;

    const { email, password } = model;

    const { rows } = await db.query('INSERT INTO "users"("email", "password_hash") VALUES($1::text, $2::text) RETURNING *', [email, await bcrypt.hash(password, 8)]);

    users = rows;

    return users.length > 0 ? users[0] : null;
  }

  static async updateUser(model) {
    const db = await this.database;

    const { email, new_password } = model;

    const { rows } = await db.query('UPDATE "users" SET "password_hash"=$2 WHERE "email"=$1 RETURNING *', [email, await bcrypt.hash(new_password, 8)]);

    users = rows;

    return users.length > 0 ? users[0] : null;
  }

  static async deleteUser(model) {
    const db = await this.database;

    const { email } = model;

    const { rows } = await db.query('DELETE FROM "users" WHERE "email"=$1 RETURNING *', [email]);

    users = rows;

    return users.length > 0 ? users[0] : null;
  }

  static async checkPassword(newPassword, oldPassword) {
    return bcrypt.compare(newPassword, oldPassword);
  }
}

module.exports = User;
