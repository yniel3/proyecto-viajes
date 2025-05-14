import Sequilize from "sequelize";

const miDB = new Sequilize("proyecto", "root", "Hola.1", {
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
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