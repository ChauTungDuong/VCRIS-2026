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
    callForPapers: '/call-for-papers',
    callForWorkshops: '/call-for-workshops',
    paperSubmission: '/paper-submission',
    cameraReadySubmission: '/camera-ready-submission',
    instructionsForAuthors: '/instructions-for-authors',
    keynoteSpeakers: '/keynote-speakers',
    registration: '/registration',
    organizingCommittees: '/organizing-committees',
    programCommittees: '/program-committees',
    program: '/program',
    venue: '/venue',
    accommodation: '/accommodation',
    previousConferences: '/previous-conferences'
}

export const headerNavLinks = [
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
    }
]
