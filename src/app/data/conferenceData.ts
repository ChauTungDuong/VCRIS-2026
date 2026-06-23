// ============================================================
// AI4CRIS 2026
// ============================================================
export const CONF = {
  name: "AI4CRIS 2026",
  fullName: "Hội thảo khoa học Quốc gia Trí tuệ nhân tạo cho mật mã và an toàn thông tin 2026 (Artificial Intelligence for Cryptography and Information Security- AI4CRIS)",
  dates: "14/08/2026",
  dateStart: "2026-08-14T08:00:00",
  location: "Học viện Kỹ thuật mật mã, Hà Nội, Việt Nam",
  address: "141 Chiến Thắng, Thanh Liệt, Hà Nội",
  easyChairUrl: "https://easychair.org/conferences/?conf=ai4cris",
  contactEmail: "AI4CRIS@actvn.edu.vn",
  website: "https://ai4cris.org",
};

export const conferenceTracks = {
  track1: {
    title: "Phiên 1: AI trong phát hiện mối đe dọa và ứng phó sự cố an ninh mạng",
    label: "track 1",
    topic: [
      "AI trong phát hiện tấn công mạng & malware",
      "Phát hiện bất thường bằng ML/DL",
      "Tự động hóa phản ứng sự cố"
    ]
  },
  track2: {
    title: "Phiên 2: AI cho bảo mật dữ liệu và an ninh hệ thống mạng",
    label: "track 2",
    topic: [
      "AI trong giám sát mạng, IDS/IPS",
      "AI phát hiện lừa đảo, gian lận tài chính",
      "AI bảo vệ dữ liệu lớn, Cloud, IoT"
    ]
  },
  track3: {
    title: "Phiên 3: AI trong mật mã và bảo mật hậu lượng tử",
    label: "track 3",
    topic: [
      "Xu hướng PQC toàn cầu (NIST, ETSI)",
      "Thách thức triển khai PQC tại Việt Nam",
      "AI trong phân tích, kiểm thử mật mã"
    ]
  },
  track4: {
    title: "Phiên 4: AI trong phòng chống thông tin sai lệch và các thách thức an ninh trong tương lai",
    label: "track 4",
    topic: [
      "AI & bảo vệ dữ liệu cá nhân",
      "AI giải thích được (Explainable AI) trong An toàn thông tin",
      "Rủi ro từ AI tạo sinh (Generative AI) (deepfake, lừa đảo, fakenews)"
    ]
  }
}

