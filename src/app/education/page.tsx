import Link from "next/link";
import { Reveal, PageHero, BentoCard } from "@/components/ui";
export const metadata = { title: "Education" };
export default function EducationPage() {
  return (<>
    <PageHero badge="EDUCATION" title={<>Learn the <strong>Wisdom</strong></>} subtitle="Explore our educational programs rooted in Jain philosophy, scriptures, and spiritual practice." />
    <section style={{padding:"100px 40px",background:"var(--snow)"}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:20}}>
          {[
            {t:"Agam Vachan",d:"Study the sacred Jain Agam texts — the authentic words of Tirthankaras preserved through oral tradition.",href:"/education/agam-vachan",i:"📜"},
            {t:"Paathshala",d:"Structured religious education classes for youth covering Jain history, ethics, rituals, and philosophy.",href:"/education/paathshala",i:"🏫"},
            {t:"Swadhyay",d:"Self-study and group discussion sessions to deepen understanding of Jain scriptures and their modern relevance.",href:"/education/swadhyay",i:"📖"},
            {t:"Chaturmas",d:"Special programs during the holy Chaturmas period — a time of heightened spiritual practice and learning.",href:"/education/chaturmas",i:"🙏"},
          ].map((item,i)=>(
            <Reveal key={item.t} delay={i*0.1}><Link href={item.href}><BentoCard title={item.t} desc={item.d} tagColor={i%2===0?"navy":"red"}><div style={{fontSize:40,marginTop:12,opacity:0.6}}>{item.i}</div></BentoCard></Link></Reveal>
          ))}
        </div>
      </div>
    </section>
  </>);
}
