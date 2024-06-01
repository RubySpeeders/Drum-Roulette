export default async function getAllInstruments() {
  const res = await fetch(`${process.env.BASEURL}/api/instruments`);
  return res.json();
}
