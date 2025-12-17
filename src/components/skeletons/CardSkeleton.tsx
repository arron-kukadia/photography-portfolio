export const CardSkeleton = () => (
  <div className="aspect-[4/5] bg-muted animate-pulse" />
)

export const ImageSkeleton = () => (
  <div className="aspect-square bg-muted animate-pulse" />
)

export const TestimonialSkeleton = () => (
  <div className="rounded-lg border border-border bg-card p-8 animate-pulse">
    <div className="mb-6 h-16 w-16 rounded-full bg-muted" />
    <div className="mb-4 h-4 w-3/4 bg-muted rounded" />
    <div className="mb-2 h-4 w-full bg-muted rounded" />
    <div className="h-4 w-1/2 bg-muted rounded" />
  </div>
)

export const AboutSkeleton = () => (
  <div className="min-h-screen pt-20">
    <div className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="h-96 w-full rounded-lg bg-muted animate-pulse md:w-1/2" />
          <div className="flex-1 space-y-4">
            <div className="h-10 w-3/4 bg-muted rounded animate-pulse" />
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  </div>
)
