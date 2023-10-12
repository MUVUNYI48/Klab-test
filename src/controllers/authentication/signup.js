
import { generateToken } from '../../utils/jwtFunctions.js'
import { hashPassword } from '../../utils/passwordFunction.js'
import { User } from '../../models/userModel.js'

export const signUp = async (req, res) => {

    console.log('request body',req.body);
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
           return res.status(409).json({
                message: "user email already exist"
            })
        }

        let hashedPassword = await hashPassword(req.body.password);
        req.body.password = hashedPassword;

        let newUser = await User.create(req.body)

        let Token = generateToken({
            _id: newUser._id,
            email: newUser.email,
        })

        res.status(201).json({
            message: "user created successfully",
            acccess_Token: Token,
            user: {
                email: newUser.email,
                location: newUser.location,
                fullNames: newUser.fullNames,
            }
        })
    } catch(error) {
        console.log('log from signup',error.message)
        res.status(500).json({
            message: "internal server error"
        });
    }
}