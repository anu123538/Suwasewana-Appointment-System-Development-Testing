
import doctorModel from '../models/doctorModel.js'
const changeAvailability = async (req, res) => {
    try {
        const { doctorId } = req.body

        const docData = await doctorModel.findById(doctorId)
        await doctorModel.findByIdAndUpdate(doctorId, { available: !docData.available })

        res.json({ success: true, message: 'Availability status changed successfully' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { changeAvailability }

