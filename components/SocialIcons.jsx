import Link from 'next/link';

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/></svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.4 21v-7h2.7l.5-3h-3.2V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.2-.1-2.4-.1-2.4 0-4 1.5-4 4.2V11H8v3h2.6v7h2.8Z" fill="currentColor"/></svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.5a2.6 2.6 0 0 0-1.8-1.8C17.5 6.2 12 6.2 12 6.2s-5.5 0-7.2.5A2.6 2.6 0 0 0 3 8.5 27 27 0 0 0 2.6 12c0 1.2.1 2.4.4 3.5a2.6 2.6 0 0 0 1.8 1.8c1.7.5 7.2.5 7.2.5s5.5 0 7.2-.5a2.6 2.6 0 0 0 1.8-1.8c.3-1.1.4-2.3.4-3.5s-.1-2.4-.4-3.5ZM10.2 15.3V8.7l5.7 3.3-5.7 3.3Z" fill="currentColor"/></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 8.7H3.7V20h2.7V8.7Zm.2-3.5a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0ZM20.3 13c0-3.4-1.8-5-4.3-5-2 0-2.8 1.1-3.3 1.8V8.7H10V20h2.7v-6c0-1.6.3-3.1 2.3-3.1s2 1.8 2 3.2V20h2.7l.6-7Z" fill="currentColor"/></svg>
  ),
};

export default function SocialIcons({ className = '', linkClassName = '', iconOnly = false }) {
  const items = [
    { label: 'Instagram', href: '', key: 'instagram' },
    { label: 'Facebook', href: '', key: 'facebook' },
    { label: 'YouTube', href: '', key: 'youtube' },
    { label: 'LinkedIn', href: '', key: 'linkedin' },
  ];

  return (
    <div className={`social-row ${className}`.trim()}>
      {items.map((item) => {
        const content = (
          <>
            <span className="social-icon">{icons[item.key]}</span>
            {!iconOnly && <span>{item.label}</span>}
          </>
        );

        return item.href ? (
          <Link key={item.key} href={item.href} className={`social-link ${linkClassName}`.trim()} target="_blank" rel="noreferrer">
            {content}
          </Link>
        ) : (
          <span key={item.key} className={`social-link social-link-static ${linkClassName}`.trim()} aria-label={item.label}>
            {content}
          </span>
        );
      })}
    </div>
  );
}
