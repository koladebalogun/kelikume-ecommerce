import {createRouter} from "next-connect";
import User from "../../../models/User";
import { connectDb, disconnectDb } from "../../../utils/db";
import auth from "@/middleware/auth";

const router = createRouter().use(auth)

router.put(async (req, res) => {
  try {
    connectDb();
    const { id } = req.body;
    let user = await User.findById(req.user);
    let user_addresses = user.address;
    let addresses = [];
    for (let i = 0; i < user_addresses.length; i++) {
      let temp_address = {};
      if (user_addresses[i]._id == id) {
        temp_address = { ...user_addresses[i].toObject(), active: true };
        addresses.push(temp_address);
      } else {
        temp_address = { ...user_addresses[i].toObject(), active: false };
        addresses.push(temp_address);
      }
    }
    await user.updateOne(
      {
        address: addresses,
      },
      { new: true }
    );
    disconnectDb();
    return res.json({ addresses });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});



router.delete(async (req, res) => {
  try {
    connectDb();
    const { id } = req.body;
    const user = await User.findById(req.user);
    await user.updateOne(
      {
        $pull: { address: { _id: id } },
      },
      { new: true }
    );
    disconnectDb();
    res.json({ addresses: user.address.filter((a) => a._id != id) });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router.handler();
