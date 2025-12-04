import validator from 'validator'

// ApI for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        // checking for all data to add doctor 
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" })
        }

        // validating email format
        if (!validator.isEmail(email)) {
             return res.json({ success: false, message: "Please enter a valid email" })
        }
            
        // validating Strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Password is not strong enough. It should be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and symbols." })
        }
        

        
    }catch (error) {
        res.status(500).send({ message: "Error adding doctor", success: false, error })
    }
}

export { addDoctor }