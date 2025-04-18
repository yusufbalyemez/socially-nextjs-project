import Image from"next/image"

function page() {
  return (
    <div>
      <h1>About Page</h1>
      <Image src="/d.jpg" alt="Next.js" width={500} height={500} />
      <p>Welcome to the about page!</p>
    </div>
  )
}

export default page