import User from "../schema/user.js";

export const createUser = async (user) => {
  try {
    const newUser = await User.create(user);

    newUser.save()
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const searchUserByEmail = async (email) => {
    try {
        const user = await User.findOne({email: email})
        if(user)
        return user;
        else
        return null;
    } catch (error) {
        console.log(error)
    }
}

