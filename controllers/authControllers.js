import { searchUserByEmail,createUser } from "../repository/auth.js";
import { hashPassword,comparePasswords } from "../utils/bcrypt.js";
import { generateAccessToken } from "../utils/generateToken.js";


export const loginUser = async (req, res) => {
  
    const { email, password } = req.body;
  
    const user = await searchUserByEmail(email);
  
      const hashedPassword = user?.hashedPassword;
      // console.log(hashedPassword);
  
    if (user) {
  
      const isPasswordMatch = await comparePasswords(password,hashedPassword);
  
      if (isPasswordMatch) {
        console.log("user logged in");
        const token = generateAccessToken({ userEmail: email });
        res.json({ message: "user logged in", status: 200, email:user.email,token:token });
  
      } else res.json({ message: "Wrong credentials", status: 401 });
    }
    else 
    res.json({ message: "user not found", status: 404 });
  
  
  };

  export const registerUser = async (req, res) => {

    console.log(req.body)
  
    const { email, password } = req.body;
  
    const hashedPassword = await hashPassword(password);
    const user = {
      email,
      hashedPassword,

    } ;
  
    const isUserExists = await searchUserByEmail(email);
  
    if (isUserExists) {console.log("user saved to db");res.send("user already exists");}
    else {
      //creates a new user in the database
      const result = await createUser(user);
  
      console.log(result);
  
      if (result) {console.log("user saved to db");res.send("user saved to db");}
      else res.send("error saving user to db");
    }
  };