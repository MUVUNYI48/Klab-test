import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try {
        let auth = req.headers.authorization;
        let token = auth?.split(' ')[1];
        console.log("check token", auth)
        console.log("check token", req.headers)

        if (!token) {
            return res.status(401).json({
                message: "no access token provided"
            })
        }

        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded, 'decoded');


        req.userId = decoded._id;

        next();

    } catch (error) {
        console.log(error, "error on server")
        return res.status(500).json({
            message: "internal error server"
        })
    }
    console.log(decoded, 'decoded');

}