function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--accent)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;