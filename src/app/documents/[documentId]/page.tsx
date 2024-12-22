import React from "react";
import { Editor } from "./editor";

const DocumentID = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const documentId = (await params).documentId;
  return <div>Document ID: {documentId}
  <Editor />
  </div>;
};

export default DocumentID;
