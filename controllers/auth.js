import User from "../models/user";
import jwt from 'jsonwebtoken';


export const signup = async (req, res) => {
    const { email, name, lastName, phoneNumber, password, date ,description } = req.body
    try {
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            res.json({
                message: "Email đã tồn tại"
            })
        };
        const user = await new User({ email, name, lastName, phoneNumber, password, date, description }).save();
        res.json({
            user
        })
    } catch (error) {

    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            res.status(400).json({
                message: "email không tồn tại"
            })
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Sai mật khẩu"
            })
        }

        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 60 * 60 })

        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (error) {

    }
}

export const list = async (req, res) => {
    try {
        const users = await User.find().sort({ createAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const user = await User.findOneAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const update = async (req, res) => {
    const condition = { _id: req.params.id};
    const doc = req.body;
    const option = { new: true};
    try {
        const user = await User.findOneAndUpdate(condition, doc, option);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const read = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const user = await User.findOne(filter);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
