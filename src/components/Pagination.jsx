import { twMerge } from "tailwind-merge";

export default function Pagination({ pageNum, skip, onSkipChange }) {
  if (!pageNum) return null;

  return (
    <div className="join">
      {[...Array(pageNum).keys()].map((i) => (
        <button
          className={twMerge("join-item btn", i === skip && "btn-active")}
          key={i}
          onClick={() => onSkipChange(i)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
