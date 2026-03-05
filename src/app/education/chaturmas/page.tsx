import { Reveal, PageHero, SectionHeader } from "@/components/ui";
export const metadata = { title: "Chaturmas" };
export default function ChaturmasPage() {
  return (<>
    <PageHero badge="CHATURMAS" title={<>Holy Season of <strong>Devotion</strong></>} subtitle="Special programs during the sacred Chaturmas period — a time of heightened spiritual practice, fasting, and learning." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <Reveal><SectionHeader badge="THE SEASON" title={<>Four Months of <span style={{fontWeight:800,color:"var(--red)"}}>Spiritual Growth</span></>} subtitle="Chaturmas is the four-month rainy season retreat observed in Jainism, a period of intensified religious activity." /></Reveal>
      <Reveal delay={0.1}><p style={{fontFamily:"var(--fb)",fontSize:16,lineHeight:1.85,color:"var(--slate)",maxWidth:700,margin:"0 auto",textAlign:"center"}}>During Chaturmas, YoungJains organises special pravachans, meditation sessions, pratikraman gatherings, and community seva activities. Join us in this sacred period to deepen your connection to Jain dharma.</p></Reveal>
    </div></section>
  </>);
}