export const home = {
  name: "AI4CRIS 2026",
  title: `<div class="transition-all duration-700 delay-150 opacity-100 translate-y-0">
    <h1 class="text-white leading-[1.1] mb-2 uppercase" style="font-family: var(--font-display); font-size: 32px; font-style: italic; font-weight: 700;">
      HỘI THẢO KHOA HỌC QUỐC GIA TRÍ TUỆ NHÂN TẠO CHO MẬT MÃ VÀ AN TOÀN THÔNG TIN
    </h1>
    <h1 class="leading-[1.1]" style="font-family: var(--font-display); font-size: 72px; font-style: italic; font-weight: 700;">
      <span class="text-cipher">AI4CRIS </span>
      <span class="text-white"> 2026</span>
    </h1>
  </div>`,
  time: "Hà Nội, 14/8/2026",
  venue: "Học viện Kỹ thuật mật mã, 141 Chiến Thắng, Thanh Liệt, Hà Nội",
  importantDates: {
    paperSubmissionDeadline: "20/7/2026",
    registrationDeadline: "07/8/2026",
    conferenceDates: "14/8/2026",
  },
  aboutTheConference: [
    "Hội thảo AI4CRIS được tổ chức bởi Học viện Kỹ thuật mật mã phối hợp với Câu lạc bộ Khoa-Trường-Viện Công nghệ Thông tin - Truyền thông Việt Nam; Học viện Báo chí và Tuyên truyền, Tạp chí An toàn thông tin cùng với sự bảo trợ của Ban Cơ yếu Chính phủ, Bộ Khoa học và Công nghệ, Hội tin học Việt Nam và Trung tâm Dữ liệu Quốc Gia.",
    "Hội thảo nhằm tăng cường nhận thức và chia sẻ về vai trò, ý nghĩa và tác động của trí tuệ nhân tạo trong lĩnh vực an toàn, bảo mật thông tin; làm rõ cơ hội, thách thức và yêu cầu đặt ra đối với việc ứng dụng AI trong bảo vệ không gian số hiện nay; cập nhật xu hướng toàn cầu, chính sách quốc gia và thực tiễn triển khai, đồng thời phân tích các mô hình, giải pháp ứng dụng trí tuệ nhân tạo trong bảo mật hệ thống thông tin, góp phần nâng cao năng lực phòng ngừa, phát hiện và ứng phó với các nguy cơ, mối đe dọa an ninh mạng đồng thời tạo diễn đàn trao đổi, kết nối đa chiều giữa cơ quan quản lý, nhà khoa học, doanh nghiệp và các cơ sở đào tạo và thúc đẩy chia sẻ kinh nghiệm, kết quả nghiên cứu và nhu cầu thực tiễn, qua đó tăng cường gắn kết giữa nghiên cứu - đào tạo - ứng dụng."
  ],
  conferenceTracks,
  bottomOfHomepage: [
    `© Copyright 2026 Hội thảo khoa học Quốc gia Trí tuệ nhân tạo cho mật mã và an toàn thông tin (AI4CRIS)`
  ]
};

export const logos = [
  { name: "Học viện Kỹ thuật mật mã", src: "/images/kma.png", role: "Đơn vị chủ trì tổ chức", link: "https://actvn.edu.vn/" },
  { name: "FISU Việt Nam", src: "/images/fisu.png", role: "Đơn vị đồng tổ chức", link: "https://www.fisu.edu.vn/" },
  { name: "Học viện Báo chí và Tuyên truyền", src: "/images/ajc.jpg", role: "Đơn vị phối hợp", link: "https://ajc.hcma.vn/" },
  { name: "Tạp chí An toàn thông tin", src: "/images/attt.png", role: "Đơn vị phối hợp", link: "https://antoanthongtin.vn/" },
  { name: "Ban Cơ yếu Chính phủ", src: "/images/bcy.png", role: "Đơn vị bảo trợ", link: "https://bcy.gov.vn/" },
  { name: "Bộ Khoa học và Công nghệ", src: "/images/bkhcn.png", role: "Đơn vị bảo trợ", link: "https://mst.gov.vn/" },
  { name: "Hiệp hội tin học Việt Nam", src: "/images/vaip.jpg", role: "Đơn vị bảo trợ", link: "http://vaip.org.vn/" },
  { name: "Trung tâm Dữ liệu Quốc Gia", src: "", role: "Đơn vị bảo trợ", link: "https://www.facebook.com/ttdlqg/?locale=vi_VN" }
];

export const importantDates = [
  {
    label: "Thời hạn nộp báo cáo và tham luận",
    date: "20/7/2026",
    passed: false,
  },
  {
    label: "Thời gian đăng ký tham dự Hội thảo",
    date: "07/8/2026",
    passed: false,
  },
  {
    label: "Thời gian tổ chức Hội thảo",
    date: "14/8/2026",
    passed: false,
  },
];

export const organizers = {
  host: ["Học viện Kỹ thuật mật mã"],
  coOrganizers: [
    "Câu lạc bộ các Khoa - Trường - Viện Công nghệ thông tin - Truyền thông Việt Nam (FISU VN)",
    "Học viện Báo chí và Tuyên truyền",
    "Tạp chí An toàn thông tin"
  ],
  sponsors: [
    "Ban Cơ yếu Chính phủ",
    "Bộ Khoa học và Công nghệ",
    "Hiệp hội tin học Việt Nam",
    "Trung tâm Dữ liệu Quốc Gia"
  ],
};

