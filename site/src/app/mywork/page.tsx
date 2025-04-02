// import Link from 'next/link'

export default function MyWorkPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-950 to-black">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Work</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my work that has been released to the public. 
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 flex justify-center">
          <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/6dl98ftpLVZeJIsQ7qMpxk?utm_source=generator&theme=0" width="80%" height="372" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>

      <div className="container mx-auto px-4 py-12 flex justify-center">
          <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/6dJjdAI6tdIH8rhidD2dek?utm_source=generator&theme=0" width="80%" height="372" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>

      <div className="container mx-auto px-4 py-12 flex justify-center">
          <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/1CJHFVVkldbxKN7u8QXZSc?utm_source=generator&theme=0" width="80%" height="372" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
    </div>

    
  )
}