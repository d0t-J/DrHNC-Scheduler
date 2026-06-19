interface SocialIconProps {
  href: string;
  label: string;
  className?: string;
  iconClassName?: string;
  children: React.ReactNode;
}

function SocialIconLink({
  href,
  label,
  className = "",
  children,
}: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center transition-colors no-underline hover:no-underline ${className}`}
    >
      {children}
    </a>
  );
}

export function FacebookIcon({ href, className = "" }: { href: string; className?: string }) {
  return (
    <SocialIconLink href={href} label="Facebook" className={`text-ink-soft hover:text-sage-deep ${className}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    </SocialIconLink>
  );
}

export function YouTubeIcon({ href, className = "" }: { href: string; className?: string }) {
  return (
    <SocialIconLink href={href} label="YouTube" className={`text-ink-soft hover:text-sage-deep ${className}`}>
      <svg
        width="22"
        height="16"
        viewBox="0 0 24 17"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.495 2.656a3.016 3.016 0 0 0-2.117-2.136C19.456 0 12 0 12 0S4.544 0 2.622.52A3.016 3.016 0 0 0 .505 2.656 31.88 31.88 0 0 0 0 8.5a31.88 31.88 0 0 0 .505 5.844 3.016 3.016 0 0 0 2.117 2.136C4.544 17 12 17 12 17s7.456 0 9.378-.52a3.016 3.016 0 0 0 2.117-2.136A31.88 31.88 0 0 0 24 8.5a31.88 31.88 0 0 0-.505-5.844zM9.545 12.065V4.935L15.818 8.5l-6.273 3.565z" />
      </svg>
    </SocialIconLink>
  );
}
