import { comparePassword, hashPassword } from "../../utils/passwordFunction.js";
import { User } from "../../models/userModel.js";

export const changePassword = async (req, res) => {
    try {
        const { email, currentPassword, newPassword } = req.body;

        const { userId } = req;

        const user = User.findById(userId);

        let isPassword = await comparePassword(currentPassword, user.password);

        if (!isPassword) {
            return res.status(401).json({
                message: "The current password is wrong",
            });
        }

        let hashedPassword = await hashPassword(newPassword);

        user.password = hashedPassword;
        user.save();
        res.status(200).json({
            message:"password have been changed successfully 👍"
        })
    } catch (error) {
        consolelog('error',error.message)
        res.status(500).json({
            message: "internal server error",
        })
    }
}
