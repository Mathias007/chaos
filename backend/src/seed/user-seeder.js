// import UserSchema from "../models/users";
const UserSchema = require("../models/users");

async function isUserExist() {
    const exec = await UserSchema.find().exec();
    return (exec.length = 0);
}

// Initialize first user
export const initializeUsersData = async () => {
    if (!(await isUserExist())) {
        const user = [
            new UserSchema({
                role: "ADMIN",
                name: "admin",
                email: "admin@admin.com",
                password: "admin"
            })
        ];
        let done = 0;
        for (let i = 0; i < user.length; i++) {
            user[i].save((err, result) => {
                done++;
            });
        }
    }
};
