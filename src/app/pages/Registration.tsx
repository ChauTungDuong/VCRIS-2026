import React from 'react';
import PageRenderer from "../components/PageRenderer";

export default function Registration() {
  return (
    <PageRenderer
      slug="registration"
      fallback={
        <div className="pt-24 pb-24 bg-white min-h-screen">
          <div className="max-w-[800px] mx-auto px-6">
            <h1
              className="text-[44px] font-bold italic text-ink leading-[1.15] mb-8 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Đăng ký tham dự
            </h1>

            <div className="bg-paper p-8 rounded-3xl border border-rule space-y-8" style={{ fontFamily: "var(--font-body)" }}>
              <p className="text-[16px] text-slate leading-relaxed">
                Để tham dự Hội thảo, vui lòng thực hiện đăng ký trực tuyến thông qua biểu mẫu Google Form của Ban Tổ chức.
              </p>

              <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-cipher/20 shadow-sm gap-4">
                <a 
                  href="https://forms.gle/your-google-form-link-here" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-cipher text-white font-bold text-[18px] hover:bg-cipher/90 transition-colors shadow-md hover:shadow-lg"
                >
                  👉 Đăng ký tham dự tại đây
                </a>
                <p className="text-[13px] text-slate italic text-center max-w-[400px]">
                  Sau khi hoàn thành biểu mẫu đăng ký, hệ thống sẽ ghi nhận thông tin của Quý đại biểu. Ban Tổ chức sẽ gửi thư xác nhận tham dự và các thông tin liên quan đến hội thảo qua email đã đăng ký.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[20px] font-bold text-ink">Lưu ý</h3>
                <ul className="list-disc pl-6 space-y-2 text-[15px] text-slate">
                  <li>Việc đăng ký tham dự là hoàn toàn miễn phí.</li>
                  <li>Số lượng đại biểu tham dự trực tiếp có thể được giới hạn tùy theo điều kiện tổ chức.</li>
                  <li>Ban Tổ chức khuyến nghị các đại biểu đăng ký sớm để thuận tiện cho công tác tổ chức.</li>
                </ul>
              </div>

              <div className="space-y-4 border-t border-rule pt-8">
                <h3 className="text-[20px] font-bold text-ink">Thông tin liên hệ</h3>
                <div className="text-[15px] text-slate space-y-2">
                  <p><span className="font-semibold text-ink">Ms. Vương Thị Hải Hà</span></p>
                  <p>SĐT: 0984 346 162</p>
                  <p>Email: <a href="mailto:AI4Security@actvn.edu.vn" className="text-cipher hover:underline">AI4Security@actvn.edu.vn</a></p>
                </div>
              </div>

              <p className="text-[16px] font-bold text-ink text-center pt-4">
                Ban Tổ chức trân trọng cảm ơn sự quan tâm và mong được đón tiếp Quý đại biểu tại Hội thảo AI4CRIS 2026.
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
}
