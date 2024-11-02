import bcrypt from 'bcrypt';
import Usermodel from '../model/userModel.js';
import jwt from 'jsonwebtoken';





export async function verifyUser(req, res, next) {
    try {
        const { username } = req.method == "GET" ? req.query : req.body;
        let exist = await Usermodel.findOne({ username });
        if (!exist) {
            return res.status(404).send({ error: "Can't find User" });
            next();
        }

    } catch (error) {
        return res.status(500).json("Invalid somewhere")
    }
}

// POST request to localhost:8484/api/register
export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // Check if the user or email already exists
        const existingUser = await Usermodel.findOne({ username });
        const existingEmail = await Usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists, try another" });
        }

        // Hash the password 
        const hashPassword = await bcrypt.hash(password, 5);//salt value

        // Create a new user
        const newUser = await Usermodel.create({ username, password: hashPassword, profile, email });


        await newUser.save().then(savedUser => {
            res.status(201).json({ message: "User registered successfully", data: savedUser });
        }).catch(error => {
            console.error("Error saving user:", error);
            res.status(500).json({ message: "Error saving user", error: error.message });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// POST request to localhost:8484/api/login
export async function login(req, res) {
    try {
        const { username, password } = req.body;
        const LoginUser = await Usermodel.findOne({ username });
        if (!LoginUser) {
            res.status(401).json("who are you 1");
        }
        const isPassword = await bcrypt.compare(password, LoginUser.password);


        if (!isPassword) {
            return res.status(401).json("password is incorrect ");
        }

        const token = jwt.sign({
            userId: LoginUser._id,
            username: username,
        }, 'secret', { expiresIn: "24h" });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }

}


// GET request to localhost:8484/api/user/user_name
export async function getUser(req, res) {
    try {
        const { username } = req.params;//it extract data from URL of incoming request
        // Check if username is provided
        if (!username) {
            return res.status(400).json({ msg: "Username is required" }); // 400 Bad Request
        }
        // Find user by username
        const user = await Usermodel.findOne({ username });
        if (!user) {
            return res.status(404).json({ msg: "User not found" }); // 404 Not Found
        }
        // Return success response with user data
        return res.status(200).json({ msg: "User retrieved successfully", user });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ msg: "An error occurred", error: error.message }); // 500 Internal Server Error
    }
}


// PUT request to localhost:8484/api/updateUser
export async function updateUser(req, res) {
    try {
        const id = req.query.id;
        if (!id) {
            return res.status(400).send({ msg: "ID is required to update the record" });
        }

        const body = req.body;

        // Use await to handle the promise returned by updateOne
        const result = await Usermodel.updateOne({ _id: id }, body);

        if (result.nModified === 0) {
            return res.status(404).send({ msg: "No record found to update" });
        }

        return res.status(200).send({ msg: "Record updated successfully" });
    } catch (error) {
        return res.status(500).json({ msg: "Server error", error });
    }
}



// POST request to localhost:8484/api/generateOTP
export async function generateOTP(req, res) {
    res.json("user router");
}

// POST request to localhost:8484/api/verifyOTP
export async function verifyOTP(req, res) {
    res.json("user router");
}

// POST request to localhost:8484/api/createResetSession
export async function createResetSession(req, res) {
    res.json("user router");
}

// PUT request to localhost:8484/api/resetPassword
export async function resetPassword(req, res) {
    res.json("user router");
}


