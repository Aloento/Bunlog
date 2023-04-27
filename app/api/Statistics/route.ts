import { IStatistics } from '@/Components/PersonCard'

export async function GET(request: Request) {
  return new Response(JSON.stringify({
    Posts: 10,
    Categories: 16,
    Tags: 23
  } as IStatistics))
}
