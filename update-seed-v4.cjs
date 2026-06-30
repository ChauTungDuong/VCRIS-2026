const fs = require('fs');

let code = fs.readFileSync('server/prisma/seed-ai4cris.ts', 'utf8');

// 1. Replace helpers
const oldHelperStart = code.indexOf('function ai4crisSection');
const oldHelperEnd = code.indexOf('function tabsBlock');
if (oldHelperStart !== -1 && oldHelperEnd !== -1) {
  const newHelpers = `function ai4crisSection(opts: any = {}): PuckNode {
  return {
    type: "Ai4CrisSection",
    props: {
      title: opts.title || "GIỚI THIỆU",
      titleAlign: opts.titleAlign || "left",
      contentHtml: opts.contentHtml || "",
      variant: opts.variant || "card-white",
      id: \`ai4cris-section-\${Math.random().toString(36).substr(2, 9)}\`,
    },
  };
}

function ai4crisMemberTabs(opts: any = {}): PuckNode {
  return {
    type: "Ai4CrisMemberTabs",
    props: {
      tabs: opts.tabs || [],
      id: \`member-tabs-\${Math.random().toString(36).substr(2, 9)}\`,
    },
  };
}

function ai4crisTrackAccordion(opts: any = {}): PuckNode {
  return {
    type: "Ai4CrisTrackAccordion",
    props: {
      tracks: opts.tracks || [],
      id: \`track-accordion-\${Math.random().toString(36).substr(2, 9)}\`,
    },
  };
}

`;
  code = code.substring(0, oldHelperStart) + newHelpers + code.substring(oldHelperEnd);
}

