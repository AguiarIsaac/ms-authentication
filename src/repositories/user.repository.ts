import db from "../db";
import User from "../models/user.model";

class UserRepository {
    
    async findAllUser(): Promise<User[]> {
        const sqlQuery = `
            SELECT uuid, username FROM application_user
        `;

        const { rows } = await db.query<User>(sqlQuery);
        return rows || [];
    }

    async FindById(uuid: string): Promise<User> {
        const sqlQuery = `
            SELECT uuid, username
            FROM application_user
            WHERE uuid = $1
        `;

        const values = [uuid];
        const { rows } = await db.query<User>(sqlQuery, values);
        const  [ user ] = rows;
        
        return user;
    }
}

export default new UserRepository;