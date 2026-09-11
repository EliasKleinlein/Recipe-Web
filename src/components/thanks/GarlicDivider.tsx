import { GarlicDrawing } from "./DrawnDecorations";

export default function GarlicDivider() {
  return (
    <div className="my-7 flex items-center justify-center text-[#8b6847]">
      <svg
        viewBox="0 0 170 30"
        className="h-8 w-full max-w-[170px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M2 17C32 4 54 27 91 15C119 7 137 11 168 17" />
      </svg>

      <GarlicDrawing className="-mx-2 h-10 w-12 shrink-0" />

      <svg
        viewBox="0 0 170 30"
        className="h-8 w-full max-w-[170px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M2 17C33 11 51 7 79 15C116 27 138 4 168 17" />
      </svg>
    </div>
  );
}
