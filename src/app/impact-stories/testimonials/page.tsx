import { Reveal, PageHero } from "@/components/ui";
export const metadata = { title: "Testimonials" };
export default function TestimonialsPage() {
  return (<>
    <PageHero badge="VOICES" title={<>What Members <strong>Say</strong></>} subtitle="Real stories from real members — hear how YoungJains has made a difference in their lives." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}><div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>
      <Reveal><p style={{fontFamily:"var(--fb)",fontSize:17,color:"var(--slate)",lineHeight:1.8,maxWidth:600,margin:"0 auto"}}>Testimonials coming soon. Stay tuned!</p></Reveal>
      <Reveal delay={0.1}><div style={{fontSize:64,marginTop:32,opacity:0.3}}>💬</div></Reveal>
    </div></section>
  </>);
}
