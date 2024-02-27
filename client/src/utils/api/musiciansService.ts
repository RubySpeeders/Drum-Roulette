import { Musician } from "@/interfaces/musician";

export async function getMusicians() {
  return await fetch(`${process.env.BASEURL}/api/musicians`);
}

export async function createMusician(musician: Musician) {
  //create a musician
  //hit the endpoint, send the musician object to BE
  //return the created musician
  return [];
}
