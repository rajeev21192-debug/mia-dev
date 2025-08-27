// CommonJS Contentlayer config so the CLI can find it reliably on Vercel
const { defineDocumentType, makeSource } = require("contentlayer2/source-files")
const remarkGfm = require("remark-gfm")

const JournalPost = defineDocumentType(() => ({
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
    url: { type: "string", resolve: (doc) => `/journal/${doc.slug}` },
    minutes: {
      type: "number",
      resolve: (doc) => {
        const text = doc.body.raw.replace(/<[^>]+>/g, "").replace(/[`*_>#-]/g, " ")
        const words = text.trim().split(/\s+/).length
        return Math.max(1, Math.round(words / 200))
      }
    }
  }
}))

module.exports = makeSource({
  contentDirPath: "content",
  documentTypes: [JournalPost],
  mdx: { remarkPlugins: [remarkGfm] },
  disableImportAliasWarning: true
})
