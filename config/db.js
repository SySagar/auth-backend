import mongoose from 'mongoose';

const DBConnect = async () => {
    try {
       await mongoose.connect(`${process.env.DATABASE_URL}`);
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

export default DBConnect;