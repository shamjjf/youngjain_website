import { Reveal, PageHero, SectionHeader } from "@/components/ui";
export const metadata = { title: "Blogs" };
export default function BlogsPage() {
  return (<>
    <PageHero badge="BLOGS" title={<>Community <strong>Voices</strong></>} subtitle="Insights, reflections, and stories from our community members." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}><div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>
      <Reveal><p style={{fontFamily:"var(--fb)",fontSize:17,color:"var(--slate)",lineHeight:1.8,maxWidth:600,margin:"0 auto"}}>Blog posts are coming soon. Want to contribute? Reach out to us!</p></Reveal>
      <Reveal delay={0.1}><div style={{fontSize:64,marginTop:32,opacity:0.3}}>✍️</div></Reveal>
    </div></section>
  </>);
}
