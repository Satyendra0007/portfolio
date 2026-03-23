import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';

const socialLinks = [
  {
    href: 'https://github.com/Satyendra0007',
    label: 'GitHub',
    icon: <FaGithub className="text-[1.15rem]" />,
  },
  {
    href: 'https://www.linkedin.com/in/satyendra-kumar-36163a2a9',
    label: 'LinkedIn',
    icon: <FaLinkedin className="text-[1.15rem]" />,
  },
  {
    href: 'mailto:skchnadrawansi03@gmail.com',
    label: 'Email',
    icon: <BiLogoGmail className="text-[1.3rem]" />,
  },
  {
    href: 'https://www.instagram.com/satyendra0.3?igsh=bW43dDdsendsa3Zn',
    label: 'Instagram',
    icon: <FaInstagram className="text-[1.15rem]" />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden px-4 pb-6 pt-6 md:px-6 md:pb-8">
      <div className="absolute inset-x-0 bottom-0 top-6 -z-10 rounded-t-[2rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0),_rgba(254,242,242,0.6)_18%,_rgba(255,255,255,1)_100%)]" />
      <div className="absolute left-6 top-12 -z-10 h-28 w-28 rounded-full bg-red-200/35 blur-3xl" />
      <div className="absolute right-6 top-10 -z-10 h-32 w-32 rounded-full bg-orange-200/35 blur-3xl" />

      <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-red-100/80 bg-white/88 px-5 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.1)] backdrop-blur-xl md:px-7 md:py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black text-slate-900">Satyendra Kumar</p>
            <p className="mt-1 text-sm text-slate-600">Building clean and practical web experiences.</p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50 hover:text-red-700"
              >
                <span className="text-slate-900 transition-colors duration-300 group-hover:text-red-600">{icon}</span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:text-sm">
          <p>© {currentYear} Satyendra Kumar</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
