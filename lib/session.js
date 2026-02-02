export function getDynamicYear() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-11

    // "Freshness" logic: 
    // If we are late in the year (Oct-Dec), start showing next year as "Upcoming".
    // Otherwise show current year.
    // User asked to change "every 3 months" - this might mean quarterly updates?
    // Let's implement a system that always returns the most relevant "Academic Year".

    // For Indian Academics:
    // Jan-May: Session 2025-26 (Ending) -> Show Exam 2026
    // Jun-Aug: Admissions 2026-27 -> Show 2026
    // Sep-Dec: Session 2026-27 (Mid) -> Show 2026-27

    return year; // For now simplified to Current Year (2026 in simulation)
}

export function getCurrentSession() {
    const year = getDynamicYear();
    return `${year}-${(year + 1).toString().slice(2)}`;
}

export function getMonthFormatted() {
    // Returns current month name for "freshness"
    return new Date().toLocaleString('default', { month: 'long' });
}
