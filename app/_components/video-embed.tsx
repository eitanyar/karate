type VideoEmbedProps = { videoId: string; title: string };

const videoIdPattern = /^[A-Za-z0-9_-]{11}$/;

export function VideoEmbed({ videoId, title }: VideoEmbedProps) {
  if (!videoIdPattern.test(videoId) || !title) throw new Error("Invalid video embed");
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  return <figure className="video-embed"><div className="video-player"><iframe src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={title} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div><a href={watchUrl}>{title}</a></figure>;
}
