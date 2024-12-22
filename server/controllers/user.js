import { User } from "../model/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log('email', email, 'pass', password)
        if (!email || !password) {
            return res.status(401).json({
                message: 'Plz fill the all input field',
                success: false
            })
        }
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: 'Invalid user',
                success: false
            })
        }

        return res.status(200).json({
            message: 'user Login successfully ',
            success: true,
            user
        })

    } catch (error) {
        console.log('login', error)
        return res.status(401).json({
            message: 'User not Login ',
            success: true,
        })
    }

}

export const Register = async (req, res) => {
    try {
        const { fullName, email, phone, password, address, userType } = req.body;

        if (!fullName || !email || !phone || !password || !address || !userType) {
            return res.status(401).json({
                message: 'Plz fill the all input field',
                success: false
            })
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(401).json({
                message: 'Already registered',
                success: false
            })
        }

        const avatarLocalPath = req.files?.avatar[0]?.path;
        
        let coverImageLocalPath;

        if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
            coverImageLocalPath = req.files.coverImage[0].path
        }



        if (!avatarLocalPath) {
            return res.status(401).json({
                message: 'Plz upload your avatar',
                success: false
            })
        }

        const avatar = await uploadOnCloudinary(avatarLocalPath)
        console.log('url', avatar.response.url)
        const coverImage = await uploadOnCloudinary(coverImageLocalPath)


        if (!avatar) {
            return res.status(401).json({
                message: "Avatar file is required",
                success: false
            })
        }

        const newUser = await User.create({
            fullName,
            email,
            phone,
            password,
            address,
            avatar: avatar.response.url,
            coverImage: coverImage?.response?.url || "",
            userType
        })

        return res.status(200).json({
            message: "Account created successfully",
            success: true,
            newUser
        })

    } catch (error) {
        console.log(`Account not created: ${error}`);
        
        return res.status(500).json({
            message: "An error occurred while creating the account",
            success: false,
            error: error.message
        });


    }
}

export const Logout = () => {
    return res.status(401).json({
        message: "Account created successfully",
        success: true,
    })
}

export const updateProfile = async (req, res) => {
    try {
        // Extract userId from the request
        const userId = req.user._id;

        // Fetch the user from the database
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
                success: false,
            });
        }

        // Extract required fields from the request body
        const { fullName, email, phone, address } = req.body;

        // Handle file uploads if available
        const avatarLocalPath = req.files?.avatar?.[0]?.path;
        let coverImageLocalPath;

        if (req.files?.coverImage && Array.isArray(req.files.coverImage)) {
            coverImageLocalPath = req.files.coverImage[0]?.path;
        }

        // Check if avatar is provided
        if (!avatarLocalPath) {
            return res.status(400).json({
                message: 'Please upload your avatar',
                success: false,
            });
        }

        // Upload images to Cloudinary
        const avatar = await uploadOnCloudinary(avatarLocalPath);
        const coverImage = coverImageLocalPath
            ? await uploadOnCloudinary(coverImageLocalPath)
            : null;

        // Update user details
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                fullName,
                email,
                phone,
                address,
                avatar: avatar?.url,
                coverImage: coverImage?.url || user.coverImage || "",
            },
            { new: true }
        );

        return res.status(200).json({
            message: "Account updated successfully",
            success: true,
            user: updatedUser,
        });

    } catch (error) {
        console.error(`Error updating account: ${error.message}`);
        return res.status(500).json({
            message: "An error occurred while updating the account",
            success: false,
            error: error.message,
        });
    }
};
