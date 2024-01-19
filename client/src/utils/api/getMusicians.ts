export default async function getMusicians(name: string) {
  //TODO would be nice to make request with ID instead of name
  const res = await fetch(
    `https://fryxz3d12d.execute-api.us-east-1.amazonaws.com/production/musicians/${name}`
  );

  return res.json();
}
