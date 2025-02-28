const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      res
        .status(400)
        .json({ message: "All fields required", success: "False" });
    }
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "User already exist", success: "False" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePhoto = `https://avatar.iran.liara.run/public`
    await User.create({
      fullname,
      email,
      password: hashedPassword,
      profilePhoto 
    });
    res
      .status(201)
      .json({ message: "Account created successfully", success: "true" });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(400)
        .json({ message: "All fields required", success: "False" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(401)
        .json({ message: "Incorrect email or password", success: "False" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res
        .status(401)
        .json({ message: "Incorrect email or password", success: "False" });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
    });
    res.status(200).json({ message: "Logged in successfully", token, user });
  } catch (error) {
    console.log(error);
  }
};

exports.logout = async(req, res) => {
  try {
    res.status(200).cookie("token", "", {maxAge : 0}).json({message : "Logout successfull"})
  } catch (error) {
    console.log(error)
  }
}
