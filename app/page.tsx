export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          YouTube Growth Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          A/B Test Your YouTube Thumbnails —{' '}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing which thumbnail wins. ThumbnailAB rotates your variants on a schedule and tracks CTR, views, and engagement so you always publish the best one.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start for $11/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['Auto thumbnail rotation','CTR tracking','Engagement analytics','YouTube Data API','Scheduled switching','Side-by-side comparison'].map(f => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-xs px-3 py-1 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$11<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to grow faster</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited A/B thumbnail tests',
              'Automated rotation schedules',
              'Real-time CTR & view analytics',
              'YouTube Data API integration',
              'Email alerts on winner detection',
              'Up to 50 videos tracked'
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does thumbnail rotation work?',
              a: 'ThumbnailAB connects to your YouTube channel via the YouTube Data API. You upload 2–4 thumbnail variants per video, set a rotation interval (e.g. every 48 hours), and we automatically swap them while recording performance data for each variant.'
            },
            {
              q: 'What metrics are tracked?',
              a: 'We pull Click-Through Rate (CTR), impressions, views, average view duration, and likes for each thumbnail variant directly from YouTube Analytics. The dashboard shows a clear side-by-side comparison so you can pick the winner with confidence.'
            },
            {
              q: 'Will this violate YouTube\'s Terms of Service?',
              a: 'No. ThumbnailAB uses the official YouTube Data API v3 with OAuth 2.0 authorization. Changing thumbnails is a standard, permitted API operation — the same thing you do manually in YouTube Studio, just automated.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ThumbnailAB. All rights reserved.
      </footer>
    </main>
  )
}
