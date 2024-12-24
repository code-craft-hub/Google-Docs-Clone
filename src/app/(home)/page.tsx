"use client";
import { Navbar } from "./navbar";
import { TemplateGallery } from "./template-gallery";

import { api } from "../../../convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import { DocumentsTable } from "./documents-table";
import { useSearchParams } from "@/hooks/use-search-params";

export default function Home() {
  const [search] = useSearchParams();


  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    {search},
    { initialNumItems: 5 }
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-24">
        <TemplateGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
}
