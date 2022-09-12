//授权页面：处理登陆注册

//导入Express路由器
import express from "express";
const router = express.Router();

//导入controller中的实际方法
import {register, login} from "../controllers/auth_ctr.js";

//注册
router.post("/register", register)
//登陆
router.post("/login", login)


export default router