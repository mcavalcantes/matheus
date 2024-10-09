import BaseLayout from "./components/BaseLayout";
import ContentLayout from "./components/ContentLayout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Skill,
  Experience,
  Project,
  Achievement,
  Social,
} from "./interfaces";
import {
  SKILLS,
  EXPERIENCES,
  PROJECTS,
  ACHIEVEMENTS,
  SOCIALS,
} from "./consts";

export default function App() {
  let theme = localStorage.getItem("page_theme");
  if (theme === null) {
    theme = "light";
    localStorage.setItem("page_theme", "light");
  }

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }

  const [pageTheme, setPageTheme] = useState(theme);

  return (
    <BaseLayout>
      <Header pageTheme={pageTheme} setPageTheme={setPageTheme} />
      <ContentLayout>
        <section className="gap-2 items-center md:gap-4 md:flex-row md:items-start">
          <img src="/src/assets/profile-picture.jpg" className="h-36 w-36 rounded-full" />
          <div className="flex flex-col gap-2">
            <h1 className="w-full text-center md:text-left">Olá, sou o Matheus!</h1>
            <p className="w-full">
              Estudante do 4º período de Engenharia de Computação na UTFPR. Curioso e dedicado,
              tenho interesse em aprender tecnologias novas e me desenvolver na área.
              Conto com uma alta capacidade analítica que, combinada com minha abordagem versátil
              aos problemas, me tornam um profissional extremamente competente.
            </p>
          </div>
        </section>
        <section>
          <h2>Habilidades</h2>
          <ul>
            {SKILLS.map(item =>
              <li key={uuidv4()}>
                <SkillCard
                  GROUP={item.GROUP}
                  LIST={item.LIST}
                />
              </li>
            )}
          </ul>
        </section>
        <section>
          <h2>Experiência</h2>
          <ul>
            {EXPERIENCES.map(item =>
              <li key={uuidv4()}>
                <ExperienceCard
                  TITLE={item.TITLE}
                  SUBTITLE={item.SUBTITLE}
                  START_DATE={item.START_DATE}
                  END_DATE={item.END_DATE}
                  BULLETS={item.BULLETS}
                />
              </li>
            )}
          </ul>
        </section>
        <section>
          <h2>Projetos</h2>
          <ul>
            {PROJECTS.map(item =>
              <li key={uuidv4()}>
                <ProjectCard
                  TITLE={item.TITLE}
                  HREF={item.HREF}
                  DESCRIPTION={item.DESCRIPTION}
                  BULLETS={item.BULLETS}
                />
              </li>
            )}
          </ul>
        </section>
        <section>
          <h2>Conquistas</h2>
          <ul>
            {ACHIEVEMENTS.map(item =>
              <li key={uuidv4()}>
                <AchievementCard 
                  TITLE={item.TITLE}
                  SUBTITLE={item.SUBTITLE}
                  DATE={item.DATE}
                  DESCRIPTION={item.DESCRIPTION}
                />
              </li>
            )}
          </ul>
        </section>
        <section>
          <h2>Social</h2>
          <ul className="md:flex-row gap-2">
            {SOCIALS.map(item =>
              <li key={uuidv4()} className="w-full">
                <SocialCard
                  NAME={item.NAME}
                  HREF={item.HREF}
                  ICON={item.ICON}
                />
              </li>
            )}
          </ul>
        </section>
      </ContentLayout>
      <Footer />
    </BaseLayout>
  );
}

function SkillCard({ GROUP, LIST }: Skill) {
  return (
    <div className="flex overflow-hidden">
      <h3 className="w-28 shrink-0">{GROUP}</h3>
      <ul className="w-full flex flex-row gap-2 flex-wrap">
        {LIST.map(item =>
          <li key={uuidv4()}>
            <div className={"cursor-default select-none w-fit h-6 px-2 flex items-center justify-center rounded-xl"}>
              <p>{item}</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

function ExperienceCard({ TITLE, SUBTITLE, START_DATE, END_DATE, BULLETS }: Experience) {
  return (
    <div className="flex flex-col gap-1 p-4 rounded">
      <div className="flex justify-between items-center">
        <h3>{TITLE}</h3>
      </div>
      <div className="flex justify-between text-sm italic">
        {SUBTITLE && <p className="text-left">{SUBTITLE}</p>}
        {START_DATE && END_DATE && <p className="text-right">{`${START_DATE} – ${END_DATE}`}</p>}
      </div>
      {BULLETS &&
        <ul className="list-disc list-inside gap-1 ml-2">
          {BULLETS.map(item => <li key={uuidv4()}>{item}</li>)}
        </ul>
      }
    </div>
  );
}

function ProjectCard({ TITLE, HREF, DESCRIPTION, BULLETS }: Project) {
  let theme = localStorage.getItem("page_theme");
  return (
    <div className="flex flex-col gap-1 p-4 rounded">
      <div className="flex justify-between items-center">
        <h3>{TITLE}</h3>
        {HREF &&
          <a href={HREF} className="p-0.5 rounded" target="_blank">
            <img src={theme === "light" ? "/src/assets/link-external-black.svg" : "/src/assets/link-external-white.svg"} />
          </a>
        }
      </div>
      {DESCRIPTION && <p>{DESCRIPTION}</p>}
      {BULLETS &&
        <ul className="list-disc list-inside gap-1 ml-2">
          {BULLETS.map(item => <li key={uuidv4()}>{item}</li>)}
        </ul>
      }
    </div>
  );
}

function AchievementCard({ TITLE, SUBTITLE, DATE, DESCRIPTION }: Achievement) {
  return (
    <div className="flex flex-col gap-1 p-4 rounded">
      <div className="flex justify-between items-center">
        <h3>{TITLE}</h3>
      </div>
      <div className="flex justify-between text-sm italic">
        {SUBTITLE && <p className="text-left">{SUBTITLE}</p>}
        {DATE && <p className="text-right">{DATE}</p>}
      </div>
      {DESCRIPTION && <p>{DESCRIPTION}</p>}
    </div>
  );
}

function SocialCard({ NAME, HREF, ICON }: Social) {
  let theme = localStorage.getItem("page_theme");
  return (
    <a href={HREF} target="_blank" className="w-full h-16 md:h-32 flex flex-col items-center justify-center rounded">
      <img src={theme === "light" ? ICON.BLACK : ICON.WHITE} />
      <p>{NAME}</p>
    </a>
  );
}
