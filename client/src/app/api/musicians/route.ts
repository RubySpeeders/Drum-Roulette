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
