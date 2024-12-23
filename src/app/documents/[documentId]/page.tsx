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
      <Navbar />
      <ToolBar />
      <Editor />
    </div>
  );
};

export default DocumentID;
