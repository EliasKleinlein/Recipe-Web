import { notFound } from "next/navigation";
import EntryForm from "./EntryForm";

const people: Record<string, string> = {
  muju: "Muju",
  elias: "Elias",
  eric: "Eric",
  marco: "Marco",
  christoph: "Christopher",
  kevin: "Kevin",
  niko: "Niko",
  marlin: "Marlin",
  daniel: "Daniel",
  pavel: "Pavel",
};

type Props = {
  params: Promise<{ person: string }>;
  searchParams: Promise<{ token?: string }>;
};

export default async function EntryPage({
  params,
  searchParams,
}: Props) {
  const { person } = await params;
  const { token = "" } = await searchParams;

  const name = people[person];

  if (!name) {
    notFound();
  }

  return (
    <EntryForm
      personId={person}
      name={name}
      token={token}
    />
  );
}