export type CommitteePerson = {
  name: string;
  affiliation?: string;
  isChair?: boolean;
};

export type CommitteeGroup = {
  role: string;
  members: CommitteePerson[];
};

export const organizingCommitteeGroups: CommitteeGroup[] = [
  {
    role: "Ban Chỉ đạo",
    members: [
      { name: "TS. Nguyễn Hữu Hùng - Phó Trưởng ban Ban Cơ yếu Chính phủ - Trưởng ban", isChair: true },
      { name: "GS. TS. Nguyễn Thanh Thủy - Chủ tịch FISU Việt Nam" },
      { name: "TS. Hoàng Văn Thức - Giám đốc Học viện Kỹ thuật mật mã" },
      { name: "PGS. TS. Phạm Minh Sơn - Giám đốc Học viện Báo chí và Tuyên truyền" }
    ]
  },
  {
    role: "Ban Tổ chức",
    members: [
      { name: "GS.TS. Nguyễn Hiếu Minh - Phó Giám đốc Học viện Kỹ thuật mật mã - Trưởng ban", isChair: true },
      { name: "PGS.TS. Lưu Văn Quảng - Phó Giám đốc Học viện Báo chí và Tuyên truyền" },
      { name: "TS. Vũ Thị Đào - Viện trưởng Viện Nghiên cứu và Hợp tác phát triển, Học viện Kỹ thuật mật mã" },
      { name: "TS. Nguyễn Như Tuấn - Tổng biên tập Tạp chí An toàn thông tin" }
    ]
  },
  {
    role: "Ban Chương trình",
    members: [
      { name: "PGS. TS. Bùi Thu Lâm - Phó Chủ tịch, Tổng thư ký FISU Việt Nam - Trưởng ban", isChair: true },
      { name: "PGS. TS. Nguyễn Việt Hùng - Phó Chủ tịch FISU Việt Nam" },
      { name: "PGS. TS. Nguyễn Long Giang - Phó Chủ tịch  FISU Việt Nam" },
      { name: "PGS. TS. Nguyễn Thị Trường Giang - Phó Giám đốc Học viện Báo chí và Tuyên truyền" },
      { name: "TS. Nguyễn Bùi Cương - Phó Viện trưởng Viện Khoa học - Công nghệ mật mã" },
      { name: "PGS. TS. Hoàng Việt Long - Chủ nhiệm khoa An toàn thông tin, Học viện Kỹ thuật và Công nghệ an ninh" },
      { name: "TS. Nguyễn Đình Nghĩa - Chủ nhiệm khoa An toàn thông tin, Học viện An ninh nhân dân" },
      { name: "TS. Nguyễn Thế Hùng - Trưởng phòng, Viện 486, Bộ Tư lệnh 86" },
      { name: "PGS. TS. Trần Quang Đức - Giám đốc Trung tâm An ninh mạng, Đại học Bách khoa Hà Nội" },
      { name: "PGS. TS. Trần Quanh Anh - Phó Giám đốc Học viện Công nghệ Bưu chính viễn thông" },
      { name: "PGS. TS. Hoàng Xuân Dậu - Chủ nhiệm khoa An toàn thông tin, Học viện Công nghệ Bưu chính viễn thông" },
      { name: "PGS. TS. Trần Minh Triết - Phó Hiệu trưởng Trường Đại học Khoa học tự nhiên, Đại học Quốc gia Thành phố Hồ Chí Minh" },
      { name: "TS. Nguyễn Thị Thu Hường, Trưởng ban Quản lý khoa học và Hợp tác quốc tế, Học viện Báo chí và Tuyên truyền" },
      { name: "TS. Hoàng Đức Thọ - Chủ nhiệm Khoa An toàn thông tin, Học viện Kỹ thuật mật mã" },
      { name: "TS. Bùi Đức Trình - Chủ nhiệm Khoa Điện tử - Vi mạch, Học viện Kỹ thuật mật mã" },
      { name: "TS. Phạm Văn Hưởng - Chủ nhiệm Khoa Công nghệ thông tin, Học viện Kỹ thuật mật mã" },
      { name: "TS. Nguyễn Văn Long - Phó Chủ nhiệm Khoa Mật mã, Học viện Kỹ thuật mật mã" },
      { name: "TS. Phạm Duy Trung - Phó Chủ nhiệm Khoa ATTT, Học viện Kỹ thuật mật mã (Biên tập kỷ yếu)" },
      { name: "PGS. TS. Trần Thị Lượng - Phó Chủ nhiệm Khoa ATTT, Học viện Kỹ thuật mật mã" },
      { name: "TS. Trần Ngọc Quý - Phó Chủ nhiệm Khoa Điện tử - Vi mạch, Học viện Kỹ thuật mật mã" },
      { name: "TS. Nguyễn Đào Trường - Phó Chủ nhiệm Khoa Điện tử - Vi mạch, Học viện Kỹ thuật mật mã" },
      { name: "TS. Lê Đức Thuận - Học viện Kỹ thuật mật mã" },
      { name: "TS. Mai Đức Thọ - Học viện Kỹ thuật mật mã" }
    ]
  }
];

