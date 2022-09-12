//用户页面：处理用户页面的增删改查

//导入Express路由，实现http请求处理
import express from "express";
const router = express.Router();

//导入controller中的实际方法
import {deleteUser, getUser, getUsers, updateUser} from "../controllers/user_ctr.js";
//导入utils中验证用户的实际方法
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js";
//检查登陆
// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("Hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("Hello admin, you are logged in and you can delete all accounts")
// })
//update,先检测用户
router.put("/:id", verifyUser, updateUser)
//delete，先检测用户
router.delete("/:id", verifyUser, deleteUser)
//get，先检测用户
router.get("/:id", verifyUser, getUser)
//get all，先检测管理员
router.get("/", verifyAdmin, getUsers)

export default router