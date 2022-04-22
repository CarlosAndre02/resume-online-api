const { Sequelize, Model } = require('sequelize');
const aws = require('aws-sdk');

module.exports = class Photo extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio.',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio.',
            },
          },
        },
        url: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isUrl: {
              msg: 'Url inválido',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeDestroy', async (photo) => {
      const s3 = new aws.S3();

      s3.deleteObject({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: photo.filename,
      })
        .promise()
        .then((response) => {
          console.log(response.status);
        })
        .catch((response) => {
          console.log(response.status);
        });
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Profile);
  }
};
