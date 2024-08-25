
import modules from "/web-frameworks.jpg"

export default function Article1Page() {


    return (
        <main className="flex-1 overflow-x-hidden">
            <article className="px-2 md:w-[1000px] mx-auto">
                <h2 className="text-4xl text-center py-10">Frameworks, Modules and Packages</h2>
                <img src={modules} alt="Web Frameworks" className="mx-auto w-[300px] md:w-[800px] pb-10" />
                <p className="py-2 text-teal-300">Posted on: January 10, 2024</p>
                <p className="py-2">There's a lot of conflicting opinions among engineers out there about the use of web
                    frameworks,
                    modules
                    and
                    libraries.</p>
                <p className="py-2">The main arguments of those on the opposing camp raise concerns over bloating the
                    web and
                    unnecessarily complicating things that don't need to be complicated. Although they have a point,
                    there's a reason frameworks and modules like React, Next, Remix, Angular, Vue, Tailwind, Express
                    and Bun
                    have taken over the web development industry.</p>
                <p className="py-2">I recently returned to using vanilla HTML, CSS and JS after several months of using
                    React, Node,
                    Express, Tailwind and Next. To be honest, it didn't feel too bad; I just had to work on html
                    files instead of jsx and tsx, and had to implement logic and api calls in my js files
                    instead of inside my
                    jsx and tsx components. Back to the good ol' days. I did get annoyed at having to use vanilla
                    css and scss, so I just
                    converted my
                    styling to tailwind. No regrets there.</p>
                <h2 className="text-xl pt-2 text-teal-300">The Convenience Factor</h2>
                <p className="py-2">And then once my project was done I returned to using React and Next, and realized
                    it took me 3
                    times longer developping
                    in vanilla than when I
                    was using reusable components and adding logic to my jsx without having
                    to toggle back and forth between my html and javascript files. There's definitely a convenience factor
                    there, and it triples development speed.</p>
                <h2 className="text-xl pt-2 text-teal-300">A question of performance?</h2>
                <p className="py-2">Development environment aside, I was convinced that my vanilla project would have
                    advantages over my MERN apps with regards to SEO and rendering speed. But when I visited my
                    site and began navigating through its pages, the rendering took LONGER than my SPA apps most of
                    the time
                    because I was essentially sending a GET request for an entirely new page to be rendered on my
                    browser at every navigation link anchor instead of swapping components. Besides, once the bundler transpiles the jsx and/or tsx into a js file, it really isn't that big. I tried throttling and adding high latency and the impact was minimal.</p>
                <p className="py-2">With regards to SEO, Next's SSR and router system replicating the file-based system of
                    navigation takes care
                    of React's issue of initially empty html and client side having to fetch the
                    massive js bundle build and render every single component on the browser, making the search engine miss the content of the html. The only gripe I have
                    with Next is its
                    relentless attempt at trying to hide server request and response in the name of "serverless",
                    complicating things with auth and user state, but that's another story for another time.</p>
                <p className="py-2">On the http web server side, Express not only adds development convenience by allowing less
                    code to be written, but also ensures better performance AND security. What a treat!</p>
                <h2 className="text-xl pt-2 text-teal-300">Abstractions, abstractions, abstractions</h2>
                <p className="py-2">So it seems at this point that frameworks and modules add development convenience
                    and even
                    performance improvements to some extent in exchange for "bloating the web". But there is also
                    another issue: abstraction levels. With all the magic going on under the hood, the risk of the
                    developer running into a fatal bug and not being able to find a solution goes up. Eventually,
                    they may need to dig through the documentation and source code - if available - and may need a
                    deep understanding of low-level programming in order to fix the potential bug.</p>
                <p className="py-2">So is the solution going back to vanilla and work 3 times slower? Perhaps, but what will likely happen is that the developer will end up
                    engineering a "custom framework", which may or may not be more optimal than the current
                    open-source ones. And that may in turn to lead to another new, "better" open-source framework
                    for
                    the rest of us to use. Or, go the other way and present more problems because every
                    company/team/individual is using their own custom framework.</p>
                <h2 className="text-xl pt-2 text-teal-300">What choice do I have?</h2>
                <p className="py-2">Which leads to the next problem: developers continue to share more and more
                    open-source
                    frameworks and there are so many options to choose from, and each and every one of them
                    continues to add updates and improvements. ThePrimeagen repeatedly advises devs to avoid
                    becoming a "React Developer", or a framework developer. Although I understand his point and the
                    importance of being a fundamentally good engineer at the core level, the reality is that
                    companies look at developer tech stacks when hiring them. So here we are today, sitting down and
                    worrying about whether we should learn Rust, Go, Bun, Ruby on Rails, Django, Flask, Springboot,
                    Vue, Angular, React, Next, Nuxt, Tailwind, Redux, Zustand, JWT, Passport, ChartJS, Multer,
                    Busboy, prisma, mongoose...</p>
                <p>Or you can just "npm install everything".</p>
            </article>
        </main>
    )
}