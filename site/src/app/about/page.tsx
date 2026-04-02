import Link from 'next/link'
import ProfileImageWithTrail from '@/components/ui/ProfileImageWithTrail'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-950 to-black">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bio</h1>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Profile image */}
            <ProfileImageWithTrail />

            {/* Bio text */}
            <div className="w-full md:w-2/3">
              {/* <h2 className="text-3xl font-bold mb-6">The Story</h2> */}

              <div className="space-y-4 text-gray-300">
                <p>
                  Jeet Singh, aka <Link href="https://www.instagram.com/jeetzingh" target="_blank" className="underline hover:text-indigo-300">JEETZINGH</Link>, is a Canadian musician, producer, and audio engineer currently based in Atlanta, Georgia. With a deep love for the entire music creation process—from the first spark of inspiration to the final master—Jeet thrives in wearing multiple hats: music producer, recording engineer, and mixing engineer.
                </p>

                <p>
                  Jeet has collaborated with a diverse range of artists, from local talents to international stars. His work spans various genres, including hip-hop, afrobeats, latin, and R&B. He has a knack for blending different styles and influences, creating luscious soundscapes that resonate with listeners. Jeet served as a recording engineer at <Link href="https://www.instagram.com/capitalwavestudio" target="_blank" className="underline hover:text-indigo-300">Capital Wave Studio</Link>, where he recorded and mixed dozens of tracks across genres. Jeet has been commended for his blazing speed, immaculate attention to detail, and ability to provide quality music as a recording engineer and has worked closely with artists such as <Link href="https://www.instagram.com/c.c.official" target="_blank" className="underline hover:text-indigo-300">Cerbeus</Link>, <Link href="https://www.instagram.com/fromyoursabani" target="_blank" className="underline hover:text-indigo-300">FromYoursAbani</Link>, and <Link href="https://www.instagram.com/ariyomakesmusic" target="_blank" className="underline hover:text-indigo-300">Ariyo</Link>.
                </p>

                <p>
                  Having explored a variety of digital audio workstations over the years, Jeet found his creative home in FL Studio half a decade ago. Its intuitive interface and powerful capabilities unlocked a new level of experimentation and efficiency in his production process. When it comes to recording and vocal tracking, however, Pro Tools is Jeet’s go-to. Its exceptional vocal editing capabilities, seamless Melodyne integration, and widespread industry use make it the ideal platform for bringing vocal performances to life with precision and polish.
                </p>

                <p>
                  Jeet’s approach to music is both technical and artistic, with a commitment to building workflows that are not only efficient but also deeply personal. Every mix, every take, and every creative decision reflects a passion for detail and a desire to bring out the best in every artist he works with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-4 bg-indigo-950">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Interested in collaborating? Get in touch!
          </p>
          <Link
            href="/contact"
            className="bg-white text-indigo-900 py-3 px-8 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  )
}