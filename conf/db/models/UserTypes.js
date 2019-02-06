console.log("Setting up user types..");
module.exports = function(sequelize, DataTypes){
  var UserTypes = sequelize.define('UserTypes', {
      user_type_id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      user_type_name: {
          type: DataTypes.STRING,
          allowNull: false
      }
   },{
     freezeTableName:true,
     tableName:'UserTypes',
     classMethods:{
       associate:function(models){
         console.log(models);
         UserTypes.belongsTo(models.Users,{
           foreignKey:user_type_id,
           foreignKeyConstraint:true
         });
       }
     }
   });
   return UserTypes;
};
