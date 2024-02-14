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
    const query = "SELECT * FROM branch";

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
