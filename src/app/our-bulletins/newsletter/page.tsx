import { Reveal, PageHero, SectionHeader } from "@/components/ui";
export const metadata = { title: "Newsletter" };
export default function NewsletterPage() {
  return (<>
    <PageHero badge="NEWSLETTER" title={<>Stay <strong>Informed</strong></>} subtitle="Our monthly newsletter with event recaps, announcements, featured articles, and community highlights." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}><div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>
      <Reveal><p style={{fontFamily:"var(--fb)",fontSize:17,color:"var(--slate)",lineHeight:1.8,maxWidth:600,margin:"0 auto"}}>Newsletter archive is coming soon. Subscribe to get future editions!</p></Reveal>
      <Reveal delay={0.1}><div style={{fontSize:64,marginTop:32,opacity:0.3}}>📬</div></Reveal>
    </div></section>
  </>);
}
