type RecipeDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecipeDetailPage({
  params,
}: RecipeDetailPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <h1 className="text-3xl font-bold">Rezept #{id}</h1>
      <p className="mt-4 text-zinc-400">
        Die vollständige Detailseite kommt in Issue #13.
      </p>
    </main>
  );
}