export const submissionText = {
  about: [
    `Hội thảo AI4CRIS do Học viện Kỹ thuật mật mã chủ trì phối hợp với FISU Việt Nam, Học viện Báo chí và Tuyên truyền và Tạp chí An toàn thông tin tổ chức cùng với sự bảo trợ của Ban Cơ yếu Chính phủ, Bộ Khoa học và Công nghệ, Hội tin học Việt Nam và Trung tâm Dữ liệu Quốc Gia. Hội thảo là diễn đàn trao đổi học thuật và thực tiễn về ứng dụng trí tuệ nhân tạo trong an toàn thông tin, an ninh mạng và bảo vệ dữ liệu. Sự kiện nhằm cập nhật xu hướng công nghệ, chính sách và các giải pháp trí tuệ nhân tạo tiên tiến, đồng thời kết nối cơ quan quản lý, nhà khoa học, doanh nghiệp và cơ sở đào tạo để thúc đẩy nghiên cứu, hợp tác và chuyển giao công nghệ phục vụ bảo vệ không gian số quốc gia.`,
    `Ban Tổ chức trân trọng kính mời các nhà nghiên cứu, giảng viên, chuyên gia, cán bộ quản lý, nghiên cứu sinh, học viên và doanh nghiệp gửi bài báo cáo khoa học tham gia các phiên chuyên đề của Hội thảo.`
  ],
  tracks: [
    {
      title: `Phiên 1: AI trong phát hiện mối đe dọa và ứng phó sự cố an ninh mạng`,
      topics: [
        `AI trong phát hiện tấn công mạng & malware;`,
        `Phát hiện bất thường bằng ML/DL;`,
        `Tự động hóa phản ứng sự cố.`
      ],
      audience: "Trường đại học, viện nghiên cứu, doanh nghiệp an ninh mạng."
    },
    {
      title: `Phiên 2: AI cho bảo mật dữ liệu và an ninh hệ thống mạng`,
      topics: [
        `AI trong giám sát mạng, IDS/IPS;`,
        `AI phát hiện lừa đảo, gian lận tài chính;`,
        `AI bảo vệ dữ liệu lớn, Cloud, IoT.`
      ],
      audience: "Trường đại học, doanh nghiệp FinTech, ngân hàng, tổ chức tài chính, doanh nghiệp Cloud và doanh nghiệp công nghệ số."
    },
    {
      title: `Phiên 3: AI trong mật mã và bảo mật hậu lượng tử`,
      topics: [
        `Xu hướng PQC toàn cầu (NIST, ETSI);`,
        `Thách thức triển khai PQC tại Việt Nam;`,
        `AI trong phân tích, kiểm thử mật mã.`
      ],
      audience: "Các viện nghiên cứu mật mã, trường đại học, doanh nghiệp an ninh mạng, chuyên gia bảo mật."
    },
    {
      title: `Phiên 4: AI trong phòng chống thông tin sai lệch và các thách thức an ninh trong tương lai`,
      topics: [
        `AI & bảo vệ dữ liệu cá nhân;`,
        `AI giải thích được (Explainable AI) trong An toàn thông tin;`,
        `Rủi ro từ AI tạo sinh (Generative AI) (deepfake, lừa đảo, fakenews).`
      ],
      audience: "Nhà khoa học, luật sư, cơ quan quản lý, doanh nghiệp AI"
    }
  ],
  requirements: [
    `Bài viết là công trình nghiên cứu, ứng dụng hoặc tổng quan khoa học chưa công bố ở các hội thảo hoặc tạp chí khác.`,
    `Nội dung đảm bảo tính khoa học, tính thực tiễn và phù hợp với chủ đề hội thảo.`,
    `Khuyến khích các bài báo có kết quả thực nghiệm, mô hình triển khai hoặc nghiên cứu điển hình (case study).`,
    `Ngôn ngữ: Tiếng Việt.`
  ],
  structure: `Bài viết cần bao gồm các nội dung chính: Tiêu đề bài báo, Thông tin tác giả, Tóm tắt (Abstract), Từ khóa, Đặt vấn đề, Phương pháp nghiên cứu, Kết quả và thảo luận, Kết luận, Tài liệu tham khảo.`,
  reviewProcess: [
    `Ban Tổ chức tiếp nhận bài báo của tác giả thông qua hệ thống quản lý bài báo EasyChair hoặc đường dẫn nộp bài trực tuyến (Google Form) được công bố trên website của Hội thảo.`,
    `Các bài báo hợp lệ sẽ được gửi tới các chuyên gia, nhà khoa học có chuyên môn phù hợp để thực hiện phản biện và đánh giá theo quy trình của Hội thảo.`,
    `Căn cứ kết quả phản biện, Ban Chương trình sẽ xem xét và lựa chọn các bài báo đáp ứng yêu cầu về chất lượng khoa học, tính mới và tính ứng dụng để trình bày tại Hội thảo.`,
    `Các bài báo được chấp nhận và trình bày tại Hội thảo sẽ được xem xét, đề xuất đăng trong \nKỷ yếu Hội thảo và Tạp chí An toàn thông tin - Ban Cơ yếu Chính phủ.`
  ]
};

