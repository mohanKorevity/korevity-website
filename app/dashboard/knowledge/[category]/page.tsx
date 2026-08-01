import Link from "next/link";
import { knowledgeCategories } from "../../data/knowledgeData";


export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {


  const { category } = await params;


  const categoryName = decodeURIComponent(category);


  const data = knowledgeCategories.find(
    (item) => item.name === categoryName
  );


  return (
    <div>

      <h1>
        Category Page
      </h1>


      <h2>
        {categoryName}
      </h2>


      {data?.documents.map((doc)=>(

        <Link
  key={doc.id}
          href={`/dashboard/knowledge/${encodeURIComponent(categoryName)}/${encodeURIComponent(doc.id)}`}
        >

          <div>
            {doc.name}
          </div>

        </Link>

      ))}


    </div>
  );
}