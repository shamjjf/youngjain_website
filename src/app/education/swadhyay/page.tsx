import { Reveal, PageHero, SectionHeader } from "@/components/ui";
export const metadata = { title: "Swadhyay" };
export default function SwadhyayPage() {
  return (<>
    <PageHero badge="SWADHYAY" title={<>Self <strong>Study</strong></>} subtitle="Group discussions and self-study sessions to deepen understanding of Jain scriptures and their modern application." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <Reveal><SectionHeader badge="PRACTICE" title={<>Reflect, Discuss, <span style={{fontWeight:800,color:"var(--red)"}}>Grow</span></>} subtitle="Swadhyay is the practice of self-study — reading, reflecting on, and discussing spiritual texts to gain deeper insight." /></Reveal>
      <Reveal delay={0.1}><p style={{fontFamily:"var(--fb)",fontSize:16,lineHeight:1.85,color:"var(--slate)",maxWidth:700,margin:"0 auto",textAlign:"center"}}>Our Swadhyay circles meet regularly, guided by experienced members, creating a space for honest exploration of Jain teachings and how they apply to everyday challenges faced by young people.</p></Reveal>
    </div></section>
  </>);
}
