import Link from "next/link";
import { Reveal, PageHero, SectionHeader, BentoCard } from "@/components/ui";
export const metadata = { title: "Impact & Stories" };
export default function ImpactPage() {
  return (<>
    <PageHero badge="IMPACT & STORIES" title={<>Our <strong>Journey</strong> So Far</>} subtitle="Discover the awards, achievements, testimonials, and memories that define our community." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:20}}>
          {[
            {t:"Awards",d:"Recognition and honours our community has received over the years.",href:"/impact-stories/awards",i:"🏆"},
            // {t:"Achievements",d:"Milestones, numbers, and accomplishments we're proud of.",href:"/impact-stories/achievements",i:"📈"},
            {t:"Testimonials",d:"Hear from members about how YoungJains impacted their lives.",href:"/impact-stories/testimonials",i:"💬"},
            {t:"Photos & Videos",d:"Relive our best moments through our media gallery.",href:"/impact-stories/photos-videos",i:"📸"},
          ].map((item,i)=>(
            <Reveal key={item.t} delay={i*0.1}><Link href={item.href}><BentoCard title={item.t} desc={item.d} tagColor={i%2===0?"navy":"red"}><div style={{fontSize:40,marginTop:12,opacity:0.6}}>{item.i}</div></BentoCard></Link></Reveal>
          ))}
        </div>
      </div>
    </section>
  </>);
}
