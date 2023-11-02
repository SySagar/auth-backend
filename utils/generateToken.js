import jwt from "jsonwebtoken";


const generateAccessToken = (user) => {
  try{
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET , { expiresIn: "7200s" });
    return accessToken;
  }
  catch(err){
    console.log(err);
    }
};

export { generateAccessToken};