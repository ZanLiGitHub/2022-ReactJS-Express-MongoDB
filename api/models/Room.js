//房间类：定义房间的信息

//插件：简化mongodb
import mongoose from "mongoose";
//房间结构
const RoomSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        desc:{
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        roomNumbers: [{
            number: Number,
            unavailableDates:{type:[Date]}
        }],
    },
    {timestamps:true}
)
//导出名为User的用户结构
export default mongoose.model("Room", RoomSchema)