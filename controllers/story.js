import Story from '../models/story'
// API thêm sản phẩm
export const create = async (req, res) => {
    console.log(req.body);
    try {
        const story = await new Story(req.body).save();
        console.log('story', story);
        res.json(story)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}
// API list sản phẩm
export const list = async (req, res) => { 
    try {
        const story = await Story.find().sort({createAt: -1});
        res.json(story);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const story = await Story.findOne(filter);
        res.json(story);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const story = await Story.findOneAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: story
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
        const story = await Story.findOneAndUpdate(condition, doc, option);
        res.json(story);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}