// Venue data
export const venue = {
  mainVenue: {
    name: "Học viện Kỹ thuật mật mã",
    address: "141 Chiến Thắng, Thanh Liệt, Hà Nội",
    mapUrl:
      "https://maps.google.com/?q=Academy+of+Cryptography+Techniques+Hanoi+Vietnam",
    mapEmbed:
      "https://maps.google.com/maps?q=141%20Chi%E1%BA%BFn%20Th%E1%BA%AFng,%20T%C3%A2n%20Tri%E1%BB%81u,%20Thanh%20Tr%C3%AC,%20H%C3%A0%20N%E1%BB%99i,%20Vi%E1%BB%87t%20Nam&t=m&z=15&output=embed&iwloc=near",
  },
  areas: [
    {
      name: "Phiên toàn thể và phiên bàn tròn",
      location: "Hội trường lớn Học viện Kỹ thuật mật mã."
    },
    {
      name: "Phiên chuyên đề A",
      location: "Hội trường Học viện Kỹ thuật mật mã."
    },
    {
      name: "Phiên chuyên đề B",
      location: "Phòng đọc tầng 2, tòa nhà TB2."
    }
  ],
  instructions: [
    "Đại biểu vui lòng có mặt trước giờ khai mạc ít nhất 15 phút để hoàn tất thủ tục đăng ký.",
    "Khu vực đón tiếp và cấp phát tài liệu được bố trí tại sảnh Hội trường.",
    "Ban Tổ chức sẽ có nhân viên hỗ trợ hướng dẫn trong suốt thời gian diễn ra hội thảo."
  ]
};
