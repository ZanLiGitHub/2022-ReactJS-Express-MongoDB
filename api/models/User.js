//旅店类：定义用户的信息

//插件：简化mongodb
import mongoose from "mongoose";
//旅店结构
const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
    },
    {timestamps:true}
)
//导出名为User的用户结构
export default mongoose.model("User", UserSchema)