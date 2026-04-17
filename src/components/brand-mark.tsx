type BrandMarkProps = {
  className?: string
  accentClassName?: string
}

export function BrandMark({
  className = '',
  accentClassName = '',
}: BrandMarkProps) {
  return (
    <span className={`font-semibold tracking-[0.22em] lowercase ${className}`.trim()}>
      copete
      <span className={`text-[var(--accent)] ${accentClassName}`.trim()}>.app</span>
    </span>
  )
}
