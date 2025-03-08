import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { username, password, email, number } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(404).json({ message: "User already exist" });
    }

    //    genrate hashed password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //   create new user
    const user = new User({
      username: username,
      email: email,
      number: number,
      password: hashedPassword,
    });

    await user.save();
    // genrate token

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        number: user.number,
        email: user.email,
      },
      process.env.JWT_TOKEN,
      { expiresIn: "24h" }
    );

    res.status(200).json({ token: token, username: username });
  } catch (error) {
    console.error("Server error", error);
    res.status(500).json({ message: "Server error during login" });
  }
};
export { register };
