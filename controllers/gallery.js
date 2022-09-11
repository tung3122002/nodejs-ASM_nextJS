import Gallery from '../models/gallery'
// API thêm sản phẩm
export const create = async (req, res) => {
    console.log(req.body);
    try {
        const gallery = await new Gallery(req.body).save();
        console.log('gallery', gallery);
        res.json(gallery)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}
// API list sản phẩm
export const list = async (req, res) => { 
    try {
        const gallerys = await Gallery.find().sort({createAt: -1});
        res.json(gallerys);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const gallery = await Gallery.findOne(filter);
        res.json(gallery);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const gallery = await Gallery.findOneAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: gallery
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
        const gallery = await Gallery.findOneAndUpdate(condition, doc, option);
        res.json(gallery);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}