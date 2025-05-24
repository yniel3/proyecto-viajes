import Sequilize from "sequelize";
process.loadEnvFile();

const miDB = new Sequilize( process.env.DATA_BASE_URL, {
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default miDB