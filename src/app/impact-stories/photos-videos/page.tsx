import { Reveal, PageHero } from "@/components/ui";
export const metadata = { title: "Photos & Videos" };
export default function PhotosVideosPage() {
  return (<>
    <PageHero badge="GALLERY" title={<>Photos & <strong>Videos</strong></>} subtitle="A visual journey through our events, gatherings, celebrations, and community moments." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}><div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>
      <Reveal><p style={{fontFamily:"var(--fb)",fontSize:17,color:"var(--slate)",lineHeight:1.8,maxWidth:600,margin:"0 auto"}}>Gallery is coming soon. Stay tuned!</p></Reveal>
      <Reveal delay={0.1}><div style={{fontSize:64,marginTop:32,opacity:0.3}}>📸</div></Reveal>
    </div></section>
  </>);
}
