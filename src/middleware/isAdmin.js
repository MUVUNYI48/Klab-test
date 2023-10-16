import { User } from "../models/userModel.js";

export const isAdmin = async (req, res, next) => {

    try {
        const { userId } = req;

        const user = User.findByid(userId);
        console.log(user, "User");

        if (user?.role != "admin") {
            return res.status(403).json({
                message: "Action is only for the admins",
            })

        }
        next();
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        })
    }

}