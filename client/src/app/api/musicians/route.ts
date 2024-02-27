import { NextResponse } from "next/server";

import { Musician } from "@/interfaces/musician";

import pkg from "pg";
const { Client } = pkg;

const dbConfig = require("../dbConfig");

export const GET = async () => {
  try {
    // Create a new PostgreSQL client
    const client = new Client(dbConfig);

    // Connect to the database
    await client.connect();

    // SQL query
    const query = `SELECT musician_id, first_name, last_name, ensemble.ensemble_id, ensemble_name, branch.branch_id, branch_name, nickname.nickname_id, nickname.nickname, musician.image FROM musician INNER JOIN ensemble ON ensemble.ensemble_id = musician.ensemble_id INNER JOIN branch ON ensemble.branch_id = branch.branch_id LEFT JOIN nickname ON branch.nickname_id = nickname.nickname_id`;

    // Execute the query
    const result = await client.query(query);

    // Close the client connection
    await client.end();

    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Ouch, GET is not working my friend" },
      { status: 500 }
    );
  }
};

export const POST = async (musicians: Musician[]) => {
  // SQL query
  const query = `INSERT INTO musician etc etc etc`;
};
