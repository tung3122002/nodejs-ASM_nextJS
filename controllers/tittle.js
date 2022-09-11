import Tittle from '../models/tittle'
// API thêm sản phẩm
export const create = async (req, res) => {
    console.log(req.body);
    try {
        const tittle = await new Tittle(req.body).save();
        console.log('tittle', tittle);
        res.json(tittle)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}
// API list sản phẩm
export const list = async (req, res) => { 
    try {
        const tittle = await Tittle.find().sort({createAt: -1});
        res.json(tittle);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const tittle = await Tittle.findOne(filter);
        res.json(tittle);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const tittle = await Tittle.findOneAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: tittle
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
        const tittle = await Tittle.findOneAndUpdate(condition, doc, option);
        res.json(tittle);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}