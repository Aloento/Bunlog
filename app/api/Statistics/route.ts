import { IStatistics } from '@/Components/PersonCard'

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request) {
  return new Response(JSON.stringify({
    Posts: 10,
    Categories: 16,
    Comments: 23
  } as IStatistics))
}
