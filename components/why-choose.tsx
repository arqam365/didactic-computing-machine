
import { ArrowUpRight } from "lucide-react"

type Feature = {
  title: string
  variant: "dark" | "light"
  image: string
}

const features: Feature[] = [
  {
    title: "Dermatologist tested",
    variant: "dark",
    image: "/fillers/3.jpg",
  },
  {
    title: "Lightweight & fast-absorbing",
    variant: "light",
    image: "/fillers/lightwait and fast.jpg",
  },
  {
    title: "No unnecessary fillers",
    variant: "dark",
    image: "/fillers/no fillers.jpg",
  },
  {
    title: "Designed for Indian climate & skin conditions",
    variant: "light",
    image: "/tone 1 pic.png",
  },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" aria-labelledby="why-choose-title" className="w-full bg-[#EEEEEE]">
      <div className="mx-auto w-full max-w-screen px-6 sm:px-12 lg:px-24 py-16 lg:py-32">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="rounded px-8 py-2 text-[#0E0E0E]" aria-hidden>
            <div className="pointer-events-none inline-block rounded bg-gradient-to-r from-neutral-500 to-transparent px-8 py-2 text-base">
              Why Choose HelloCloud
            </div>
          </div>
          <h2
            id="why-choose-title"
            className="text-center text-[#0E0E0E] text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-[891px]"
          >
            Designed for Real Indian Skin
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-4">
          {features.map((f, idx) => {
            const isDark = f.variant === "dark"
            return (
              <div
                key={idx}
                className={[
                  "flex flex-col items-center justify-center gap-8 rounded-lg border shadow",
                  "min-h-[220px] p-8",
                  isDark ? "bg-[#0E0E0E] text-[#EEEEEE] border-white/15" : "bg-[#ECECEC] text-[#0E0E0E] border-black/10",
                ].join(" ")}
              >
                {/* Image (square aspect, min height 174px) */}
                <div className="w-full aspect-square min-h-[174px] rounded-md overflow-hidden">
                  <img src={f.image} alt={f.title} className="h-full w-full object-cover" />
                </div>
                <p className="text-center text-2xl font-medium leading-tight">{f.title}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <span className="inline-flex rounded-[8px] p-[1.5px] bg-[linear-gradient(138deg,rgba(0,0,0,0.35)_0%,rgba(153,153,153,0)_100%)] shadow-[0px_4px_14.9px_rgba(0,0,0,0.15)]">
            <a
              href="/#meet-the-serums"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#EEEEEE] px-12 py-4 text-[#0E0E0E] font-medium text-[20px] leading-[1.302em]"
            >
              Grab Yours Now
              <ArrowUpRight className="size-5" />
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}