import pkg from "pg";
const { Client } = pkg;

//dude where's this message!
//another message. count ++

export const handler = async (event) => {
  console.log("Lambda function invoked:", new Date().toISOString());

  // Log the event data
  console.log("Event data:", JSON.stringify(event));

  // Use environment variables for database configuration
  const dbConfig = {
    host: process.env.HOST || "localhost",
    database: process.env.DB || "your_database_name",
    user: process.env.USER || "your_database_user",
    password: process.env.PW || "your_database_password",
    port: process.env.PORT,
    ssl: {
      rejectUnauthorized: false, // Set to true if you want to reject unauthorized certificates
    },
  };

  try {
    // Create a new PostgreSQL client
    const client = new Client(dbConfig);

    // Connect to the database
    await client.connect();

    // Your SQL query
    const query =
      "SELECT user_id, first_name, last_name, ensemble.ensemble_id, ensemble_name, branch.branch_id, branch_name, image FROM users INNER JOIN ensemble ON ensemble.ensemble_id = users.ensemble_id INNER JOIN branch ON ensemble.branch_id = branch.branch_id";

    // Execute the query
    const result = await client.query(query);

    // Log the results (for demonstration)
    console.log("Query Result:", result.rows);

    // Close the client connection
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Query executed successfully",
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
