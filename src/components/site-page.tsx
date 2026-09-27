import type { ReactNode } from "react"
import { Mail } from "lucide-react"
import { cn } from "cn"

import { site } from "../../content/site"
import { PosterArch } from "@/components/poster-ornament"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const nav = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

function isUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === "https:" || url.protocol === "http:"
  } catch {
    return false
  }
}

function hasText(value: string) {
  return value.trim().length > 0
}

function DottedRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-px bg-[repeating-linear-gradient(90deg,var(--gold)_0_3px,transparent_3px_8px)]",
        className
      )}
    />
  )
}

function Section({
  id,
  index,
  title,
  intro,
  snap = true,
  className,
  children,
}: {
  id: string
  index: string
  title: string
  intro?: string
  snap?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        "flex min-h-dvh scroll-mt-24 flex-col border-t border-primary/20",
        snap && "snap-start",
        className
      )}
    >
      <div className="mx-auto my-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="inline-flex bg-primary px-2 py-1 font-mono text-[0.68rem] tracking-[0.24em] text-primary-foreground uppercase">
            {index}
          </p>
          <h2 className="mt-4 font-heading text-5xl leading-none font-semibold tracking-tight">
            {title}
          </h2>
          <DottedRule className="mt-5 max-w-24" />
        </div>
        <div className="min-w-0">
          {intro ? (
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  )
}

function EmailButton() {
  return (
    <Button
      nativeButton={false}
      size="lg"
      className="h-11 w-fit rounded-none border border-ink bg-ink px-5 text-base tracking-wide text-gold-bright hover:bg-primary hover:text-primary-foreground"
      render={<a href={`mailto:${site.email}`} />}
    >
      <Mail data-icon="inline-start" />
      Write an email
    </Button>
  )
}

function EmailActions({ showField }: { showField: boolean }) {
  if (!site.email.includes("@")) {
    return (
      <p className="text-base text-muted-foreground">
        Add a public email in <span className="font-mono text-sm">content/site.ts</span>.
      </p>
    )
  }

  if (!showField) {
    return <EmailButton />
  }

  return (
    <div className="flex max-w-md flex-col gap-3">
      <label htmlFor="email" className="text-sm text-muted-foreground">
        Email address
      </label>
      <Input
        id="email"
        readOnly
        value={site.email}
        aria-readonly="true"
        className="h-11 rounded-none border-primary/30 bg-card text-base md:text-base"
      />
      <p className="text-sm leading-relaxed text-muted-foreground">
        The address is there to copy. The button opens your mail app. This page
        does not send a message.
      </p>
      <EmailButton />
    </div>
  )
}

function ProfileLinks() {
  const links = [
    isUrl(site.github) ? { href: site.github, label: "GitHub" } : null,
    isUrl(site.linkedin) ? { href: site.linkedin, label: "LinkedIn" } : null,
  ].filter((link) => link !== null)

  const missing = [
    isUrl(site.github) ? null : "GitHub",
    isUrl(site.linkedin) ? null : "LinkedIn",
  ].filter((label) => label !== null)

  return (
    <div className="mt-8 flex flex-col gap-4">
      {links.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Button
              key={link.label}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-11 rounded-none border-primary/35 px-4 text-base tracking-wide"
              render={
                <a href={link.href} target="_blank" rel="noreferrer" />
              }
            >
              {link.label}
            </Button>
          ))}
        </div>
      ) : null}
      {missing.length > 0 ? (
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          {missing.join(" and ")} {missing.length === 1 ? "is" : "are"} not
          listed yet. Add the profile URL in{" "}
          <span className="font-mono">content/site.ts</span>.
        </p>
      ) : null}
    </div>
  )
}

