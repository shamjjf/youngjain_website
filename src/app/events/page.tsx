import { Reveal, PageHero, SectionHeader, BentoCard } from "@/components/ui";
export const metadata = { title: "Events" };
export default function EventsPage() {
  return (<>
    <PageHero badge="EVENTS" title={<>Upcoming <strong>Gatherings</strong></>} subtitle="From community meet-ups to cultural festivals — join us at our upcoming events and activities." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <Reveal><SectionHeader badge="UPCOMING" title={<>Events <span style={{fontWeight:800,color:"var(--red)"}}>Calendar</span></>} /></Reveal>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:20}}>
          {[
            {t:"Annual Youth Convention 2026",d:"Our flagship event bringing together young Jains from across the country for learning, networking, and cultural celebration.",tag:"FLAGSHIP"},
            {t:"Monthly Swadhyay Circle",d:"Join our monthly study circle where we discuss Jain scriptures, philosophy, and their practical application in modern life.",tag:"MONTHLY"},
            {t:"Paryushan Mahaparva",d:"Celebrate the most important Jain festival with our community — 8 days of fasting, prayer, forgiveness, and spiritual growth.",tag:"FESTIVAL"},
            {t:"Volunteer Training Camp",d:"A weekend camp to train and empower new volunteers with leadership skills, communication, and community building.",tag:"TRAINING"},
            {t:"Inter-City Quiz Competition",d:"Test your knowledge of Jain history, philosophy and culture in our annual quiz competition across cities.",tag:"COMPETITION"},
            {t:"Mindfulness Meditation Retreat",d:"A one-day silent retreat focused on Jain meditation techniques, breathing exercises, and inner peace.",tag:"RETREAT"},
          ].map((e,i)=>(
            <Reveal key={e.t} delay={i*0.08}><BentoCard title={e.t} desc={e.d} tag={e.tag} tagColor={i%2===0?"navy":"red"} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  </>);
}
