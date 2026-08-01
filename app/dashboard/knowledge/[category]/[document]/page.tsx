import DocumentViewer from "../../../components/DocumentViewer";


export default async function DocumentPage({
  params,
}: {
  params: Promise<{
    category: string;
    document: string;
  }>;
}) {


  const { category, document } = await params;


  return (
    <DocumentViewer
      category={decodeURIComponent(category)}
      docName={decodeURIComponent(document)}
    />
  );

}