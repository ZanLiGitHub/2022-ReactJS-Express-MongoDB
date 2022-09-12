//框架：nodejs后端框架
import express from "express"
//插件：隐藏mongodb链接到.env文件中
import dotenv from "dotenv"
//插件：简化mongodb操作
import mongoose from "mongoose"
//插件：生成cookie
import cookieParser from "cookie-parser"
//插件：cors
import cors from "cors"

//导入几个页面的处理文件
import authRoute from "./routes/auth_route.js"
import usersRoute from "./routes/users_route.js"
import hotelsRoute from "./routes/hotels_route.js"
import roomsRoute from "./routes/rooms_route.js"

//创建express框架后端程序
const app = express()
//获取.env文件
dotenv.config()

//方法：后端程序连接到mongodb
const connect = async () => {
    try {
        //使用dotenv插件，隐藏mongodb链接
        await mongoose.connect(process.env.MONGO);
        //不使用dotenv插件，直接写mongodb链接
        //await mongoose.connect("mongodb+srv://zanli0718:Lzm20141014.@cluster0.tjhedap.mongodb.net/booking?retryWrites=true&w=majority");
        console.log("Connect to mongoDB.")
    } catch (error) {
        throw error;
    }
};

//事件：当与mongodb失去链接时调用
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})

//中间件
app.use(cors())
app.use(cookieParser())
//在中间件开始对用户请求拦截
app.use((req, res, next)=>{
    console.log("from middleware")
    next()
})
//让服务器可以收发JSON格式请求
app.use(express.json())
//定义每个页面的处理文件
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//主方法：后端程序启用后调用
app.listen(8800, () => {
    connect()
    console.log("Connected to backend!")
})