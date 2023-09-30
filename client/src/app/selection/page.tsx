import Selector from "@/components/selector";

async function getMusicians() {
  const res = await fetch(
    `https://fryxz3d12d.execute-api.us-east-1.amazonaws.com/production/musicians/navy`
  );

  return res.json();
}

export default async function Selection() {
  const musiciansData = await getMusicians();

  return <Selector musiciansData={musiciansData.musicians} />;
}
