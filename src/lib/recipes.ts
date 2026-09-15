import { sql } from "@/lib/db";
import { RecipeIdSchema, RecipeSchema } from "@/schemas/recipeSchema";
import { z } from "zod";

type Recipe = z.infer<typeof RecipeSchema>;

const RENKE_RECIPE_IMAGES: ReadonlyArray<{
  names: readonly string[];
  image: string;
}> = [
  {
    names: ["schweinehaxe", "404 knusperkruste"],
    image: "/images/recipes/schweinehaxe-404.webp",
  },
  {
    names: ["debugger-bolognese", "debugger bolognese"],
    image: "/images/recipes/spaghetti-debugger.webp",
  },
  {
    names: ["merge-conflict", "merge conflict"],
    image: "/images/recipes/lasagne-merge-conflict.webp",
  },
  {
    names: ["stack overflow"],
    image: "/images/recipes/kartoffelsuppe-stack-overflow.webp",
  },
  {
    names: ["boolean-beast", "boolean beast"],
    image: "/images/recipes/burger-boolean-beast.webp",
  },
  {
    names: ["commit-crash", "commit crash"],
    image: "/images/recipes/curry-commit-crash.webp",
  },
  {
    names: ["stable release"],
    image: "/images/recipes/kaesekuchen-stable-release.webp",
  },
  {
    names: ["dark mode"],
    image: "/images/recipes/schokokuchen-dark-mode.webp",
  },
  {
    names: ["runtime error"],
    image: "/images/recipes/brownies-runtime-error.webp",
  },
  {
    names: ["promise-all", "promise all"],
    image: "/images/recipes/pancakes-promise-all.webp",
  },
  {
    names: ["while-schleife", "while schleife"],
    image: "/images/recipes/wraps-while-schleife.webp",
  },
  {
    names: ["404-kekse", "404 kekse", "not found"],
    image: "/images/recipes/404-kekse-not-found.webp",
  },
];

function withRenkeRecipeImage(recipe: Recipe): Recipe {
  const searchableName = `${recipe.title} ${recipe.original_title}`.toLocaleLowerCase("de-DE");
  const illustration = RENKE_RECIPE_IMAGES.find(({ names }) =>
    names.some((name) => searchableName.includes(name)),
  );

  return illustration ? { ...recipe, image: illustration.image } : recipe;
}

export async function getRecipes() {
  const recipes: unknown = await sql`
    SELECT *
    FROM recipes
    ORDER BY created_at DESC
  `;

  return z.array(RecipeSchema).parse(recipes).map(withRenkeRecipeImage);
}

export async function searchRecipes(query: string) {
  const normalizedQuery = query.trim();

  if (!normalizedQuery) {
    return [];
  }

  const pattern = `%${normalizedQuery}%`;

  const recipes: unknown = await sql`
    SELECT *
    FROM recipes
    WHERE
      title ILIKE ${pattern}
      OR original_title ILIKE ${pattern}
      OR category ILIKE ${pattern}
      OR ingredients ILIKE ${pattern}
      OR notes ILIKE ${pattern}
      OR tags ILIKE ${pattern}
    ORDER BY created_at DESC
    LIMIT 50
  `;

  return z.array(RecipeSchema).parse(recipes).map(withRenkeRecipeImage);
}

export async function getRecipeById(id: number) {
  const recipeId = RecipeIdSchema.parse(id);
  const rows: unknown[] = await sql`
    SELECT *
    FROM recipes
    WHERE id = ${recipeId}
    LIMIT 1
  `;

  return rows[0] ? withRenkeRecipeImage(RecipeSchema.parse(rows[0])) : null;
}
