import Link from 'next/link';

const BoldLink = ({ href, children }: { href?: string; children: React.ReactNode }) => {
  if (href)
    return (
      <Link className="font-semibold text-stone-900 underline" href={href} target="_blank">
        {children}
      </Link>
    );

  return <span className="font-semibold text-stone-900">{children}</span>;
};

export default BoldLink;