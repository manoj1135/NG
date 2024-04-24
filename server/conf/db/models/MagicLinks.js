module.exports = function(sequelize, DataTypes){
  var MagicLinks = sequelize.define('MagicLinks', {
        id: {
            field:"link_id",
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        linkUrl: {
            field:"link_url",
            type: DataTypes.STRING,
            allowNull: false
        },
        linkUser: {
            field:"link_user",
            unique: true,
            type: DataTypes.STRING,
            allowNull: false
        },
        generatedBy: {
            field:"generated_by",
            type: DataTypes.STRING,
            allowNull: false
        }
    }
  )
//   require("../../../src/dbHelper/MagicLinksDBHelper")(MagicLinks);
  return MagicLinks;
}
