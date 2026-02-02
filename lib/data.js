import { getDynamicYear, getCurrentSession, getMonthFormatted } from "./session";

// We make this a function or just update the static array to use the current year logic
// Since this is a module, we can compute values once on load.

const YEAR = getDynamicYear(); // e.g. 2026
const NEXT_YEAR = YEAR + 1;
const SESSION = getCurrentSession(); // e.g. 2026-27

export const results = [
    {
        slug: "mcbu-ba-1st-year-result-upcoming",
        title: `MCBU BA 1st Year Result (NEP) ${YEAR}`,
        date: `${getMonthFormatted()} ${YEAR}`,
        category: "Result",
        excerpt: `Maharaja Chhatrasal Bundelkhand University declared the BA 1st Year NEP results for session ${SESSION}.`,
        officialLink: "https://mcbu.ac.in/results"
    },
    {
        slug: "mcbu-bsc-3rd-year-result-latest",
        title: `MCBU B.Sc Final Year Main Exam Result ${YEAR}`,
        date: `${getMonthFormatted()} ${YEAR}`,
        category: "Result",
        excerpt: `B.Sc 3rd Year results for ${YEAR} exams are live on mcbu.ac.in. Check scorecard now.`,
        officialLink: "https://mcbu.ac.in/results"
    },
    {
        slug: "mcbu-bcom-2nd-year-result-new",
        title: `MCBU B.Com 2nd Year Regular/Private Result ${YEAR}`,
        date: `${getMonthFormatted()} ${YEAR}`,
        category: "Result",
        excerpt: `Check your B.Com 2nd year ${YEAR} results. Link activated on the official portal.`,
        officialLink: "https://mcbu.ac.in/results"
    },
    {
        slug: "mcbu-ma-msc-semester-result-live",
        title: `MCBU MA/MSc 2nd Semester Results ${YEAR}`,
        date: `${getMonthFormatted()} ${YEAR}`,
        category: "Result",
        excerpt: `PG Semester results for MA, MSc, and MCom (${SESSION}) have been released.`,
        officialLink: "https://mcbu.ac.in/results"
    },
    // Upcoming Placeholders from next year
    {
        slug: "mcbu-exam-time-table-upcoming",
        title: `MCBU Exam Time Table ${NEXT_YEAR} (Upcoming)`,
        date: "Coming Soon",
        category: "Time Table",
        excerpt: `Time Table for the upcoming ${NEXT_YEAR} session will be published here.`,
        officialLink: "https://mcbu.ac.in/"
    }
];

// Helper to generate archive years
export function getArchiveYears() {
    const current = getDynamicYear();
    return [current - 1, current - 2, current - 3]; // e.g., 2025, 2024, 2023
}
