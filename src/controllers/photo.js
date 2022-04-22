const multer = require('multer');
const multerConfig = require('../config/multerConfig');
const Photo = require('../models/Photos');

const upload = multer(multerConfig).single('file');

module.exports = {
  async create(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, key: filename, location: url } = req.file;
        const { profile_id } = req.body;
        const photo = await Photo.create({
          originalname, filename, url, profile_id,
        });

        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: ['Dados estão incorretos'],
        });
      }
    });
  },
  async show(req, res) {
    try {
      const photo = await Photo.findByPk(req.params.id);

      return res.json(photo);
    } catch (e) {
      return res.json(null);
    }
  },
  async delete(req, res) {
    try {
      const photo = await Photo.findByPk(req.params.id);

      if (!photo) {
        return res.status(400).json({
          errors: ['Foto não existe'],
        });
      }

      await photo.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
};
