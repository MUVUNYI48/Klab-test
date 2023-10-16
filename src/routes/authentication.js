import { changePassword } from "../controllers/authentication/changePassword";
import { login } from "../controllers/authentication/login";
import { signUp } from "../controllers/authentication/signup";
import { verifyToken } from "../middleware/verifyToken";



const authRouter=express.Router();

authRouter.post("/login",login);
authRouter.post("/signup",change,signUp);
authRouter.post("/changepassword",verifyToken,changePassword);


export default authRouter;