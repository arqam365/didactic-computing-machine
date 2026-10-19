import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface TestimonialData {
  id: number
  name: string
  age: number
  text: string
  avatar: string
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Akansha Saxena",
    age: 27,
    text: "I have really dry skin, and most serums just leave my skin feeling greasy or don’t hydrate enough. But HelloCloud Lunar 02 changed everything. My skin feels deeply nourished, soft, and balanced now. No more dry patches or tightness, even in harsh weather. It’s made for Indian skin like mine!",
        avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Saniya",
    age: 27,
    text: "Being oily-skinned, I always struggled with products that either made me greasier or didn’t work at all. HelloCloud Tone 01 is different. It absorbs super fast, controls oil throughout the day, and helped reduce my acne marks. My skin feels clean, light, and balanced now.",
        avatar: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Anurag",
    age: 27,
    text: "I didn’t believe a skincare product could work this well for oily skin, but HelloCloud Tone 01 proved me wrong. My skin stopped feeling greasy in the humid Indian climate, and acne marks started fading within weeks. It’s lightweight, effective, and exactly what oily skin needs.",
        avatar: "/placeholder-user.jpg",
  },
]

// Figma-exported assets
const FIGMA_QUOTE_TOP = "/small_triangle_polygons.svg"
const FIGMA_TRIANGLES = "/big_triangle_polygon.svg"
const FIGMA_AVATAR = "/ca8970ac72b2dbaae745744cbb39ec4f604568ea.png"

function    TestimonialCard({ testimonial }: { testimonial: TestimonialData }) {
  // Card built to mirror Figma node 115:297
  return (
    <div
      className="bg-white relative rounded-[8px] w-full max-w-[481px] h-[603px] border border-black/15 overflow-hidden"
      data-name="testCard"
      data-node-id="115:297"
    >
      <div className="flex flex-col justify-between items-start p-6 relative size-full">
        {/* Decorative background triangles (bottom) */}
        <div
          className="pointer-events-none absolute h-[256.325px] w-[392.649px] flex items-center justify-center -z-10"
          style={{ top: "calc(40% + 78.8px)", left: "calc(20% + 19.8px)" }}
          aria-hidden
        >
          <img src={FIGMA_TRIANGLES} alt="" className="block max-w-none w-full h-full" />
        </div>

        {/* Quote icon (top-left) */}
        <div className="flex items-center justify-center">
          <div className="rotate-180 scale-y-[-1]">
            <div className="w-[86px] h-[107px] relative" data-node-id="115:257">
              <img src={FIGMA_QUOTE_TOP} alt="" className="block max-w-none w-full h-full" />
            </div>
          </div>
        </div>

        {/* Testimonial text */}
        <div className="w-full pb-16">
          <p className="text-[20px] tracking-[-0.3px] text-black leading-[1.1288]">
            {testimonial.text}
          </p>
        </div>

        {/* User profile */}
        <div className="w-full flex items-center gap-[17px] pb-4">
          <div className="shrink-0 w-[62px] h-[62px]">
            {/* Use provided avatar if available, otherwise Figma placeholder */}
            <img
              src={testimonial.avatar ? testimonial.avatar : FIGMA_AVATAR}
              alt={`${testimonial.name} avatar`}
              width={62}
              height={62}
              className="rounded-full object-cover w-[62px] h-[62px]"
            />
          </div>
          <div className="leading-none text-black">
            <div className="text-[24px] font-medium">{testimonial.name}</div>
            <div className="text-[16px]">Age: {testimonial.age}</div>
          </div>
        </div>
      </div>

      {/* Card border to match Figma */}
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[8px] border border-black/15" />
    </div>
  )
}

export function Testimonials() {
  console.log("[v0] Rendering Testimonials component with", testimonials.length, "testimonials")

  return (
    <section className="mt-20 w-full max-w-screen overflow-visible relative z-10 box-border mx-auto px-6 sm:px-12 lg:px-24 mb-14" data-node-id="105:201">
      <Carousel opts={{ align: "start", loop: false, slidesToScroll: 1 }} className="w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:mb-12 px-2 md:px-0">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#0e0e0e] text-4xl lg:text-5xl font-semibold mb-2 md:mb-0">Testimonials</h2>
            <p className="text-[20px] text-black max-w-[587px] mb-10 lg:mb-0">
              From clearer skin to lasting hydration — see what people achieved with HelloCloud.
            </p>
          </div>

          {/* Navigation arrows (functional via shadcn carousel) */}
          <div className="hidden lg:flex gap-2 h-[102px] items-center">
            <CarouselPrevious
              className="static w-[102px] h-[102px] rounded-[15px] border border-black/20 bg-transparent"
              aria-label="Previous testimonial"
            />
            <CarouselNext
              className="static w-[102px] h-[102px] rounded-[15px] border border-black/20 bg-transparent"
              aria-label="Next testimonial"
            />
          </div>
        </div>

        {/* Cards */}
        <CarouselContent className="-ml-4 md:ml-0 pb-2">
          {testimonials.map((t) => (
            <CarouselItem key={t.id} className="basis-full sm:basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
              <div className="pl-4 pr-0 md:pl-0 md:pr-2">
                <TestimonialCard testimonial={t} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
