
// notes table

const sequelize = require('sequelize')

module.exports = (sequelize,DataTypes) =>{
    const Notes = sequelize.define("Notes",{
        title:{
            type:DataTypes.STRING,
            allowNull: false
        },
        description:{
            type:DataTypes.STRING
        },

    },{
        timeStamps:true,
        createdAt:'created_at',
        updatedAt:'updated_at'
    })
    return Notes
}
