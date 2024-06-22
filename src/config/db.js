const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}

// const mongoose = require('mongoose');

// const mongoDbUrl = 'mongodb+srv://shivmahato000:aTpcPuR3XKurX5u3@cluster0.xsvkyxp.mongodb.net/?retryWrites=true&w=majority';

// const connectDb = async () => {
//     try {
//         await mongoose.connect(mongoDbUrl, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error.message);
//     }
// };

// module.exports = { connectDb };
