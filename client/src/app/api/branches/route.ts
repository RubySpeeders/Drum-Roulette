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
    const query = "SELECT * FROM branch";

    // Execute the query
    const result = await client.query(query);

    // Close the client connection
    await client.end();

    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
