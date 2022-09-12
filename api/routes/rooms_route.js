import express from "express";
const router = express.Router();
import {verifyAdmin} from "../utils/verifyToken.js";
import {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability
} from "../controllers/room_ctr.js";

//create
router.post("/:hotelId", verifyAdmin, createRoom)
//update
router.put("/:id", verifyAdmin, updateRoom)
router.put("/availability/:id", updateRoomAvailability)
//delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)
//get
router.get("/:id", getRoom)
//get all
router.get("/", getRooms)

export default router