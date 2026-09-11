type DrawingProps = {
  className?: string;
};

export function GarlicDrawing({ className = '' }: DrawingProps) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M60 26c-5 7-8 14-8 20" />
      <path d="M60 26c6 5 10 10 11 17" />
      <path d="M57 28c-6-8-5-14-2-20" />
      <path d="M62 28c4-8 5-14 3-20" />
      <path d="M59 43c-18-12-36 4-31 24 3 13 14 22 31 22" />
      <path d="M61 43c18-12 36 4 31 24-3 13-14 22-31 22" />
      <path d="M59 46c-11 3-15 14-12 29 2 8 6 13 12 14" />
      <path d="M61 46c11 3 15 14 12 29-2 8-6 13-12 14" />
      <path d="M59 46v43" />
    </svg>
  );
}

export function OnionDrawing({ className = '' }: DrawingProps) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M60 25c-1-9 3-15 8-20" />
      <path d="M60 25c1-9-3-15-8-20" />
      <path d="M59 27c-4 6-14 10-21 19-15 20-5 44 22 47" />
      <path d="M61 27c4 6 14 10 21 19 15 20 5 44-22 47" />
      <path d="M60 31c-7 12-9 25-7 39 1 10 4 17 7 23" />
      <path d="M60 31c7 12 9 25 7 39-1 10-4 17-7 23" />
      <path d="M47 91c9 3 17 3 26 0" />
    </svg>
  );
}

export function SpoonDrawing({ className = '' }: DrawingProps) {
  return (
    <svg
      viewBox="0 0 70 180"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <ellipse cx="35" cy="36" rx="23" ry="30" />
      <path d="M35 66v100" />
      <path d="M31 166c0 7 8 7 8 0" />
    </svg>
  );
}

export function HerbDrawing({ className = '' }: DrawingProps) {
  return (
    <svg
      viewBox="0 0 130 130"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M65 115C66 78 65 45 66 15" />
      <path d="M65 90C45 82 37 69 33 58" />
      <path d="M65 70C83 62 91 50 96 37" />
      <path d="M65 49C47 43 40 33 36 23" />
      <path d="M44 70c-13 1-21-5-25-15 13-1 21 5 25 15Z" />
      <path d="M83 57c13-1 21-8 24-18-13 0-20 7-24 18Z" />
      <path d="M47 39c-11-1-17-7-19-16 11 1 17 7 19 16Z" />
    </svg>
  );
}
