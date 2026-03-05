import { Reveal, PageHero, SectionHeader, BentoCard } from "@/components/ui";
export const metadata = { title: "Volunteer" };
export default function VolunteerPage() {
  return (<>
    <PageHero badge="VOLUNTEER" title={<>Make a <strong>Difference</strong></>} subtitle="Join hands with a community of compassionate young people. Every effort helps strengthen the community and its outreach." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <Reveal><SectionHeader badge="GET INVOLVED" title={<>Ways to <span style={{fontWeight:800,color:"var(--red)"}}>Contribute</span></>} /></Reveal>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:20}}>
          {[
            {t:"Community Gatherings",d:"Organise and lead youth meet-ups, discussions and group activities that encourage learning and connection.",tag:"CONNECT",tc:"navy" as const},
            {t:"Workshops & Service",d:"Help run talks, mindfulness sessions, and volunteer projects that promote compassion and positive impact.",tag:"TEACH",tc:"red" as const},
            {t:"Cultural Events",d:"Plan and coordinate festivals, celebrations, and meaningful traditions in a youth-friendly environment.",tag:"CELEBRATE",tc:"navy" as const},
            {t:"Content & Outreach",d:"Write blogs, manage social media, design posters — use your creative skills to amplify our message.",tag:"CREATE",tc:"red" as const},
            {t:"Donate & Fundraise",d:"Support the community financially or help organise fundraising events and campaigns.",tag:"GIVE",tc:"navy" as const},
            {t:"Local Representative",d:"Become a representative in your city and help build a local YoungJains chapter.",tag:"LEAD",tc:"red" as const},
          ].map((item,i)=>(
            <Reveal key={item.t} delay={i*0.08}><BentoCard title={item.t} desc={item.d} tag={item.tag} tagColor={item.tc} /></Reveal>
          ))}
        </div>
      </div>
    </section>
    <section style={{padding:"80px 40px",background:"var(--ice)",textAlign:"center"}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        <Reveal><SectionHeader badge="READY?" title={<>Start Your <strong>Journey</strong> Today</>} subtitle="Fill out our volunteer form and we'll get in touch with the right opportunity for you." /></Reveal>
        <Reveal delay={0.15}><div style={{fontFamily:"var(--fb)",fontSize:15,color:"var(--slate)",marginTop:8}}>Contact us at <strong style={{color:"var(--navy)"}}>volunteer@youngjains.org</strong></div></Reveal>
      </div>
    </section>
  </>);
}
