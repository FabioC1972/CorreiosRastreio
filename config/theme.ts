export const theme = {
  colors: {
    brand: {
      50: "#EFF6FF",
      100: "#DBEAFE",
      200: "#BFDBFE",
      300: "#93C5FD",
      400: "#60A5FA",
      500: "#2563EB",
      600: "#1D4ED8",
      700: "#163D8C",
      800: "#102F70",
      900: "#08245B",
      950: "#061A42",
    },

    accent: {
      yellow: "#FFD43B",
      yellowSoft: "#FFF7CC",
      orange: "#F97316",
      orangeHover: "#EA580C",
    },

    neutral: {
      white: "#FFFFFF",
      background: "#F8FAFC",
      surface: "#FFFFFF",
      border: "#E2E8F0",
      muted: "#64748B",
      text: "#0F172A",
    },

    feedback: {
      success: "#16A34A",
      successSoft: "#DCFCE7",
      warning: "#D97706",
      warningSoft: "#FEF3C7",
      error: "#DC2626",
      errorSoft: "#FEE2E2",
      info: "#2563EB",
      infoSoft: "#DBEAFE",
    },
  },

  typography: {
    fontFamily: {
      sans: "var(--font-geist)",
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
  },

  borderRadius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
  },

  shadows: {
    sm: "0 1px 3px rgba(15, 23, 42, 0.08)",
    md: "0 8px 24px rgba(15, 23, 42, 0.08)",
    lg: "0 20px 50px rgba(15, 23, 42, 0.12)",
    focus: "0 0 0 4px rgba(37, 99, 235, 0.15)",
  },

  transitions: {
    fast: "150ms ease",
    normal: "250ms ease",
    slow: "400ms ease",
  },
} as const;

export type Theme = typeof theme;