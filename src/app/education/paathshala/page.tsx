import { Reveal, PageHero, SectionHeader } from "@/components/ui";
export const metadata = { title: "Paathshala" };
export default function PaathshalaPage() {
  return (<>
    <PageHero badge="PAATHSHALA" title={<>Religious <strong>Education</strong></>} subtitle="Structured classes for youth covering Jain history, ethics, rituals, philosophy, and daily practice." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <Reveal><SectionHeader badge="PROGRAM" title={<>Learning Through <span style={{fontWeight:800,color:"var(--red)"}}>Practice</span></>} subtitle="Our Paathshala curriculum is designed for young learners, making Jain education accessible, engaging, and relevant." /></Reveal>
      <Reveal delay={0.1}><p style={{fontFamily:"var(--fb)",fontSize:16,lineHeight:1.85,color:"var(--slate)",maxWidth:700,margin:"0 auto",textAlign:"center"}}>Classes cover topics from basic Jain principles to advanced philosophy, conducted by experienced teachers in an interactive, youth-friendly format. Whether you&apos;re a beginner or want to deepen your understanding, there&apos;s a place for you.</p></Reveal>
    </div></section>
  </>);
}