// 2. Replace pages array
const pagesArrayCode = `const pages = [
    {
      slug: "home",
      isSystem: true,
      sortOrder: 0,
      vi: {
        title: "Trang chủ",
        content: makePuckContent([
          columnsBlock([
            [
              ai4crisCountdown({
                label: "Hội thảo diễn ra sau",
                targetDate: "2026-08-14T08:00:00",
                timeText: "Hà Nội, 14/8/2026",
                boxTitle: "AI4CRIS 2026",
                boxText: "Học viện Kỹ thuật mật mã, 141 Chiến Thắng, Thanh Liệt, Hà Nội",
              })
            ],
            [
              ai4crisTimeline({
                title: "Các mốc thời gian",
                items: [
                  { date: "20/7/2026", label: "Thời hạn nộp báo cáo và tham luận", passed: false },
                  { date: "07/8/2026", label: "Thời gian đăng ký tham dự Hội thảo", passed: false },
                  { date: "14/8/2026", label: "Thời gian tổ chức Hội thảo", passed: false },
                ]
              })
            ]
          ])
        ])
      }
    },
    {
      slug: "members",
      isSystem: false,
      sortOrder: 1,
      vi: {
        title: "Thành viên",
        content: makePuckContent([
          ai4crisSection({
            title: "Thành viên",
            titleAlign: "center",
            variant: "plain",
            contentHtml: ""
          }),
          ai4crisMemberTabs({
            tabs: [
              {
                id: "ban-chi-dao",
                title: "Ban chỉ đạo",
                contentHtml: "<h3 class=\\"text-[24px] font-bold text-ink mb-6 border-b border-rule pb-4\\">Danh sách thành viên Ban Chỉ đạo</h3><div class=\\"flex items-start gap-3\\"><div class=\\"w-2 h-2 rounded-full bg-cipher mt-2 flex-shrink-0\\"></div><p class=\\"text-[16px] font-bold text-ink\\">TS. Nguyễn Hữu Hùng - Phó Trưởng ban Ban Cơ yếu Chính phủ - Trưởng ban</p></div><div class=\\"flex items-start gap-3 mt-4\\"><div class=\\"w-2 h-2 rounded-full bg-cipher mt-2 flex-shrink-0\\"></div><p class=\\"text-[16px] text-slate\\">GS. TS. Nguyễn Thanh Thủy - Chủ tịch FISU Việt Nam</p></div><div class=\\"flex items-start gap-3 mt-4\\"><div class=\\"w-2 h-2 rounded-full bg-cipher mt-2 flex-shrink-0\\"></div><p class=\\"text-[16px] text-slate\\">TS. Hoàng Văn Thức - Giám đốc Học viện Kỹ thuật mật mã</p></div><div class=\\"flex items-start gap-3 mt-4\\"><div class=\\"w-2 h-2 rounded-full bg-cipher mt-2 flex-shrink-0\\"></div><p class=\\"text-[16px] text-slate\\">PGS. TS. Phạm Minh Sơn - Giám đốc Học viện Báo chí và Tuyên truyền</p></div>"
              },
              {
                id: "ban-to-chuc",
                title: "Ban tổ chức",
                contentHtml: "<h3 class=\\"text-[24px] font-bold text-ink mb-6 border-b border-rule pb-4\\">Danh sách thành viên Ban Tổ chức</h3><div class=\\"flex items-start gap-3\\"><div class=\\"w-2 h-2 rounded-full bg-cipher mt-2 flex-shrink-0\\"></div><p class=\\"text-[16px] font-bold text-ink\\">TS. Nguyễn Hữu Hùng - Phó Trưởng ban Ban Cơ yếu Chính phủ - Trưởng ban</p></div><div class=\\"flex items-start gap-3 mt-4\\"><div class=\\"w-2 h-2 rounded-full bg-cipher mt-2 flex-shrink-0\\"></div><p class=\\"text-[16px] text-slate\\">TS. Hoàng Văn Thức - Giám đốc Học viện Kỹ thuật mật mã - Đồng Trưởng ban</p></div>"
              },
              {
                id: "ban-chuong-trinh",
                title: "Ban chương trình",
                contentHtml: "<h3 class=\\"text-[24px] font-bold text-ink mb-6 border-b border-rule pb-4\\">Danh sách thành viên Ban Chương trình</h3><div class=\\"flex items-start gap-3\\"><div class=\\"w-2 h-2 rounded-full bg-cipher mt-2 flex-shrink-0\\"></div><p class=\\"text-[16px] font-bold text-ink\\">GS. TS. Nguyễn Thanh Thủy - Chủ tịch FISU Việt Nam - Trưởng ban</p></div>"
              }
            ]
          })
        ])
      }
    },
    {
      slug: "speakers",
      isSystem: false,
      sortOrder: 2,
      vi: {
        title: "Diễn giả",
        content: makePuckContent([
          ai4crisSection({
            title: "Diễn giả",
            titleAlign: "center",
            variant: "plain",
            contentHtml: "<p class=\\"text-[20px] text-slate italic text-center\\" style=\\"font-family: var(--font-body)\\"><br/><br/>Thông tin về Diễn giả của Hội thảo AI4CRIS sẽ được cập nhật trong thời gian tới!</p>"
          })
        ])
      }
    },
    {
      slug: "submission",
      isSystem: false,
      sortOrder: 3,
      vi: {
        title: "Gửi bài tham dự",
        content: makePuckContent([
          ai4crisSection({
            title: "Gửi bài tham dự",
            titleAlign: "center",
            variant: "plain",
            contentHtml: ""
          }),
          ai4crisSection({
            title: "",
            titleAlign: "left",
            variant: "card-white",
            contentHtml: "<p class=\\"indent-8\\">Hội thảo AI4CRIS do Học viện Kỹ thuật mật mã chủ trì phối hợp với FISU Việt Nam, Học viện Báo chí và Tuyên truyền và Tạp chí An toàn thông tin tổ chức cùng với sự bảo trợ của Ban Cơ yếu Chính phủ, Bộ Khoa học và Công nghệ, Hội tin học Việt Nam và Trung tâm Dữ liệu Quốc Gia. Hội thảo là diễn đàn trao đổi học thuật và thực tiễn về ứng dụng trí tuệ nhân tạo trong an toàn thông tin, an ninh mạng và bảo vệ dữ liệu. Sự kiện nhằm cập nhật xu hướng công nghệ, chính sách và các giải pháp trí tuệ nhân tạo tiên tiến, đồng thời kết nối cơ quan quản lý, nhà khoa học, doanh nghiệp và cơ sở đào tạo để thúc đẩy nghiên cứu, hợp tác và chuyển giao công nghệ phục vụ bảo vệ không gian số quốc gia.</p><p class=\\"indent-8 mt-4\\">Ban Tổ chức trân trọng kính mời các nhà nghiên cứu, giảng viên, chuyên gia, cán bộ quản lý, nghiên cứu sinh, học viên và doanh nghiệp gửi bài báo cáo khoa học tham gia các phiên chuyên đề của Hội thảo.</p>"
          }),
          ai4crisSection({
            title: "CHỦ ĐỀ",
            titleAlign: "left",
            variant: "card-blue",
            contentHtml: ""
          }),
          ai4crisTrackAccordion({
            tracks: [
              {
                title: "Track 1: AI trong phát hiện mối đe dọa và ứng phó sự cố an ninh mạng",
                contentHtml: "<p class=\\"font-semibold text-ink mb-3\\">Các chủ đề bao gồm nhưng không giới hạn:</p><ul class=\\"list-disc pl-6 space-y-2 mb-6\\"><li>AI trong phát hiện tấn công mạng và phần mềm độc hại.</li><li>Hệ thống phát hiện bất thường dựa trên học máy và học sâu.</li><li>Tự động hóa phản ứng và xử lý sự cố an ninh mạng bằng AI.</li><li>Mô hình ngôn ngữ lớn (LLM) trong phân tích log và cảnh báo bảo mật.</li><li>An ninh hệ thống IoT/OT và vai trò của AI.</li></ul><p class=\\"italic bg-warm p-4 rounded-xl border border-rule\\"><span class=\\"font-semibold text-cipher\\">Đối tượng gửi bài:</span> Các nhà nghiên cứu, giảng viên, sinh viên, chuyên gia từ các viện nghiên cứu, trường đại học, tổ chức chuyên về phân tích, ứng phó sự cố và bảo vệ hạ tầng mạng.</p>"
              },
              {
                title: "Track 2: AI cho bảo mật dữ liệu và an ninh hệ thống",
                contentHtml: "<p class=\\"font-semibold text-ink mb-3\\">Các chủ đề bao gồm nhưng không giới hạn:</p><ul class=\\"list-disc pl-6 space-y-2 mb-6\\"><li>Bảo mật dữ liệu lớn (Big Data Security) và bảo vệ dữ liệu trên đám mây bằng AI.</li><li>Học máy bảo mật (Federated Learning, Secure Multi-party Computation).</li><li>AI trong giám sát mạng và hệ thống (IDS/IPS).</li><li>Mã hóa và giải mã ứng dụng học máy.</li><li>Các phương pháp chống lại các cuộc tấn công Adversarial AI.</li></ul><p class=\\"italic bg-warm p-4 rounded-xl border border-rule\\"><span class=\\"font-semibold text-cipher\\">Đối tượng gửi bài:</span> Các nhà nghiên cứu, chuyên gia từ doanh nghiệp công nghệ, kỹ sư an ninh mạng, kiến trúc sư hệ thống, sinh viên CNTT/ATTT.</p>"
              },
              {
                title: "Track 3: Ứng dụng AI trong mật mã và bảo mật hậu lượng tử",
                contentHtml: "<p class=\\"font-semibold text-ink mb-3\\">Các chủ đề bao gồm nhưng không giới hạn:</p><ul class=\\"list-disc pl-6 space-y-2 mb-6\\"><li>Xu hướng và tiêu chuẩn bảo mật hậu lượng tử (PQC).</li><li>Ứng dụng AI trong phân tích và kiểm thử thuật toán mật mã.</li><li>Giải pháp mật mã thông minh và linh hoạt cho môi trường IoT/5G/6G.</li><li>AI hỗ trợ phát hiện điểm yếu của các giao thức mật mã.</li></ul><p class=\\"italic bg-warm p-4 rounded-xl border border-rule\\"><span class=\\"font-semibold text-cipher\\">Đối tượng gửi bài:</span> Nhà nghiên cứu mật mã, sinh viên/học viên chuyên ngành mật mã, chuyên gia bảo mật từ các cơ quan nhà nước và doanh nghiệp an ninh mạng.</p>"
              },
              {
                title: "Track 4: AI trong phòng, chống thông tin sai lệch và các thách thức an ninh trong tương lai",
                contentHtml: "<p class=\\"font-semibold text-ink mb-3\\">Các chủ đề bao gồm nhưng không giới hạn:</p><ul class=\\"list-disc pl-6 space-y-2 mb-6\\"><li>Công cụ AI phát hiện deepfake, fake news và tin giả trên mạng xã hội.</li><li>Rủi ro an ninh từ AI tạo sinh (Generative AI) và cách phòng chống.</li><li>Bảo vệ dữ liệu cá nhân, quyền riêng tư trong kỷ nguyên AI.</li><li>AI giải thích được (Explainable AI) trong các quyết định an toàn thông tin.</li><li>Khía cạnh pháp lý, đạo đức và chính sách quản trị AI an toàn.</li></ul><p class=\\"italic bg-warm p-4 rounded-xl border border-rule\\"><span class=\\"font-semibold text-cipher\\">Đối tượng gửi bài:</span> Các nhà hoạch định chính sách, luật sư, chuyên gia truyền thông, nhà khoa học nghiên cứu về pháp lý và đạo đức AI, doanh nghiệp phát triển sản phẩm AI.</p>"
              }
            ]
          }),
          ai4crisSection({
            title: "YÊU CẦU",
            titleAlign: "left",
            variant: "card-white",
            contentHtml: "<ul class=\\"list-disc pl-6 space-y-3\\"><li>Ngôn ngữ bài viết: Tiếng Việt hoặc Tiếng Anh.</li><li>Định dạng: MS Word hoặc PDF theo mẫu của Ban Tổ chức. (Cập nhật sau)</li><li>Độ dài bài báo: Không vượt quá 10 trang (bao gồm cả tài liệu tham khảo và phụ lục).</li><li>Tính nguyên bản: Bài báo chưa từng được công bố hoặc đang trong quá trình bình duyệt tại bất kỳ hội nghị hay tạp chí nào khác.</li></ul>"
          }),
          ai4crisSection({
            title: "CẤU TRÚC",
            titleAlign: "left",
            variant: "card-blue",
            contentHtml: "Báo cáo cần bao gồm các phần chính: Tóm tắt (Abstract), Giới thiệu (Introduction), Phương pháp nghiên cứu/Đề xuất (Methodology/Proposed Solution), Đánh giá thực nghiệm (Experimental Results & Evaluation), Thảo luận và Kết luận (Conclusion & Future Work), và Tài liệu tham khảo (References)."
          }),
          ai4crisSection({
            title: "QUY TRÌNH XÉT DUYỆT",
            titleAlign: "left",
            variant: "card-white",
            contentHtml: "<ul class=\\"list-decimal pl-6 space-y-3\\"><li>Tất cả các bài nộp sẽ qua quá trình bình duyệt kín (blind review) bởi ít nhất 02 chuyên gia uy tín trong Ban Chương trình.</li><li>Các tiêu chí đánh giá bao gồm: tính cấp thiết, giá trị khoa học/thực tiễn, phương pháp luận rõ ràng, kết quả đáng tin cậy và chất lượng trình bày.</li><li>Các bài báo được chấp nhận sẽ được mời trình bày (Oral presentation) tại Hội thảo và được đăng trong Kỷ yếu Hội thảo AI4CRIS 2026.</li><li>Các báo cáo xuất sắc nhất sẽ được Hội đồng chuyên môn đánh giá, phản biện lại theo quy trình để đăng trên chuyên san: Nghiên cứu Khoa học và Công nghệ trong lĩnh vực ATTT của Tạp chí An toàn thông tin.</li></ul>"
          }),
          ai4crisSection({
            title: "MỐC THỜI GIAN",
            titleAlign: "left",
            variant: "card-blue",
            contentHtml: "<p><strong>Thời gian tổ chức Hội thảo:</strong> 14/8/2026</p><p><strong>Thời hạn nộp báo cáo và tham luận:</strong> 20/7/2026</p><p><strong>Thời gian đăng ký tham dự Hội thảo:</strong> 07/8/2026</p>"
          }),
          ai4crisSection({
            title: "LIÊN HỆ",
            titleAlign: "left",
            variant: "card-white",
            contentHtml: "<p><strong>Email:</strong> <a href=\\"mailto:AI4CRIS@actvn.edu.vn\\" class=\\"text-cipher hover:underline\\">AI4CRIS@actvn.edu.vn</a></p><p><strong>Website:</strong> <a href=\\"https://ai4cris.org\\" target=\\"_blank\\" class=\\"text-cipher hover:underline\\">https://ai4cris.org</a></p><p class=\\"mt-4\\">Ban Tổ chức trân trọng kính mời các nhà khoa học, chuyên gia, doanh nghiệp và cơ quan quản lý tham gia gửi bài và đồng hành cùng Hội thảo AI4CRIS 2026.</p>"
          }),
          ai4crisSection({
            title: "Lưu ý:",
            titleAlign: "left",
            variant: "warning-yellow",
            contentHtml: "<ul class=\\"list-disc pl-6 space-y-2\\"><li>Mỗi bài báo cáo được chấp nhận trình bày tại hội thảo phải có ít nhất 01 tác giả hoặc đồng tác giả đăng ký tham dự và trực tiếp báo cáo.</li><li>Thời lượng dành cho mỗi báo cáo là 20 phút trình bày và 05 phút trao đổi, thảo luận.</li></ul>"
          }),
          ai4crisSection({
            title: "",
            titleAlign: "center",
            variant: "plain",
            contentHtml: "<div class=\\"flex justify-center mt-12\\"><div class=\\"flex flex-col sm:flex-row items-center gap-4 w-full max-w-[600px] justify-center\\"><a href=\\"https://easychair.org/conferences/?conf=ai4cris\\" class=\\"inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[20px] bg-cipher text-white text-[16px] font-semibold hover:shadow-lg hover:shadow-cipher/30 transition-all w-full sm:w-auto\\" target=\\"_blank\\">Gửi bài qua EasyChair →</a><a href=\\"https://docs.google.com/forms/d/e/1FAIpQLSdQ8TRTDXG2lnoNCsp8WAtkS677UMS8AyD-kqRdXPQoTl47cw/viewform\\" class=\\"inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[20px] bg-cipher text-white text-[16px] font-semibold hover:shadow-lg hover:shadow-cipher/30 transition-all w-full sm:w-auto\\" target=\\"_blank\\">Gửi bài qua Google Form →</a></div></div>"
          })
        ])
      }
    },
    {
      slug: "registration",
      isSystem: false,
      sortOrder: 4,
      vi: {
        title: "Đăng ký tham dự",
        content: makePuckContent([
          ai4crisSection({
            title: "Đăng ký tham dự",
            titleAlign: "center",
            variant: "plain",
            contentHtml: ""
          }),
          ai4crisSection({
            title: "",
            titleAlign: "left",
            variant: "card-white",
            contentHtml: "<p>Để tham dự Hội thảo, vui lòng thực hiện đăng ký trực tuyến thông qua biểu mẫu Google Form của Ban Tổ chức.</p><div class=\\"flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-cipher/20 shadow-sm gap-4 mt-8 mb-8\\"><a href=\\"https://forms.gle/your-google-form-link-here\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" class=\\"px-8 py-4 rounded-xl bg-cipher text-white font-bold text-[18px] hover:bg-cipher/90 transition-colors shadow-md hover:shadow-lg\\">👉 Đăng ký tham dự tại đây</a><p class=\\"text-[13px] text-slate italic text-center max-w-[400px]\\">Sau khi hoàn thành biểu mẫu đăng ký, hệ thống sẽ ghi nhận thông tin của Quý đại biểu. Ban Tổ chức sẽ gửi thư xác nhận tham dự và các thông tin liên quan đến hội thảo qua email đã đăng ký.</p></div><div class=\\"space-y-4\\"><h3 class=\\"text-[20px] font-bold text-ink\\">Lưu ý</h3><ul class=\\"list-disc pl-6 space-y-2 text-[15px] text-slate\\"><li>Việc đăng ký tham dự là hoàn toàn miễn phí.</li><li>Số lượng đại biểu tham dự trực tiếp có thể được giới hạn tùy theo điều kiện tổ chức.</li><li>Ban Tổ chức khuyến nghị các đại biểu đăng ký sớm để thuận tiện cho công tác tổ chức.</li></ul></div><div class=\\"space-y-4 border-t border-rule pt-8 mt-8\\"><h3 class=\\"text-[20px] font-bold text-ink\\">Thông tin liên hệ</h3><div class=\\"text-[15px] text-slate space-y-2\\"><p><span class=\\"font-semibold text-ink\\">Ms. Vương Thị Hải Hà</span></p><p>SĐT: 0984 346 162</p><p>Email: <a href=\\"mailto:AI4CRIS@actvn.edu.vn\\" class=\\"text-cipher hover:underline\\">AI4CRIS@actvn.edu.vn</a></p></div></div><p class=\\"text-[16px] font-bold text-ink text-center pt-4 mt-8\\">Ban Tổ chức trân trọng cảm ơn sự quan tâm và mong được đón tiếp Quý đại biểu tại Hội thảo AI4CRIS 2026.</p>"
          })
        ])
      }
    },
    {
      slug: "program",
      isSystem: false,
      sortOrder: 5,
      vi: {
        title: "Chương trình Hội thảo",
        content: makePuckContent([
          ai4crisSection({
            title: "Chương trình Hội thảo",
            titleAlign: "center",
            variant: "plain",
            contentHtml: ""
          }),
          ai4crisSection({
            title: "",
            titleAlign: "left",
            variant: "plain",
            contentHtml: "<div class=\\"space-y-16\\"><section><h2 class=\\"text-[24px] font-bold text-ink mb-6 bg-paper px-4 py-3 rounded-lg border-l-4 border-cipher\\">1. Phiên toàn thể và bàn tròn (Địa điểm: Hội trường)</h2><div class=\\"overflow-x-auto rounded-xl border border-rule shadow-sm\\"><table class=\\"w-full text-left border-collapse\\"><thead><tr class=\\"bg-warm text-ink text-[17px]\\"><th class=\\"p-4 border-b border-rule w-[140px] whitespace-nowrap\\">Thời gian</th><th class=\\"p-4 border-b border-rule\\">Nội dung</th><th class=\\"p-4 border-b border-rule w-[250px]\\">Diễn giả/Đơn vị</th></tr></thead><tbody class=\\"text-[16px] text-slate divide-y divide-rule\\"><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink\\">07:30 - 08:00</td><td class=\\"p-4\\">Đón tiếp, đăng ký đại biểu</td><td class=\\"p-4\\">Học viện Kỹ thuật mật mã</td></tr><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink\\">08:00 - 08:15</td><td class=\\"p-4\\">Phát biểu Chào mừng và Khai mạc hội thảo</td><td class=\\"p-4\\">Lãnh đạo Ban Cơ yếu Chính phủ/ Học viện KTMM, Chủ tịch FISU VN</td></tr><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink\\">08:15 - 08:35</td><td class=\\"p-4\\">Báo cáo mời 1: Chính sách và định hướng chiến lược quốc gia về AI</td><td class=\\"p-4\\">Đại diện Bộ Khoa học và Công nghệ</td></tr><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink\\">08:35 - 09:00</td><td class=\\"p-4\\">Báo cáo mời 2: Một số kết quả nghiên cứu nổi bật về AI trong ATTT của Học viện KTMM và định hướng AI trong bảo mật và mật mã quốc gia</td><td class=\\"p-4\\">Học viện Kỹ thuật mật mã</td></tr><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink\\">09:00 - 09:25</td><td class=\\"p-4\\">Báo cáo mời 3: AI và An ninh dữ liệu tại Trung tâm dữ liệu quốc gia</td><td class=\\"p-4\\">Trung tâm Dữ liệu Quốc gia</td></tr><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink\\">09:25 - 09:50</td><td class=\\"p-4\\">Báo cáo mời 4: Ứng dụng AI trong chuyển đổi số của Bộ quốc phòng</td><td class=\\"p-4\\">Bộ Tư lệnh 86</td></tr><tr class=\\"bg-cipher/5 font-semibold text-cipher\\"><td class=\\"p-4\\">09:50 - 10:05</td><td class=\\"p-4\\" colspan=\\"2\\">Nghỉ giải lao</td></tr><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink\\">10:05 - 10:30</td><td class=\\"p-4\\">Báo cáo mời 5: AI cho hệ sinh thái thông tin tin cậy: Giải pháp chống thông tin sai lệch trong kỷ nguyên an ninh mạng.</td><td class=\\"p-4\\">FISU Việt Nam</td></tr><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink\\">10:30 - 10:55</td><td class=\\"p-4\\">Báo cáo mời 6: Ứng dụng AI trong bảo vệ hạ tầng trọng yếu, chính phủ số</td><td class=\\"p-4\\">Doanh nghiệp công nghệ lớn (Viettel/VNPT/BKAV/CMC/Mobilefone...)</td></tr><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink align-top\\">10:55 - 11:40</td><td class=\\"p-4\\"><p class=\\"font-bold text-ink mb-2\\">Phiên bàn tròn: Cơ hội và thách thức ứng dụng AI trong ATTT tại Việt Nam</p><ul class=\\"list-disc pl-5 space-y-1\\"><li>Nhà quản lý: Bộ Quốc phòng, Bộ Công an, Bộ Khoa học và Công nghệ, Ban Cơ yếu Chính phủ</li><li>Nhà khoa học (Viện, trường)</li><li>Doanh nghiệp</li></ul></td><td class=\\"p-4 align-top\\"><p class=\\"mb-2\\"><span class=\\"font-semibold\\">Điều phối:</span> Học viện Kỹ thuật mật mã</p><p><span class=\\"font-semibold\\">Thành phần:</span> Đại diện Lãnh đạo FISU Việt Nam, Đại diện Lãnh đạo Học viện Báo chí và Tuyên truyền, Đại diện Lãnh đạo BTL 86, Đại diện Lãnh đạo Trung tâm Dữ liệu Quốc gia, Đại diện Viettel.</p></td></tr><tr class=\\"bg-cipher/5 font-semibold text-cipher\\"><td class=\\"p-4\\">13:30 - 16:45</td><td class=\\"p-4\\" colspan=\\"2\\">Các phiên chuyên môn (Xem chi tiết bên dưới)</td></tr><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink\\">16:45 - 17:00</td><td class=\\"p-4\\">Bế mạc, tổng kết Hội thảo</td><td class=\\"p-4\\">Lãnh đạo Ban Cơ yếu Chính phủ/ Học viện KTMM, Chủ tịch FISU VN</td></tr></tbody></table></div></section><section><h2 class=\\"text-[24px] font-bold text-ink mb-6 bg-paper px-4 py-3 rounded-lg border-l-4 border-cipher\\">2. Các phiên chuyên môn</h2><div class=\\"space-y-12\\"><div><h3 class=\\"text-[20px] font-bold text-ink mb-4\\">Phiên A (Địa điểm: Hội trường)</h3><div class=\\"overflow-x-auto rounded-xl border border-rule shadow-sm\\"><table class=\\"w-full text-left border-collapse\\"><thead><tr class=\\"bg-warm text-ink text-[17px]\\"><th class=\\"p-4 border-b border-rule w-[140px] whitespace-nowrap\\">Thời gian</th><th class=\\"p-4 border-b border-rule\\">Nội dung</th><th class=\\"p-4 border-b border-rule w-[250px]\\">Diễn giả/Đơn vị</th></tr></thead><tbody class=\\"text-[16px] text-slate divide-y divide-rule\\"><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink align-top\\">13:30 - 15:00</td><td class=\\"p-4\\"><p class=\\"font-bold text-ink mb-1\\">Phiên 1: AI trong phát hiện mối đe dọa và ứng phó sự cố an ninh mạng</p><p class=\\"italic text-cipher mb-3\\">(Chair: Học viện Kỹ thuật mật mã)</p><ul class=\\"list-disc pl-5 space-y-1\\"><li>AI trong phát hiện tấn công mạng & malware</li><li>Phát hiện bất thường bằng ML/DL</li><li>Tự động hóa phản ứng sự cố</li></ul></td><td class=\\"p-4 align-top\\">Đại học/Viện nghiên cứu/Doanh nghiệp an ninh mạng</td></tr><tr class=\\"bg-cipher/5 font-semibold text-cipher\\"><td class=\\"p-4\\">15:00 - 15:15</td><td class=\\"p-4\\" colspan=\\"2\\">Nghỉ giải lao</td></tr><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink align-top\\">15:15 - 16:45</td><td class=\\"p-4\\"><p class=\\"font-bold text-ink mb-1\\">Phiên 2: AI cho bảo mật dữ liệu và an ninh hệ thống mạng</p><p class=\\"italic text-cipher mb-3\\">(Chair: Fisu)</p><ul class=\\"list-disc pl-5 space-y-1\\"><li>AI trong giám sát mạng, IDS/IPS</li><li>AI phát hiện lừa đảo, gian lận tài chính</li><li>AI bảo vệ dữ liệu lớn, Cloud, IoT</li></ul></td><td class=\\"p-4 align-top\\">Đại học/Doanh nghiệp FinTech & Cloud</td></tr></tbody></table></div></div><div><h3 class=\\"text-[20px] font-bold text-ink mb-4\\">Phiên B (Địa điểm: Phòng đọc Tầng 2 Tòa TB2)</h3><div class=\\"overflow-x-auto rounded-xl border border-rule shadow-sm\\"><table class=\\"w-full text-left border-collapse\\"><thead><tr class=\\"bg-warm text-ink text-[17px]\\"><th class=\\"p-4 border-b border-rule w-[140px] whitespace-nowrap\\">Thời gian</th><th class=\\"p-4 border-b border-rule\\">Nội dung</th><th class=\\"p-4 border-b border-rule w-[250px]\\">Diễn giả/Đơn vị</th></tr></thead><tbody class=\\"text-[16px] text-slate divide-y divide-rule\\"><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink align-top\\">13:30 - 15:00</td><td class=\\"p-4\\"><p class=\\"font-bold text-ink mb-1\\">Phiên 3: AI trong mật mã và bảo mật hậu lượng tử</p><p class=\\"italic text-cipher mb-3\\">(Chair: Viện Khoa học và Công nghệ mật mã)</p><ul class=\\"list-disc pl-5 space-y-1\\"><li>Xu hướng PQC toàn cầu (NIST, ETSI)</li><li>Thách thức triển khai PQC tại Việt Nam</li><li>AI trong phân tích, kiểm thử mật mã</li></ul></td><td class=\\"p-4 align-top\\">Viện nghiên cứu mật mã/Đại học/ Doanh nghiệp an ninh mạng</td></tr><tr class=\\"bg-cipher/5 font-semibold text-cipher\\"><td class=\\"p-4\\">15:00 - 15:15</td><td class=\\"p-4\\" colspan=\\"2\\">Nghỉ giải lao</td></tr><tr class=\\"hover:bg-paper/50 transition-colors\\"><td class=\\"p-4 font-semibold text-ink align-top\\">15:15 - 16:45</td><td class=\\"p-4\\"><p class=\\"font-bold text-ink mb-1\\">Phiên 4: AI trong phòng, chống thông tin sai lệch và các thách thức an ninh trong tương lai</p><p class=\\"italic text-cipher mb-3\\">(Chair: Học viện Báo chí & Tuyên truyền)</p><ul class=\\"list-disc pl-5 space-y-1\\"><li>AI & bảo vệ dữ liệu cá nhân</li><li>AI giải thích được (Explainable AI) trong An toàn thông tin</li><li>Rủi ro từ AI tạo sinh (Generative AI) (deepfake, lừa đảo, fakenews)</li></ul></td><td class=\\"p-4 align-top\\">Nhà khoa học/Luật sư/Doanh nghiệp AI</td></tr></tbody></table></div></div></div></section></div>"
          })
        ])
      }
    },
    {
      slug: "venue",
      isSystem: false,
      sortOrder: 6,
      vi: {
        title: "Địa điểm",
        content: makePuckContent([
          ai4crisSection({
            title: "Địa điểm",
            titleAlign: "center",
            variant: "plain",
            contentHtml: ""
          }),
          ai4crisSection({
            title: "",
            titleAlign: "left",
            variant: "plain",
            contentHtml: "<div class=\\"grid grid-cols-1 lg:grid-cols-2 gap-12\\"><div class=\\"space-y-8\\"><section class=\\"bg-paper p-8 rounded-2xl border border-rule\\"><h2 class=\\"text-[24px] font-bold text-ink mb-6\\">📍 Địa điểm tổ chức</h2><p class=\\"text-[18px] font-semibold text-ink mb-2\\">Học viện Kỹ thuật mật mã</p><p class=\\"text-[18px] text-slate\\">141 Chiến Thắng, Thanh Liệt, Hà Nội</p></section><section class=\\"bg-paper p-8 rounded-2xl border border-rule\\"><div class=\\"flex items-center gap-3 mb-6\\"><h2 class=\\"text-[24px] font-bold text-ink\\">🏢 Khu vực tổ chức</h2></div><ul class=\\"space-y-4\\"><li class=\\"flex flex-col gap-1\\"><span class=\\"text-[18px] font-semibold text-ink\\">Phiên toàn thể và phiên bàn tròn</span><span class=\\"text-[17px] text-slate flex items-start gap-2\\">Hội trường lớn Học viện Kỹ thuật mật mã.</span></li><li class=\\"flex flex-col gap-1\\"><span class=\\"text-[18px] font-semibold text-ink\\">Phiên chuyên đề A</span><span class=\\"text-[17px] text-slate flex items-start gap-2\\">Hội trường Học viện Kỹ thuật mật mã.</span></li><li class=\\"flex flex-col gap-1\\"><span class=\\"text-[18px] font-semibold text-ink\\">Phiên chuyên đề B</span><span class=\\"text-[17px] text-slate flex items-start gap-2\\">Phòng đọc tầng 2, tòa nhà TB2.</span></li></ul></section><section class=\\"bg-[#e6f4f8] p-8 rounded-2xl border border-[#b0d9e6]\\"><div class=\\"flex items-center gap-3 mb-4\\"><h2 class=\\"text-[20px] font-bold text-[#0b2740]\\">ℹ️ Thông tin dành cho đại biểu</h2></div><ul class=\\"list-disc pl-5 space-y-2 text-[17px] text-[#0b2740]\\"><li>Đại biểu vui lòng có mặt trước giờ khai mạc ít nhất 15 phút để hoàn tất thủ tục đăng ký.</li><li>Khu vực đón tiếp và cấp phát tài liệu được bố trí tại sảnh Hội trường.</li><li>Ban Tổ chức sẽ có nhân viên hỗ trợ hướng dẫn trong suốt thời gian diễn ra hội thảo.</li></ul></section></div><div class=\\"h-full min-h-[400px] rounded-2xl overflow-hidden border border-rule shadow-sm\\"><iframe src=\\"https://maps.google.com/maps?q=141%20Chi%E1%BA%BFn%20Th%E1%BA%AFng,%20T%C3%A2n%20Tri%E1%BB%81u,%20Thanh%20Tr%C3%AC,%20H%C3%A0%20N%E1%BB%99i,%20Vi%E1%BB%87t%20Nam&t=m&z=15&output=embed&iwloc=near\\" width=\\"100%\\" height=\\"100%\\" style=\\"border: 0; min-height: 400px;\\" allowfullscreen=\\"\\" loading=\\"lazy\\" referrerpolicy=\\"no-referrer-when-downgrade\\"></iframe></div></div>"
          })
        ])
      }
    },
    {
      slug: "_footer",
      isSystem: true,
      sortOrder: 99,
      vi: {
        title: "Footer",
        content: makePuckContent([
          ai4crisSection({
            title: "Trí tuệ nhân tạo cho Mật mã & ATTT 2026",
            titleAlign: "left",
            variant: "plain",
            contentHtml: "<p>141 Chiến Thắng, Tân Triều, Thanh Trì, Hà Nội, Việt Nam<br/>Email: AI4CRIS@actvn.edu.vn<br/>Điện thoại: 0984 346 162</p>"
          })
        ])
      }
    }
  ];`;

const startIdx = code.indexOf('const pages = [');
const endIdx = code.indexOf('for (const pageData of pages) {');

if (startIdx !== -1 && endIdx !== -1) {
  const createPagesCode = `await prisma.pageTranslation.deleteMany({});
  await prisma.page.deleteMany({});
  console.log("✅ Wiped existing pages");

  for (const pageData of pages) {`;
  code = code.substring(0, startIdx) + pagesArrayCode + '\n\n  ' + code.substring(endIdx).replace('for (const pageData of pages) {', createPagesCode);
  
  fs.writeFileSync('server/prisma/seed-ai4cris.ts', code);
  console.log("Successfully generated seed file");
}
