const mongoose = require('mongoose') ;

const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(()=> {
            console.log(
                `----------------DB Connection Successful----------------`
            );
        })
        .catch((err) => {
            console.log(
                `----------------DB Connection Failed----------------`
            )
        })
}

module.exports = connectDB ; 