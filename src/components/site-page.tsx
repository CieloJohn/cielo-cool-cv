import type { ReactNode } from "react"
import { Mail } from "lucide-react"

import { site } from "../../content/site"
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
import { Separator } from "@/components/ui/separator"

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

function Section({
  id,
  index,
  title,
  intro,
  children,
}: {
  id: string
  index: string
  title: string
  intro?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            {index}
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-none tracking-tight">
            {title}
          </h2>
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
      className="h-11 w-fit px-4 text-base"
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
        className="h-11 bg-card text-base md:text-base"
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
              className="h-11 px-4 text-base"
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
    <div id="top" className="min-h-full bg-background text-foreground">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-20 focus:bg-background focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="h-1.5 bg-primary" aria-hidden="true" />
      <header className="sticky top-0 z-10 border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <a href="#top" className="font-heading text-xl tracking-tight">
            {site.name}
          </a>
          <nav aria-label="Page" className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="content">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)] lg:items-end lg:py-32">
          <div>
            <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
              {site.role}
            </p>
            <h1 className="mt-5 font-heading text-[clamp(3.5rem,11vw,6.75rem)] leading-[0.88] font-medium tracking-[-0.04em]">
              {site.nameLines.length > 0
                ? site.nameLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))
                : site.name}
            </h1>
          </div>
          <div className="border-t-2 border-primary pt-6 lg:border-t-0 lg:border-l-2 lg:pt-1 lg:pl-8">
            <p className="max-w-md text-lg leading-relaxed">{site.lede}</p>
            <div className="mt-8">
              <EmailActions showField={false} />
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
                  className="rounded-md bg-card shadow-none ring-border"
                >
                  <CardHeader className="gap-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <Badge variant="outline">{item.label}</Badge>
                      <p className="font-mono text-xs text-muted-foreground">
                        {item.dates}
                      </p>
                    </div>
                    <CardTitle className="font-heading text-2xl leading-tight font-medium tracking-tight sm:text-3xl">
                      <h3>{item.title}</h3>
                    </CardTitle>
                    <CardDescription className="text-base text-foreground">
                      {item.organization}
                      {hasText(item.place) ? ` · ${item.place}` : ""}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>
                    {item.details.length > 0 ? (
                      <ul className="flex flex-wrap gap-2">
                        {item.details.map((detail) => (
                          <li key={detail}>
                            <Badge variant="secondary">{detail}</Badge>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </CardContent>
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
                  className="border-b border-border py-3 text-base"
                >
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
                  <h3 className="font-heading text-2xl tracking-tight">
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
              {showEducation && showTraining ? <Separator /> : null}
              {showTraining ? (
                <div>
                  <h3 className="font-heading text-2xl tracking-tight">
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

        <Section id="contact" index="04" title="Contact">
          <p className="mb-8 max-w-xl text-lg leading-relaxed">
            Email is the public way to reach {site.name}.
          </p>
          <EmailActions showField />
          <ProfileLinks />
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{site.name}</p>
          <p>{site.role}</p>
        </div>
      </footer>
    </div>
  )
}
