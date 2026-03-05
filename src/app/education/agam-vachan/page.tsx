import { Reveal, PageHero, SectionHeader } from "@/components/ui";
export const metadata = { title: "Agam Vachan" };
export default function AgamVachanPage() {
  return (<>
    <PageHero badge="AGAM VACHAN" title={<>Sacred <strong>Scriptures</strong></>} subtitle="Study the authentic words of Tirthankaras — the Agam texts that form the foundation of Jain philosophy." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <Reveal><SectionHeader badge="ABOUT" title={<>The Voice of <span style={{fontWeight:800,color:"var(--red)"}}>Truth</span></>} subtitle="Agam literature comprises the canonical texts of Jainism, containing the teachings of Mahavira and other Tirthankaras." /></Reveal>
      <Reveal delay={0.1}><p style={{fontFamily:"var(--fb)",fontSize:16,lineHeight:1.85,color:"var(--slate)",maxWidth:700,margin:"0 auto",textAlign:"center"}}>Our Agam Vachan program brings these ancient teachings to young minds through structured readings, discussions, and practical interpretation. Join our sessions to explore the deep wisdom preserved in these sacred texts.</p></Reveal>
      <Reveal delay={0.2}><div style={{fontFamily:"var(--fd)",fontSize:22,color:"var(--navy)",opacity:0.25,textAlign:"center",marginTop:48}}>धर्मे स्थिरता | सेवया आत्मशुद्धिः | ज्ञानेन मोक्षः</div></Reveal>
    </div></section>
  </>);
}