export function SitePage() {
  const aboutCopy = site.about.filter(hasText)
  const showEducation = hasText(site.education.degree)
  const showTraining = hasText(site.training.name)
  const aboutEmpty = aboutCopy.length === 0 && !showEducation && !showTraining

  return (
    <div id="top" className="min-h-full overflow-x-hidden bg-background text-foreground">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-20 focus:bg-background focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="h-2 bg-primary" aria-hidden="true" />
      <div className="h-px bg-gold" aria-hidden="true" />
      <header className="sticky top-0 z-20 border-b border-primary/20 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <a href="#top" className="font-heading text-2xl font-semibold tracking-tight">
            {site.name}
          </a>
          <nav aria-label="Page" className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="content">
        <section className="relative flex min-h-[calc(100dvh-4.5rem)] snap-start flex-col overflow-hidden">
          <PosterArch className="pointer-events-none absolute bottom-[-6rem] left-[-14rem] hidden w-[66rem] max-w-none -scale-x-100 text-primary lg:block" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-6 left-5 hidden size-5 border-t border-l border-primary/40 sm:block sm:left-8"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-6 right-5 hidden size-5 border-t border-r border-primary/40 sm:block sm:right-8"
          />
          <div className="relative mx-auto my-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end [&>*]:min-w-0">
            <div className="order-1 max-w-xl lg:order-2 lg:ml-auto lg:max-w-none">
              <p className="inline-flex items-center gap-3 bg-background px-1 font-mono text-[0.68rem] tracking-[0.32em] text-primary uppercase lg:justify-start">
                <span className="inline-block size-2 bg-primary" aria-hidden="true" />
                Software Developer
              </p>
              <h1 className="mt-4 max-w-full font-heading text-[clamp(2.7rem,8.5vw,5.6rem)] leading-[0.86] font-semibold tracking-tight">
                {site.nameLines.length > 0
                  ? site.nameLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))
                  : site.name}
              </h1>
              <DottedRule className="mt-6 max-w-sm lg:ml-auto" />
              <div className="mt-6 flex w-fit max-w-full items-stretch bg-ink text-gold-bright lg:ml-auto">
                <p className="min-w-0 px-4 py-3 font-heading text-[clamp(1.35rem,5.5vw,1.875rem)] leading-none font-semibold tracking-wide sm:px-5 sm:text-3xl">
                  {site.role}
                </p>
                <p className="flex items-center border-l border-gold/40 px-2 font-mono text-[0.62rem] tracking-[0.28em] uppercase [writing-mode:vertical-rl]">
                  CV
                </p>
              </div>
            </div>
            <div className="relative order-2 border border-primary/25 bg-card shadow-[6px_6px_0_0_var(--primary)] sm:shadow-[8px_8px_0_0_var(--primary)] lg:order-1">
              <div className="flex items-center justify-between border-b border-primary/15 px-5 py-3">
                <p className="font-mono text-[0.68rem] tracking-[0.24em] text-primary uppercase">
                  An introduction
                </p>
                <p className="bg-primary px-2 py-0.5 font-mono text-[0.68rem] tracking-[0.16em] text-primary-foreground">
                  01
                </p>
              </div>
              <div className="px-5 py-6">
                <p className="text-lg leading-relaxed">{site.lede}</p>
                <div className="mt-8">
                  <EmailActions showField={false} />
                </div>
              </div>
              <DottedRule />
            </div>
          </div>
        </section>

        <Section id="work" index="01" title="Selected work" intro={site.workIntro}>
          {site.work.length === 0 ? (
            <p className="text-base text-muted-foreground">
              Nothing is listed yet. Add a role or project in{" "}
              <span className="font-mono text-sm">content/site.ts</span>.
            </p>
          ) : (
            <div className="flex flex-col gap-5">
              {site.work.map((item) => (
                <Card
                  key={`${item.title}-${item.dates}`}
                  className="relative rounded-none bg-card py-0 shadow-none ring-0 border border-primary/20"
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-0 bottom-0 left-0 w-1.5 bg-primary"
                  />
                  <CardHeader className="gap-3 px-6 pt-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <Badge className="h-6 rounded-none bg-primary px-2 font-mono text-[0.65rem] tracking-[0.18em] text-primary-foreground uppercase">
                        {item.label}
                      </Badge>
                      <p className="font-mono text-xs tracking-wide text-muted-foreground">
                        {item.dates}
                      </p>
                    </div>
                    <CardTitle className="font-heading text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
                      <h3>{item.title}</h3>
                    </CardTitle>
                    <CardDescription className="text-base text-foreground">
                      {item.organization}
                      {hasText(item.place) ? ` · ${item.place}` : ""}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 px-6 pb-5">
                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>
                    {item.details.length > 0 ? (
                      <ul className="flex flex-wrap gap-2">
                        {item.details.map((detail) => (
                          <li key={detail}>
                            <Badge
                              variant="secondary"
                              className="h-6 rounded-none border border-gold/50 bg-transparent px-2 text-foreground"
                            >
                              {detail}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </CardContent>
                  <DottedRule />
                </Card>
              ))}
            </div>
          )}
        </Section>

        <Section id="skills" index="02" title="Skills" intro={site.skillsIntro}>
          {site.skills.length === 0 ? (
            <p className="text-base text-muted-foreground">
              No skills are listed yet. Add them in{" "}
              <span className="font-mono text-sm">content/site.ts</span>.
            </p>
          ) : (
            <ul className="grid sm:grid-cols-2 sm:gap-x-12">
              {site.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 border-b border-primary/15 py-3 text-base"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rotate-45 bg-gold"
                  />
                  {skill}
                </li>
              ))}
            </ul>
          )}
          {hasText(site.alsoLine) ? (
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Also: {site.alsoLine}
            </p>
          ) : null}
        </Section>

        <Section id="about" index="03" title="About">
          {aboutEmpty ? (
            <p className="text-base text-muted-foreground">
              The about section is empty. Add a short bio in{" "}
              <span className="font-mono text-sm">content/site.ts</span>.
            </p>
          ) : (
            <div className="flex max-w-2xl flex-col gap-10">
              {aboutCopy.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {showEducation ? (
                <div>
                  <h3 className="font-heading text-3xl font-semibold tracking-tight">
                    Education
                  </h3>
                  <dl className="mt-5 grid gap-4 text-base sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-y-3">
                    <dt className="text-muted-foreground">Degree</dt>
                    <dd>{site.education.degree}</dd>
                    <dt className="text-muted-foreground">School</dt>
                    <dd>{site.education.school}</dd>
                    <dt className="text-muted-foreground">Completed</dt>
                    <dd>{site.education.date}</dd>
                    {hasText(site.education.thesis) ? (
                      <>
                        <dt className="text-muted-foreground">Thesis</dt>
                        <dd>{site.education.thesis}</dd>
                      </>
                    ) : null}
                  </dl>
                </div>
              ) : null}
              {showEducation && showTraining ? (
                <DottedRule className="max-w-xs" />
              ) : null}
              {showTraining ? (
                <div>
                  <h3 className="font-heading text-3xl font-semibold tracking-tight">
                    Training
                  </h3>
                  <p className="mt-4 text-base leading-relaxed">
                    {site.training.name}
                    {hasText(site.training.organization)
                      ? `, ${site.training.organization}`
                      : ""}
                    {hasText(site.training.dates)
                      ? ` · ${site.training.dates}`
                      : ""}
                  </p>
                  {hasText(site.training.summary) ? (
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
                      {site.training.summary}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          )}
        </Section>

        <div className="flex min-h-dvh snap-start flex-col">
          <Section
            id="contact"
            index="04"
            title="Contact"
            snap={false}
            className="min-h-0 flex-1"
          >
            <p className="mb-8 max-w-xl text-lg leading-relaxed">
              Email is the public way to reach {site.name}.
            </p>
            <EmailActions showField />
            <ProfileLinks />
          </Section>
          <footer className="bg-ink text-gold-bright">
            <DottedRule />
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-8">
              <p className="font-heading text-3xl font-semibold tracking-tight">
                {site.name}
              </p>
              <p className="font-mono text-[0.68rem] tracking-[0.28em] uppercase">
                {site.role}
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
