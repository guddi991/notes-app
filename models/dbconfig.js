
const dotenv = require('dotenv')
dotenv.config();

const { Sequelize,DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,{
        HOST: process.env.HOST,
        dialect:'mysql',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        dialectOptions: {
            connectTimeout: 60000 // Increase connection timeout to 60 seconds
        }

    }
)

const connectDB = async ()=>{
    try{
        await sequelize.authenticate()
        .then((req)=>{
            console.log("DB connected successfully")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
}

connectDB();


// 
const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.notes = require('./notesModel')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log("DB synced !")
})


module.exports = db