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
            
            <Tabs defaultValue="ban-chi-dao" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="ban-chi-dao" style={{ fontFamily: "var(--font-body)", fontSize: "16px" }}>Ban chỉ đạo</TabsTrigger>
                <TabsTrigger value="ban-to-chuc" style={{ fontFamily: "var(--font-body)", fontSize: "16px" }}>Ban tổ chức</TabsTrigger>
                <TabsTrigger value="ban-chuong-trinh" style={{ fontFamily: "var(--font-body)", fontSize: "16px" }}>Ban chương trình</TabsTrigger>
              </TabsList>
              
              {organizingCommitteeGroups.map((group, groupIndex) => {
                let value = "ban-chi-dao";
                if (group.role === "Ban Tổ chức") value = "ban-to-chuc";
                else if (group.role === "Ban Chương trình") value = "ban-chuong-trinh";

                return (
                  <TabsContent key={groupIndex} value={value} className="bg-paper p-8 rounded-2xl border border-rule">
                    <div className="space-y-4" style={{ fontFamily: "var(--font-body)" }}>
                      <h3 className="text-[24px] font-bold text-ink mb-6 border-b border-rule pb-4">Danh sách thành viên {group.role}</h3>
                      {group.members.map((member, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-cipher mt-2 flex-shrink-0" />
                          <p className={`text-[16px] ${member.isChair ? "font-bold text-ink" : "text-slate"}`}>
                            {member.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </div>
      }
    />
  );
}
