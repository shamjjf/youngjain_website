import { Reveal, PageHero } from "@/components/ui";
export const metadata = { title: "Awards" };
export default function AwardsPage() {
  return (<>
    <PageHero badge="RECOGNITION" title={<>Awards & <strong>Honours</strong></>} subtitle="Recognitions and accolades received by our community members and the organisation." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}><div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>
      <Reveal><p style={{fontFamily:"var(--fb)",fontSize:17,color:"var(--slate)",lineHeight:1.8,maxWidth:600,margin:"0 auto"}}>Awards content is coming soon. Stay tuned for updates!</p></Reveal>
      <Reveal delay={0.1}><div style={{fontSize:64,marginTop:32,opacity:0.3}}>🏆</div></Reveal>
    </div></section>
  </>);
}
