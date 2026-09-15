import { NextRequest, NextResponse } from "next/server";
import { searchRecipes } from "@/lib/recipes";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (!query) {
    return NextResponse.json({ recipes: [] });
  }

  try {
    const recipes = await searchRecipes(query);

    return NextResponse.json({
      recipes: recipes.map((recipe) => ({
        id: recipe.id,
        title: recipe.title,
        original_title: recipe.original_title,
        category: recipe.category,
        duration: recipe.duration,
        servings: recipe.servings,
        notes: recipe.notes,
        image: recipe.image,
      })),
    });
  } catch (error) {
    console.error("Recipe search failed:", error);

    return NextResponse.json(
      { error: "Die Rezeptsuche konnte nicht ausgeführt werden." },
      { status: 500 },
    );
  }
}
