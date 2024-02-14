import { NextResponse } from "next/server";

import pkg from "pg";
const { Client } = pkg;

const dbConfig = require("../dbConfig");

export const GET = async () => {
  try {
    // Create a new PostgreSQL client
    const client = new Client(dbConfig);

    // Connect to the database
    await client.connect();

    // Your SQL query
    const query = "SELECT * FROM ensemble";

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
