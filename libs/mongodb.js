import mongoose from "mongoose";

const connectToMongoDB = async () => {

  try {
  
    await mongoose.connect(process.env.MONGODB_URI);

  } catch (error) {

    console.log(error);

    console.log("connected error")

  }

}

export default connectToMongoDB;