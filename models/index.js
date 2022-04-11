const Pool = require("pg").Pool;
const pool = new Pool({
    user: "Blackforce",
    host: "blackforce.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
    database: "blackforcetraining2022",
    password: "BlackforceTraining2022",
    port: 5432,
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

// if no error on idle client, pool connects to database
pool.connect((err, client, done) => {
  //if there is an error with our database connection strings
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  //if no error then we have successfully connected
  console.log("Connected to database");
  // do not call done(); - because we want to use this connection
  // to create/insert/delete or select records from our database
  // sometime we might also want to export this connection for other resources
});

// now lets create a new table called BlackforceSahmie2022 - replace Sahmie with your name
pool.query(
  `CREATE TABLE IF NOT EXISTS brandsblack(
      ID SERIAL PRIMARY KEY,
      Manufacturer VARCHAR(40) NOT NULL,
      Model VARCHAR (40) NOT NULL,
      Color VARCHAR(40) NOT NULL,
      Year INTEGER NOT NULL)`,
  
      (err, res) => {
    if (err) {
      console.log(err);
      console.log("Error or issue with table creation");
    } else {
      console.log("brands Table Created Successfully"); // replace Sahmie with your name
      // console.log(res);
    }
  }
);

// pool.end();

// export connection
module.exports = pool;