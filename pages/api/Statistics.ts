import { IStatistics } from '@/Components/PersonCard'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IStatistics>
) {
  if (req.method === "GET") {
    return res.status(200).json({
      Posts: 10,
      Categories: 16,
      Tags: 23
    })
  }
}
