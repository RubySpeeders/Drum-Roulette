import pkg from "pg";
const { Client } = pkg;

export const handler = async (event) => {
  console.log("Lambda function invoked:", new Date().toISOString());

  // Log the event data
  console.log("Event data:", JSON.stringify(event));

  // Use environment variables for database configuration
  const dbConfig = {
    host: process.env.HOST || "localhost", // Use environment variable or default to 'localhost'
    database: process.env.DB || "your_database_name", // Use environment variable or provide a default
    user: process.env.USER || "your_database_user", // Use environment variable or provide a default
    password: process.env.PW || "your_database_password", // Use environment variable or provide a default
    port: process.env.PORT, // Default PostgreSQL port
    ssl: {
      rejectUnauthorized: false, // Set to true if you want to reject unauthorized certificates
    },
  };

  try {
    // Create a new PostgreSQL client
    const client = new Client(dbConfig);

    // Connect to the database
    await client.connect();

    const branchName = "Army";

    // Your SQL query
    const query = `SELECT musician_id, first_name, last_name, ensemble.ensemble_id, ensemble_name, branch.branch_id, branch_name, nickname.nickname_id, nickname.nickname, musician.image FROM musician INNER JOIN ensemble ON ensemble.ensemble_id = musician.ensemble_id INNER JOIN branch ON ensemble.branch_id = branch.branch_id LEFT JOIN nickname ON branch.nickname_id = nickname.nickname_id WHERE branch.branch_name LIKE $1`;

    // Execute the query
    const result = await client.query(query, [branchName]);

    // Log the results (for demonstration)
    console.log("Query Result:", result.rows);

    // transform the data into json that the front end can consume easily.
    // In other words, combine returned resources in order to modify the returned json structure
    const transformedData = result.rows.map((row) => ({
      musician_id: row.musician_id,
      first_name: row.first_name,
      last_name: row.last_name,
      ensemble: {
        ensemble_id: row.ensemble_id,
        ensemble_name: row.ensemble_name,
      },
      branch: {
        branch_id: row.branch_id,
        branch_name: row.branch_name,
        branch_nickname: row.nickname,
      },
      image: row.image,
    }));

    // Close the client connection
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Query executed successfully",
        musicians: transformedData,
      }),
    };
  } catch (error) {
    console.error("Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred",
        error: error.message,
      }),
    };
  }
};
