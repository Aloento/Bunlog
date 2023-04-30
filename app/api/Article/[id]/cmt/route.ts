/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request) {
  const id = new URL(request.url).pathname.split("/").reverse()[1];

  return new Response(JSON.stringify([123, 321]));
}
