import Link from "next/link";
import { Reveal, PageHero, BentoCard } from "@/components/ui";
export const metadata = { title: "Our Bulletins" };
export default function BulletinsPage() {
  return (<>
    <PageHero badge="OUR BULLETINS" title={<>Read & <strong>Stay Updated</strong></>} subtitle="Community blogs, insights, and our newsletter — stay connected with the latest from YoungJains." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}>
      <div style={{maxWidth:900,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}}>
          <Reveal><Link href="/our-bulletins/blogs"><BentoCard title="Blogs" desc="Read insights, reflections, spiritual musings, and community stories written by our members." tagColor="navy"><div style={{fontSize:40,marginTop:12,opacity:0.6}}>✍️</div></BentoCard></Link></Reveal>
          <Reveal delay={0.1}><Link href="/our-bulletins/newsletter"><BentoCard title="Newsletter" desc="Subscribe and catch up on our monthly newsletter with event recaps, announcements, and featured articles." tagColor="red"><div style={{fontSize:40,marginTop:12,opacity:0.6}}>📬</div></BentoCard></Link></Reveal>
        </div>
      </div>
    </section>
  </>);
}
