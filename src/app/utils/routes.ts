import { SITE_ID } from "./site";

export type HeaderSubRoute = {
    path: string;
    label: string;
};

export type HeaderRoute = {
    path: string;
    label: string;
    children?: ReadonlyArray<HeaderSubRoute>;
};

export const vcrisRoutes = {
    home: '/',
    members: '/members',
    speakers: '/speakers',
    submission: '/submission',
    registration: '/registration',
    program: '/program',
    venue: '/venue',
    // VCRIS routes for reference (handled by DynamicPage if no specific component)
    callForPapers: '/call-for-papers',
    callForWorkshops: '/call-for-workshops',
    paperSubmission: '/paper-submission',
    cameraReadySubmission: '/camera-ready-submission',
    instructionsForAuthors: '/instructions-for-authors',
    keynoteSpeakers: '/keynote-speakers',
    organizingCommittees: '/organizing-committees',
    programCommittees: '/program-committees',
    accommodation: '/accommodation',
    previousConferences: '/previous-conferences'
}

export const headerNavLinks: HeaderRoute[] = SITE_ID === "ai4cris" ? [
    { path: vcrisRoutes.home, label: "Trang chủ" },
    { path: vcrisRoutes.members, label: "Thành viên" },
    { path: vcrisRoutes.speakers, label: "Diễn giả" },
    { path: vcrisRoutes.submission, label: "Gửi bài tham dự" },
    { path: vcrisRoutes.registration, label: "Đăng ký tham dự" },
    { path: vcrisRoutes.program, label: "Chương trình Hội thảo" },
    { path: vcrisRoutes.venue, label: "Địa điểm" }
] : [
    { path: vcrisRoutes.home, label: "HOME" },
    {
        path: vcrisRoutes.callForPapers,
        label: "Call for participation",
        children: [
            { path: vcrisRoutes.callForPapers, label: "Call for papers" },
            { path: vcrisRoutes.callForWorkshops, label: "Call for workshops" },
        ],
    },
    {
        path: vcrisRoutes.paperSubmission,
        label: "Authors",
        children: [
            { path: vcrisRoutes.paperSubmission, label: "Paper Submission" },
            { path: vcrisRoutes.cameraReadySubmission, label: "Camera Ready Submission" },
            { path: vcrisRoutes.instructionsForAuthors, label: "Instructions for Authors" }
        ]
    },
    { path: vcrisRoutes.keynoteSpeakers, label: "Keynote Speakers" },
    { path: vcrisRoutes.registration, label: "REGISTRATION" },
    {
        path: vcrisRoutes.organizingCommittees,
        label: "Commitee",
        children: [
            { path: vcrisRoutes.organizingCommittees, label: "Organizing Committees" },
            { path: vcrisRoutes.programCommittees, label: "Program Committees" }
        ],
    },
    { path: vcrisRoutes.program, label: "PROGRAM" },
    {
        path: vcrisRoutes.venue,
        label: "Venue",
        children: [
            { path: vcrisRoutes.venue, label: "Venue" },
            { path: vcrisRoutes.accommodation, label: "Accommodation" }
        ],
    },
    {
        path: vcrisRoutes.previousConferences,
        label: "Previous Conferences",
        children: [
            { path: "https://vcris.org/previous-conferences/vcris2025/homepage/", label: "VCRIS 2025" },
            { path: "https://vcris.org/previous-conferences/vcris2024/homepage/", label: "VCRIS 2024" }
        ],
    }
];
