type SkillRunProps = {
  skills: readonly string[];
  levels?: Record<string, string>;
};

type SkillsCarouselProps = {
  skills: { hard: readonly string[]; soft: readonly string[] };
  levels?: Record<string, string>;
};

function SkillRun({ skills, levels }: SkillRunProps) {
  return (
    <>
      {[0, 1].map((copy) => (
        <div className="skill-marquee-set" key={copy}>
          {[0, 1, 2].map((repeat) => skills.map((skill) => (
            <span className="glass skill-marquee-item" key={`${repeat}-${skill}`}>
              <i>✦</i><span>{skill}</span>{levels?.[skill] && <small>{levels[skill]}</small>}
            </span>
          )))}
        </div>
      ))}
    </>
  );
}

export function SkillsCarousel({ skills, levels }: SkillsCarouselProps) {
  const firstLine = skills.hard;
  const secondLine = skills.soft;

  return (
    <div className="skill-marquee" aria-label="Skills I work with">
      {(["hard", "soft"] as const).map((kind) => (
        <ul className="skill-static-list sr-only" aria-label={kind === "hard" ? "Hard skills" : "Soft skills"} key={kind}>
          {skills[kind].map((skill) => <li className="glass skill-marquee-item" key={skill}>{skill}{levels?.[skill] && <small>{levels[skill]}</small>}</li>)}
        </ul>
      ))}
      <div className="skill-marquee-row" aria-hidden="true">
        <div className="skill-marquee-track" style={{ animationDuration: `${firstLine.length * 15}s` }}><SkillRun skills={firstLine} levels={levels} /></div>
      </div>
      <div className="skill-marquee-row skill-marquee-row-reverse" aria-hidden="true">
        <div className="skill-marquee-track" style={{ animationDuration: `${secondLine.length * 16}s` }}><SkillRun skills={secondLine} levels={levels} /></div>
      </div>
    </div>
  );
}
