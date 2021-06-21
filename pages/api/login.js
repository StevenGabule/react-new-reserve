import connectDB from "../../utils/connectDb";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDB();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(404)
        .send(
          "The credentials you entered is not found, Please check your credentials!"
        );
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).json(token);
    } else {
      res
        .status(401)
        .send(
          "The credentials you entered is not found, Please check your credentials!"
        );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error signup user. Please try again later!");
  }
};
