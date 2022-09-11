import AboutUs from '../models/aboutUs'
// API thêm sản phẩm
export const create = async (req, res) => {
    console.log(req.body);
    try {
        const aboutUs = await new AboutUs(req.body).save();
        console.log('aboutUs', aboutUs);
        res.json(aboutUs)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}
// API list sản phẩm
export const list = async (req, res) => { 
    try {
        const aboutUss = await AboutUs.find().sort({createAt: -1});
        res.json(aboutUss);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const aboutUs = await AboutUs.findOne(filter);
        res.json(aboutUs);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const aboutUs = await AboutUs.findOneAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: aboutUs
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
        const aboutUs = await AboutUs.findOneAndUpdate(condition, doc, option);
        res.json(aboutUs);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}