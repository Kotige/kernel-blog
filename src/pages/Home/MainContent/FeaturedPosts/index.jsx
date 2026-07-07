import featuredPosts from "../../../../data/FeaturedPosts";

export default function FeaturedPosts() {
    const [mainPost, ...secondaryPosts] = featuredPosts;

    return (
        <section>
        
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl text-[#033661]">Destaques</h3>
            <p className="text-base text-accent">Veja todos</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Post principal */}
        <article className="lg:col-span-2 group cursor-pointer">
            <img
                src={mainPost.image}
                alt={mainPost.title}
                className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />

            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#2070B0]">
                {mainPost.category}
            </p>

            <h2 className="mt-2 text-3xl font-serif text-main leading-tight group-hover:text-[#2070B0] transition-colors">
                {mainPost.title}
            </h2>

            <p className="mt-3 text-sm text-muted">
                {mainPost.date}
            </p>
        </article>

        {/* Posts menores */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
                {secondaryPosts.map((post) => (
            <article
                key={post.id}
                className="group cursor-pointer"
            >
                <img
                src={post.image}
                alt={post.title}
                className="aspect-[20/10] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />

                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#2070B0]">
                {post.category}
                </p>

                <h3 className="mt-2 text-xl font-serif text-main leading-snug group-hover:text-[#2070B0] transition-colors">
                {post.title}
                </h3>

                <p className="mt-2 text-sm text-muted">
                {post.date}
                </p>
            </article>
            ))}
        </div>
        </div>

        </section>
    );
}