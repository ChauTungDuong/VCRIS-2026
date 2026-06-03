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
    venue: '/venue'
}

export const headerNavLinks = [
    { path: vcrisRoutes.home, label: "Trang chủ" },
    { path: vcrisRoutes.members, label: "Thành viên" },
    { path: vcrisRoutes.speakers, label: "Diễn giả" },
    { path: vcrisRoutes.submission, label: "Gửi bài tham dự" },
    { path: vcrisRoutes.registration, label: "Đăng ký tham dự" },
    { path: vcrisRoutes.program, label: "Chương trình Hội thảo" },
    { path: vcrisRoutes.venue, label: "Địa điểm" }
]
