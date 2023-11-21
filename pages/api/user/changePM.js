import {createRouter} from "next-connect";
import User from "../../../models/User";
import db, { connectDb, disconnectDb } from "../../../utils/db";
import auth from "../../../middleware/auth";
import auth from "@/middleware/auth";

const router = createRouter().use(auth)

router.put(async (req, res) => {
  try {
    connectDb();
    const { paymentMethod } = req.body;
    const user = await User.findById(req.user);
    await user.updateOne(
      {
        defaultPaymentMethod: paymentMethod,
      },
      { returnOriginal: false }
    );
    disconnectDb();
    return res.json({ paymentMethod: user.defaultPaymentMethod });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router.handler();
