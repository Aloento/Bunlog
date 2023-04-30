import { IPill } from "@/Components/Pill";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request) {
  const res: IPill = {
    Name: ".NET",
    Count: 9
  }

  return new Response(JSON.stringify(Array(9).fill(res)));
}
