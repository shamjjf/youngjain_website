import { Reveal, PageHero } from "@/components/ui";
export const metadata = { title: "Achievements" };
export default function AchievementsPage() {
  return (<>
    <PageHero badge="MILESTONES" title={<>Our <strong>Achievements</strong></>} subtitle="Key milestones and accomplishments that mark our community's growth and impact." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}><div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>
      <Reveal><p style={{fontFamily:"var(--fb)",fontSize:17,color:"var(--slate)",lineHeight:1.8,maxWidth:600,margin:"0 auto"}}>Achievements content is coming soon. Stay tuned!</p></Reveal>
      <Reveal delay={0.1}><div style={{fontSize:64,marginTop:32,opacity:0.3}}>📈</div></Reveal>
    </div></section>
  </>);
}
