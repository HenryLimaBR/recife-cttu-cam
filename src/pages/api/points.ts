import type { NextApiRequest, NextApiResponse } from 'next'
import { getPoints } from '../../services/getPoints'

const Points = async (req: NextApiRequest, res: NextApiResponse) => {
  const points = await getPoints()
  res.status(200).json(points)
}

export default Points