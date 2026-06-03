import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { organizingCommitteeGroups } from "../data/conferenceData";
import PageRenderer from "../components/PageRenderer";

export default function Members() {
  return (
    <PageRenderer
      slug="members"
      fallback={
        <div className="pt-24 pb-24 bg-white min-h-screen">
          <div className="max-w-[1000px] mx-auto px-6">
            <h1
              className="text-[44px] font-bold italic text-ink leading-[1.15] mb-12 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Thành viên
            </h1>
            
            <Tabs defaultValue="ban-to-chuc" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="ban-to-chuc" style={{ fontFamily: "var(--font-body)", fontSize: "16px" }}>Ban tổ chức</TabsTrigger>
                <TabsTrigger value="ban-chuong-trinh" style={{ fontFamily: "var(--font-body)", fontSize: "16px" }}>Ban chương trình</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ban-to-chuc" className="bg-paper p-8 rounded-2xl border border-rule">
                <div className="space-y-6" style={{ fontFamily: "var(--font-body)" }}>
                  <div>
                    <h3 className="text-[20px] font-bold text-ink mb-2">Đơn vị chủ trì tổ chức</h3>
                    <p className="text-[16px] text-slate">Học viện Kỹ thuật mật mã.</p>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-ink mb-2">Đơn vị đồng tổ chức</h3>
                    <p className="text-[16px] text-slate">Câu lạc bộ các Khoa - Trường - Viện Công nghệ thông tin - Truyền thông Việt Nam (FISU VN).</p>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-ink mb-2">Đơn vị phối hợp</h3>
                    <p className="text-[16px] text-slate">Học viện Báo chí và Tuyên truyền, Tạp chí An toàn thông tin.</p>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-ink mb-2">Đơn vị bảo trợ</h3>
                    <p className="text-[16px] text-slate">Ban Cơ yếu Chính phủ, Bộ Khoa học và Công nghệ, Hiệp hội tin học Việt Nam, Hiệp hội An ninh mạng Quốc Gia, Trung tâm Dữ liệu Quốc Gia.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ban-chuong-trinh" className="bg-paper p-8 rounded-2xl border border-rule">
                <div className="space-y-4" style={{ fontFamily: "var(--font-body)" }}>
                  <h3 className="text-[24px] font-bold text-ink mb-6 border-b border-rule pb-4">Danh sách thành viên Ban Chương trình</h3>
                  {organizingCommitteeGroups[0].members.map((member, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cipher mt-2 flex-shrink-0" />
                      <p className={`text-[16px] ${member.isChair ? "font-bold text-ink" : "text-slate"}`}>
                        {member.name}
                      </p>
                    </div>
                  ))}
                  <p className="text-[14px] text-slate italic mt-8 pt-4 border-t border-rule text-center">
                    Danh sách thành viên Ban chương trình sẽ liên tục được cập nhật!
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      }
    />
  );
}
