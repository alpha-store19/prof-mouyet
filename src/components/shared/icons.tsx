type IconProps = React.SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21.5 4L2.8 10.6c-.8.3-.8 1.5 0 1.8l4.6 1.5 1.6 5.2c.2.8 1.2 1 1.8.3l2.3-2.4 4.7 3.5c.6.5 1.5.1 1.7-.6L22.4 5c.2-.7-.4-1.3-1-1z" />
      <path d="M7.4 13.8l9.8-6.4c.4-.3.9.2.5.6l-7.5 6.9" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.7" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h4l1.5 4.5-2.2 1.6a12 12 0 0 0 5.6 5.6l1.6-2.2L20 15v4a1.5 1.5 0 0 1-1.7 1.5C10.4 19.6 4.4 13.6 3.5 5.7A1.5 1.5 0 0 1 5 4z" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="18" cy="18" r="2.4" />
      <path d="M8.2 10.9l7.6-3.8M8.2 13.1l7.6 3.8" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8 14l1.8 1.8L15.5 10.5" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 6.5C10.5 4.8 8.2 4 4.5 4v14c3.7 0 6 .8 7.5 2.5 1.5-1.7 3.8-2.5 7.5-2.5V4c-3.7 0-6 .8-7.5 2.5z" />
      <path d="M12 6.5v14" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3L19 19M19 5l-1.7 1.7M6.7 17.3L5 19" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8.5" r="3.4" />
      <path d="M3.5 19c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5" />
      <path d="M15.5 5.6a3.4 3.4 0 0 1 0 5.8M17.5 14.8c1.7.7 2.8 2 3.2 4.2" />
    </svg>
  );
}

export function SchoolIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 19h18M5 19V9l7-4 7 4v10" />
      <path d="M9 12h6M9 15.5h6M12 8v.5" />
    </svg>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 6.5h6l2 2h9v11h-17z" />
    </svg>
  );
}

export function BookStackIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.5h16v13H4z" />
      <path d="M8 5.5v11M12 5.5v11M16 5.5v11" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

export function LightbulbIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.4 10.9c.7.5 1.1 1.2 1.3 2.1h4.2c.2-.9.6-1.6 1.3-2.1A6 6 0 0 0 12 3z" />
    </svg>
  );
}

export function PencilIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20l1.2-4.2L16.3 4.7a2 2 0 0 1 2.8 2.8L8 18.7 4 20z" />
      <path d="M14.3 6.7l3 3" />
    </svg>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3.5h6a1.5 1.5 0 0 1 1.5 1.5v1H7.5V5A1.5 1.5 0 0 1 9 3.5z" />
      <rect x="5.5" y="6" width="13" height="14.5" rx="2" />
      <path d="M9 11h6M9 14.5h6M9 18h3.5" />
    </svg>
  );
}

export function ChartUpIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20h16" />
      <path d="M6 16.5l4-5 3 3 5-7" />
      <path d="M14 7.5h4v4" />
    </svg>
  );
}

export function ChartBarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20h16" />
      <path d="M8 16v-6M12 16V8M16 16v-9" />
    </svg>
  );
}

export function FlaskIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3h6M10 3v5l-4.2 8.6A1.8 1.8 0 0 0 7.4 19h9.2a1.8 1.8 0 0 0 1.6-2.4L14 8V3" />
      <path d="M7.6 13.5h8.8" />
    </svg>
  );
}

export function TriangleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5L21 18.5H3z" />
      <path d="M12 7.5v4.5M12 14v2" />
    </svg>
  );
}

export function CalculatorIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 12.3h.01M12 12.3h.01M15 12.3h.01M9 15.7h.01M12 15.7h.01M15 15.7h.01" />
    </svg>
  );
}

export function BookOpenIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 5.5c3.3-.9 5.8.4 9.5 2.4 3.7-2 6.2-3.3 9.5-2.4v13c-3.3-.9-5.8.4-9.5 2.4-3.7-2-6.2-3.3-9.5-2.4z" />
      <path d="M12 7.9v13" />
    </svg>
  );
}

export function FileIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5L14 3z" />
      <path d="M14 3v4.5h4.5" />
      <path d="M9 12h6M9 15.5h6" />
    </svg>
  );
}

export function FileCheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5z" />
      <path d="M14 3v4.5h4.5" />
      <path d="M9.5 14l2 2 3-3.5" />
    </svg>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 10L12 5.5 21.5 10 12 14.5z" />
      <path d="M6.5 12.5V17c0 1 2.5 3 5.5 3s5.5-2 5.5-3v-4.5" />
      <path d="M21.5 10v5" />
    </svg>
  );
}