import { kbomIndex } from "./knowledge/KBOM/metadata/kbomIndex";


export const knowledgeCategories = [

  {
    name: "AI Knowledge",
    category: "AI Knowledge",

    documents: kbomIndex.map((item) => ({
      id: item.id,
      name: item.title,
      code: item.code,
      file: item.file,
      status: item.status,
    })),

  },


  {
    name: "Business Foundation",
    category: "Business Foundation",
    documents: [],
  },


  {
    name: "Operations",
    category: "Operations",
    documents: [],
  },


  {
    name: "Sales",
    category: "Sales",
    documents: [],
  },


  {
    name: "Marketing",
    category: "Marketing",
    documents: [],
  },


  {
    name: "Finance",
    category: "Finance",
    documents: [],
  },


  {
    name: "HR",
    category: "HR",
    documents: [],
  },


  {
    name: "Technology",
    category: "Technology",
    documents: [],
  },


  {
    name: "Legal",
    category: "Legal",
    documents: [],
  },

];