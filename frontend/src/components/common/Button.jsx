function Button({
    children , 
    variant = "primary",
    className = "",
    ...props
}){

    const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2";
    const variants = {
    primary:
      "bg-[var(--accent)] text-white hover:-translate-y-0.5 hover:opacity-90",

    secondary:
      "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]",
  };
    return(
        <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
    );
}

export default Button;