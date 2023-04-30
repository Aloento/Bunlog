/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request, { params: { id } }: { params: { id: string } }) {
  const post = "Modern web technologies provide ample ways to work with video. Media Stream API, Media Recording API, Media Source API, and WebRTC API add up to a rich tool set for recording, transferring, and playing video streams. While solving certain high-level tasks, these APIs don't let web programmers work with individual components of a video stream such as frames and unmuxed chunks of encoded video or audio. To get low-level access to these basic components, developers have been using WebAssembly to bring video and audio codecs into the browser. But given that modern browsers already ship with a variety of codecs (which are often accelerated by hardware), repackaging them as WebAssembly seems like a waste of human and computer resources."
  return new Response(post);
}
