import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body; // Correct destructuring from req.body

    // Check if the user already exists in the database
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user if email doesn't exist
    const newUser = new User({ fullname, email, password: hashedPassword });
    await newUser.save();

    // Respond with success message
    res.json({ message: "User created successfully", user:{
      _id: createdUser._id,
      fullname: createdUser.fullname,

      email: createdUser.email
    } });
  } catch (error) {
    if(error.response){
      console.log("Error: ", error)
      alert("Error: ", error.response.data.message)
    }
  }
};

export const login = async(req, res) =>{
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const isMatch = await bcrypt.compare(password, user.password);
    if(!user || !isMatch){
      return res.status(400).json({message: "Invalid credentials"});
    }else{
      res.status(200).json({message: "Login successful", user:{
        _id:user._id,
        fullname:user.fullname,
        email:user.email
      }})
    }
  } catch (error) {
    console.log("Error:", error.message)
    return res.status(500).json({message: "Internal Server error", error: error.message});
  }
}
