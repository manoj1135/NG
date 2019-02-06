console.log("Setting up users..");
module.exports = function(sequelize, DataTypes){
  var Users = sequelize.define('Users', {
      id: {
          field:"user_id",
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      userName: {
          field:"user_name",
          unique: true,
          type: DataTypes.STRING,
          allowNull: false
      },
      password: {
          field:"user_password",
          type: DataTypes.STRING,
          unique: false,
          allowNull: true
      },
      firstName: {
          field:"user_fname",
          type: DataTypes.STRING,
          unique: false,
          allowNull: true
      },
      lastName: {
          field:"user_lname",
          type: DataTypes.STRING,
          unique: false,
          allowNull: true
      },
      dob: {
          field:"user_dob",
          type: DataTypes.DATE,
          unique: false,
          allowNull: true
      },
      userType: {
          field:"user_type_id",
          type: DataTypes.INTEGER,
          unique: false,
          allowNull: true
      },
      userRole: {
          field:"user_role_id",
          type: DataTypes.INTEGER,
          unique: false,
          allowNull: true
      },
      createdBy: {
        field:"created_by",
        type: DataTypes.STRING,
        unique: false,
        allowNull: true
      },
      modifiedBy: {
        field:"modified_by",
        type: DataTypes.STRING,
        unique: false,
        allowNull: true
      }
   }
  );
   require("../../../src/dbHelper/UserDBHelper")(Users);
   return Users;
};
