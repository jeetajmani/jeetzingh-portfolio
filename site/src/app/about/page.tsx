import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-950 to-black">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey, influences, and the story behind the music.
          </p> */}
        </div>
      </section>

      {/* Bio section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Profile image */}
            <div className="w-full md:w-1/3 aspect-square bg-gray-800 rounded-lg relative overflow-hidden">
              {/* Replace with your actual image */}
              <Image
                src="/images/jeetzingh-profile.jpg"
                alt="Profile Image"
                fill
                className="object-cover"
                priority
              />
            </div>

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

      {/* Influences section */}
      {/* <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Musical Influences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Influence 1', 'Influence 2', 'Influence 3', 'Influence 4', 'Influence 5', 'Influence 6'].map((name, index) => (
              <div key={index} className="bg-black p-6 rounded-lg">
                <div className="w-full aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                  Image
                </div>
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-400">
                  Brief description of how this artist or genre has influenced your musical style and approach.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
{/* 
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Equipment</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills</h3>
              <ul className="space-y-4">
                {[
                  'Music Production',
                  'Recording',
                  'Mixing & Mastering',
                  'Vocal Editing/Tuning',
                  'Composition',
                  'Alto Saxophone',
                  'Instrument 2'
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Equipment</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-2">Software</h4>
                  <ul className="text-gray-300">
                    <li>DAW 1</li>
                    <li>Plugin Suite 1</li>
                    <li>Virtual Instrument 1</li>
                    <li>Virtual Instrument 2</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-2">Hardware</h4>
                  <ul className="text-gray-300">
                    <li>Audio Interface</li>
                    <li>MIDI Controller</li>
                    <li>Microphones</li>
                    <li>Instruments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to action */}
      <section className="py-16 px-4 bg-indigo-950">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Interested in collaborating Get in touch!
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