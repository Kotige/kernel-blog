import FeaturedPosts from "./FeaturedPosts"


export default function MainContent() {
    return (
        <main 
            id="content"
            className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Conteúdo principal */}
                <section id="posts" className="lg:col-span-2">
                    <FeaturedPosts />
                    
                </section>

                {/* Sidebar */}
                <aside id="sidebar">
                    {/* Widgets */}
                </aside>
            </div>
        </main>
    )
}