import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"

export const JournalPost = defineDocumentType(() => ({
  name: "JournalPost",
  filePathPattern: `journal/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: true },
    keywords: { type: "list", of: { type: "string" } },
    category: { type: "string" },
    readingTime: { type: "string" },
    date: { type: "date", required: false }
  },
  computedFields: {
    url: { type: "string", resolve: (doc) => `/journal/${doc.slug}` }
  }
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [JournalPost],
  mdx: { remarkPlugins: [remarkGfm] }
})
