interface SocialIconProps {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

function SocialIconLink({
  href,
  label,
  className = "",
  children,
  external = true,
}: SocialIconProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={label}
      className={`inline-flex items-center justify-center transition-colors no-underline hover:no-underline ${className}`}
    >
      {children}
    </a>
  );
}

export function FacebookIcon({ href, className = "" }: { href: string; className?: string }) {
  return (
    <SocialIconLink href={href} label="Facebook" className={`text-ink-soft hover:text-[#1877F2] ${className}`}>
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
    <SocialIconLink href={href} label="YouTube" className={`text-ink-soft hover:text-[#FF0000] ${className}`}>
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

export function WhatsAppIcon({ href, className = "" }: { href: string; className?: string }) {
  return (
    <SocialIconLink href={href} label="WhatsApp" className={`text-ink-soft hover:text-[#25D366] ${className}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2a9.77 9.77 0 0 0-8.36 14.83L2.24 22l5.3-1.39A9.77 9.77 0 1 0 12.04 2Zm0 17.76a8.05 8.05 0 0 1-4.1-1.12l-.3-.18-3.15.83.84-3.07-.2-.32a8.05 8.05 0 1 1 6.91 3.86Zm4.42-5.71c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.17-1.39-1.31-1.63-.14-.24-.02-.37.1-.48.11-.11.24-.27.36-.41.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.41-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.65.58.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </SocialIconLink>
  );
}

export function EmailIcon({ href, className = "" }: { href: string; className?: string }) {
  return (
    <SocialIconLink
      href={href}
      label="Email Dr. Hasan Nasir Cheema"
      external={false}
      className={`text-ink-soft hover:text-[#EA4335] ${className}`}
    >
      <svg
        width="21"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 3.24-8 5-8-5V6l8 5 8-5v1.24Z" />
      </svg>
    </SocialIconLink>
  );
}
