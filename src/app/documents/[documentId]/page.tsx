import { Id } from "../../../../convex/_generated/dataModel";
import { Document } from "./document";
import { preloadQuery } from "convex/nextjs";
import { auth } from "@clerk/nextjs/server";
import { api } from "../../../../convex/_generated/api";
const DocumentID = async ({
  params,
}: {
  params: Promise<{ documentId: Id<"documents"> }>;
}) => {
  const documentId = (await params).documentId;

  const { getToken } = await auth();
  const token = await getToken({ template: "convex"}) ?? undefined;

  if(!token){
    throw new Error("Unauthorized");
  }

  const preloadedDocument = await preloadQuery(api.documents.getById, {id: documentId}, {token});

  return <Document preloadedDocument={preloadedDocument} />;
};

export default DocumentID;
