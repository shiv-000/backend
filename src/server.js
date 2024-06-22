// const { app } = require(".");
// const { connectDb } = require("./config/db");

// const PORT=5000;
// app.listen(PORT,async ()=>{
//     await connectDb()
//     console.log("ecommerce api listing on port ",PORT)
// })
const { app } = require(".");
const { connectDb } = require("./config/db");

const PORT = process.env.PORT || 5454;

const startServer = async () => {
  try {
    await connectDb();
    console.log("Database connected successfully.");

    app.listen(PORT, () => {
      console.log(`Ecommerce API listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1); // Exit the process with an error code
  }
};

startServer();

