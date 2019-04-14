const Box = require('./../models/Box');

class BoxController {
  async store(req, res) {
    const box = await Box.create({ title: 'reacttest' });

    return res.send.json(box);
  }
}

module.exports = new BoxController();
