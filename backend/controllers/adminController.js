

// ApI for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        

    }catch (error) {
        res.status(500).send({ message: "Error adding doctor", success: false, error })
    }
}

export { addDoctor }