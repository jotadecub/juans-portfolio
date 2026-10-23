import { about, education, languages } from "../data/about";

export default function About() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-title"
      className="scroll-mt-8 bg-[#101618] py-16 text-[#f3f4f4] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <header>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]">
            Sobre mí
          </p>

          <h2
            id="sobre-mi-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Un poco sobre mí
          </h2>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Presentación */}
          <div>
            <div className="space-y-5 text-base leading-7 text-[#bbc1c4]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 border-l-2 border-[#667278] pl-5">
              <h3 className="text-base font-semibold">
                Mi siguiente paso
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#bbc1c4]">
                {about.currentFocus}
              </p>
            </div>
          </div>

          {/* Formación */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              Formación académica
            </h3>

            <ol className="mt-5 space-y-4">
              {education.map((item) => (
                <li
                  key={item.id}
                  className="rounded-xl border border-[#354044] bg-[#172024] p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs text-[#bbc1c4]">
                      <time dateTime={String(item.startYear)}>
                        {item.startYear}
                      </time>

                      <span aria-hidden="true"> — </span>
                      <span className="sr-only"> hasta </span>

                      <time dateTime={String(item.endYear)}>
                        {item.endYear}
                      </time>
                    </p>

                    <span className="rounded-full border border-[#465257] px-2.5 py-1 text-xs font-medium text-[#e1e6e8]">
                      {item.status === "completed"
                        ? "Titulado"
                        : "En curso"}
                    </span>
                  </div>

                  <h4 className="mt-3 text-base leading-6 font-semibold">
                    {item.program}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#bbc1c4]">
                    {item.institution}
                  </p>

                  {item.status === "in-progress" && (
                    <p className="mt-3 text-xs leading-5 text-[#aab5ba]">
                      Finalización prevista en {item.endYear}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Información complementaria */}
        <div className="mt-12 grid gap-8 border-t border-[#354044] pt-8 md:grid-cols-[1.3fr_0.7fr] md:gap-12">
          <div>
            <h3 className="text-base font-semibold">
              Más allá del código
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#bbc1c4]">
              {about.interests}
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">
              Idiomas
            </h3>

            <ul className="mt-4 flex flex-wrap gap-3">
              {languages.map((language) => (
                <li
                  key={language.id}
                  className="flex items-center gap-3 rounded-lg border border-[#354044] bg-[#172024] px-4 py-2.5"
                >
                  <span className="text-sm text-[#d1d7da]">
                    {language.name}
                  </span>

                  <span className="text-sm font-semibold">
                    {language.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}