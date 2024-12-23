import React from "react";
import { Editor } from "./editor";
import ToolBar from "./toolbar";
import Navbar from "./navbar";

const DocumentID = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const documentId = (await params).documentId;
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <div className=" flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden ">
        <Navbar />
        <ToolBar />
      </div>
      <div className="pt-[114px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
};

export default DocumentID;
