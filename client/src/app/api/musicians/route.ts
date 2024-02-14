import { NextResponse } from "next/server";

import pkg from "pg";
const { Client } = pkg;

export const GET = async () => {
  // Use environment variables for database configuration
  const dbConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER, // Use environment variable or provide a default
    password: process.env.DB_PW, // Use environment variable or provide a default
    port: 5432, // Default PostgreSQL port
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
    const query = `SELECT musician_id, first_name, last_name, ensemble.ensemble_id, ensemble_name, branch.branch_id, branch_name, nickname.nickname_id, nickname.nickname, musician.image FROM musician INNER JOIN ensemble ON ensemble.ensemble_id = musician.ensemble_id INNER JOIN branch ON ensemble.branch_id = branch.branch_id LEFT JOIN nickname ON branch.nickname_id = nickname.nickname_id`;

    // Execute the query
    const result = await client.query(query);

    // Close the client connection
    await client.end();

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error:", error);

    return NextResponse.json({
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred",
        // error: error.message,
      }),
    });
  }
};
