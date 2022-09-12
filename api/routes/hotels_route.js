//旅店页面：处理旅店页面的增删改查
//导入Express路由，实现http请求处理
import express from "express";

const router = express.Router();

//导入controller中的实际方法
import {
    countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel
} from "../controllers/hotel_ctr.js";
//导入utils中验证用户的实际方法
import {verifyAdmin} from "../utils/verifyToken.js";

//create
router.post("/", verifyAdmin, createHotel);
//update
router.put("/:id", verifyAdmin, updateHotel)
//delete
router.delete("/:id", verifyAdmin, deleteHotel)
//get
router.get("/find/:id", getHotel)
//get all
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)


export default router