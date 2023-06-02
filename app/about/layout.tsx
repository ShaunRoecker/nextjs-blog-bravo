

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <nav className="h-12 bg-purple-400">About NavBar</nav>
            <main>
                {children}
            </main>
        </>

    )
};