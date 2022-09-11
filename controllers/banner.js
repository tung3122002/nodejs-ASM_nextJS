import Banner from '../models/banner'
// API thêm sản phẩm
export const create = async (req, res) => {
    console.log(req.body);
    try {
        const banner = await new Banner(req.body).save();
        console.log('banner', banner);
        res.json(banner)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}
// API list sản phẩm
export const list = async (req, res) => { 
    try {
        const banners = await Banner.find().sort({createAt: -1});
        res.json(banners);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const banner = await Banner.findOne(filter);
        res.json(banner);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const banner = await Banner.findOneAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: banner
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
        const banner = await Banner.findOneAndUpdate(condition, doc, option);
        res.json(banner);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}