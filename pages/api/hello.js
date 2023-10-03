// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const data = {
  sectionTitles: [
    { id: 0, title: "About" },
    { id: 1, title: "Tokenomics" },
    { id: 2, title: "Charity" },
    { id: 3, title: "Documents" },
    { id: 4, title: "Swap" },
    { id: 5, title: "Contact" }
  ]
}
