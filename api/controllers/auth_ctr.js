import User from "../models/User.js";
//插件：密码加密
import bcrypt from "bcryptjs"
//插件：令牌生成器
import jwt from "jsonwebtoken"

//注册
export const register = async (req, res, next)=>{
    try {
        //生成salt
        const salt = bcrypt.genSaltSync(10)
        //用salt和hash加密密码
        const hash = bcrypt.hashSync(req.body.password, salt)
        //生成新用户
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            //此处不能保存密码的明文，而是保存加密后的hash
            password:hash
        })
        //保存新用户
        await newUser.save()
        res.status(200).send("User has been created")
    }catch (err){
        res.status(500).json(err)
    }
}
//登陆
export const login = async (req, res, next)=>{
    try {
        //检查用户名
        const user = await User.findOne({
            username: req.body.username
        })
        //如果用户名错误
        if(!user) return res.status(404).send("User nod found")
        //检查密码
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        //如果密码错误
        if(!isPasswordCorrect) return res.status(400).send("Wrong password or username")
        //生成令牌
        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT)
        //将令牌保存到cookie中
        res.cookie("access_token", token, {httpOnly:true}).status(200).json(user)
    }catch (err){
        res.status(500).json(err)
    }
}