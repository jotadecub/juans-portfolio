import { motion } from "motion/react";
import { profile } from "../data/profile";

const buttonBase =
  "inline-flex min-h-11 items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";

const primaryButton =
  `${buttonBase} border-[#101618] bg-[#101618] text-white hover:bg-[#293438]`;

const secondaryButton =
  `${buttonBase} border-[#9da5a9] text-[#111618] hover:bg-[#e3e7e9]`;

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="bg-[#f3f4f4] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]">
            Hola, soy
          </p>

          <h1
            id="inicio-title"
            className="text-5xl leading-[0.98] font-extrabold tracking-tighter sm:text-6xl lg:text-7xl"
          >
            {profile.firstName}

            <span className="block text-[#737b80]">
              {profile.lastName}
            </span>
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <p className="text-base sm:text-lg">
              {profile.role}
            </p>

            <span
              aria-hidden="true"
              className="h-px w-10 shrink-0 bg-[#555e63]"
            />
          </div>

          <p className="mt-5 max-w-lg text-base leading-7 text-[#555e63]">
            {profile.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className={primaryButton}
              >
                Correo
              </a>
            )}

            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                GitHub
                <span className="sr-only">
                  {" "}(se abre en otra pestaña)
                </span>
              </a>
            )}

            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                LinkedIn
                <span className="sr-only">
                  {" "}(se abre en otra pestaña)
                </span>
              </a>
            )}

            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className={primaryButton}
              >
                Descargar CV
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="absolute -top-4 right-5 h-24 w-3/4 -rotate-3 rounded-3xl bg-[#dce1e3]"
          />

          <div className="relative aspect-4/3 overflow-hidden rounded-4xl bg-[#e5e9eb]">
            {profile.imageUrl ? (
              <img
                src={profile.imageUrl}
                alt=""
                width={800}
                height={600}
                className="h-full w-full object-top object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center p-8">
                <div className="text-center">
                  <span
                    aria-hidden="true"
                    className="text-7xl font-extrabold tracking-tighter text-[#737b80]"
                  >
                    {"</>"}
                  </span>

                  <p className="mt-4 text-sm text-[#555e63]">
                    Tu espacio de trabajo, tu próxima idea.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}