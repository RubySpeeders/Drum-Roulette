import { NextResponse } from "next/server";

import pkg from "pg";
const { Client } = pkg;

const dbConfig = require("../../dbConfig");

export const GET = async (
  req: Request,
  { params }: { params: { branch_id: String } }
) => {
  try {
    // Create a new PostgreSQL client
    const client = new Client(dbConfig);

    // Connect to the database
    await client.connect();

    const branchId = Number(params.branch_id);

    // Your SQL query
    const query = "SELECT * FROM ensemble WHERE branch_id = $1";

    // Execute the query
    const result = await client.query(query, [branchId]);

    // Close the client connection
    await client.end();

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error:", error);

    return NextResponse.json({
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred",
        error,
      }),
    });
  }
};
