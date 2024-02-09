export interface Category {
  categoryId: number;
  slug: string;
  title: string;
  description: string;
  content: Post[];
}

interface Post {
  id: number;
  date: string;
  title: string;
  rendered: string;
  description: string;
  imageUrl: string;
}

export const Data: Category[] = [
  {
    categoryId: 1,
    slug: "space",
    title: "Space",
    description:
      "The latest news and updates on Space, including launches and funding rounds about satellite communications systems like Starlink and Kuiper, and of course the latest research taking place on the ISS, the Moon, Mars and beyond.",
    content: [
      {
        id: 1,
        date: "July 21, 2023",
        title:
          "Amazon is building a $120M facility in Florida for Project Kuiper satellite processing",
        description:
          "Amazon will spend $120 million on a new satellite processing facility at NASA’s Kennedy Space Center (KSC), as the company gears up to launch the first batch of Project Kuiper prototype satellites ...",
        rendered:
          "<img src='https://techcrunch.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-21-at-11.23.10.png?w=1390&crop=1' /> <p>Amazon will spend $120 million on a new satellite processing facility at NASA&rsquo;s Kennedy Space Center (KSC), as the company gears up to launch the first batch of Project Kuiper prototype satellites in 2024.</p> <p>Construction is already underway on the new facility, the company said Friday. It will be strategically located near the launch operators that will eventually send Kuiper satellites to orbit: Jeff Bezos&rsquo; Blue Origin, which operates a massive campus at KSC and a launch complex at Cape Canaveral Space Force Base, and United Launch Alliance.</p> <p>The 100,000-square-foot processing facility will be located at KSC&rsquo;s historic Launch and Landing Facility, which was formerly known as the Shuttle Landing Facility. The site is now maintained and operated by Space Florida, an organization dedicated to stimulating space industry investment in the state.</p> <p>&ldquo;We have an ambitious plan to begin Project Kuiper&rsquo;s full-scale production launches and early customer pilots next year, and this new facility will play a critical role in helping us deliver on that timeline,&rdquo; Kuiper Production Operations VP Steve Metayer said in a statement. &ldquo;We are proud to partner with Space Florida to bolster the growing space industry in Florida and elsewhere across the United States, and we look forward to adding more talent to our skilled operations and manufacturing team.&rdquo;</p> <p>Amazon plans on commencing satellite manufacturing at its Kirkland, Washington-based facility later this year. The new site in Florida will receive those satellite shipments and complete final check-outs prior to launch. The facility includes a 100-foot tall clean room to accommodate the payload fairings of Blue Origin&rsquo;s New Glenn and ULA&rsquo;s Vulcan Centaur.</p> <p>With Kuiper, Amazon plans to take on SpaceX&rsquo;s Starlink with a constellation of more than 3,200 high-speed internet satellites into low Earth orbit. The e-commerce giant has already invested billions into its plans: last year, the company reserved a massive 77 heavy-lift launches from Blue, ULA and Arianespace for the satellite constellation.</p> <p>Amazon aims on launching two prototype satellites &ldquo;in the coming months.&rdquo;</p> ",
        imageUrl:
          "https://techcrunch.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-21-at-11.23.10.png?w=1390&crop=1"
      },
      {
        id: 2,
        date: "July 10, 2023",
        title:
          "Longshot Space wants to make space launch dumb — and really cheap",
        description:
          "Rockets are among the greatest feats in human engineering, but to Longshot Space CEO Mike Grace, they’re an “overly exquisite solution” to the problem of sending megatons of inert mass to space.",
        rendered:
          '<img src="https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1454461499.jpg?w=1390&#038;crop=1" /> \n<p>Rockets are among the greatest feats in human engineering, but to <a href="https://www.longshotspace.com/" target="_blank" rel="noopener" data-mrf-link="https://www.longshotspace.com/">Longshot Space</a> CEO Mike Grace, they’re an “overly exquisite solution” to the problem of sending megatons of inert mass to space.</p>\n<p>“You need something that is dumber and much cheaper, both to build and to operate,” he said in a recent interview.</p>\n<p>Longshot’s answer is a kinetic launch system that will be capable of reaching hypersonic speeds and shooting projectiles to orbital velocities, for less than the cost of a Netflix subscription. It’s noticeably different than its competitors — specifically SpinLaunch, which is developing a spinning accelerator to shoot mass to orbit, and Stratolaunch, which uses a giant, specialized plane to release a hypersonic vehicle midair — in appearance and approach.</p>\n<p>The biggest difference is that Longshot’s system is very, very horizontal. It is not technically a gun, as it doesn’t use an ignitor; instead, compressed gas squeezes a wedged projectile down a very long concrete tunnel that’s basically a vacuum chamber. The resultant speeds are extremely fast, and they increase in proportion to the size of the system.</p>\n<p>That means a system capable of Mach 5 will be around 80 feet long; a Mach 10 system, the size of two or three football fields; and systems capable of getting to space, at Mach 25 to 30, on the order of multiple kilometers long.</p>\n<p>It’s a staggering scale, but Longshot is aiming for a very lost cost to orbit — as low as $10 per kilogram to orbit (in comparison, the price tag of a Falcon 9 ride-share is $6,500 per kilogram). According to the company, its low prices are only achievable by keeping as much of the system on the ground as possible. Energy is stretched out over space and time; freed from the demands of vertical lift, such systems can suddenly be built out of concrete, rather than aluminum.</p>\n<p>But there is no free lunch, especially in aerospace, and Longshot’s cheap prices will come with some major trade-offs. The first is the land footprint. Longshot’s system includes an on-site solar farm, in addition to the compressed gas pumps and tunnel, that will no doubt help keep costs low but add to the overall land-use requirements.</p>\n<p>The other trade-off is noise. At such sizes, Longshot’s system will generate an extraordinary sonic boom. Given that the company will be able to reuse the system as quickly as it can draw a vacuum in the tunnel, that could mean many sonic booms per day. For these two reasons, the system will have to be sited somewhere very, very remote — think the Australian bush or the arid regions of Kenya.</p>\n<p>“You would want to be somewhere where an atomic bomb could go off and nobody would notice,” Grace said.</p>\n<p>These trade-offs could prove to be relatively trivial, should humanity finally consummate its desire to colonize the solar system. Grace pointed out that Hawaii imports 13 million tons of stuff, including food, gas to power cars, plastic products and more, for a population of around 1.4 million. An off-world colony — without the plentiful fresh water, atmosphere, soil, and everything else in our biosphere that aligns to make life possible — would need to import more. A lot more.</p>\n<p>“Right now, that’s not really practical,” Grace said. “I don’t think it may ever be practical with rockets. So the question is, how do you drive the price of putting material in space through the floor?”</p>\n<p>Elon Musk’s SpaceX is also looking to solve this problem, with its super-heavy Starship vehicle that will be capable of lifting upward of 250 metric tons to orbit in an expendable configuration. But Grace is not convinced that the economics of Starship will ever fully be able to compete with Longshot’s own system.</p>\n<p>“I would expect [SpaceX] to spend somewhere between $5 [billion] and $30 billion on Starship before it’s good to go,” he said. “They’re going to need to get that money back. […] Some of Elon’s more hyperbolic comments about the price they’re going to be able to hit, maybe those are true, but it might be on a 40- or 50-year timescale. They might need to amortize those costs out for a very long time.”</p>\n<p>That doesn’t mean Longshot would make Starship obsolete. The enormous amount of G pressure that would be generated by Longshot’s system is wholly unsuitable for the human body, so any person who wanted to go to space would be much better off on a rocket.</p>\n<p>Longshot has gotten notably far with relatively little in funding. Since closing a $1.5 million pre-seed round last April, from investors that include Sam Altman, Draper VC and SpaceFund, and being awarded a direct-to-Phase II SBIR from the Air Force Research Laboratory, Longshot has built a test accelerator from its headquarters in Oakland, California, and achieved speeds up to Mach 2.2. Grace said he anticipates demonstrating speeds north of Mach 5 within a month.</p>\n<p><img decoding="async" loading="lazy" class="alignnone size-full wp-image-8" src="https://techcrunch.com/wp-content/uploads/2023/07/image4.png" alt="" width="844" height="1125" /></p>\n<p>In the short-term, Longshot wants to piggyback off the U.S. Department of Defense’s need for hypersonic capability, land some contracts, and use that revenue to essentially subsidize the development of a really big, really cheap launch system for space. On a longer time horizon, Grace said the real money will be made not from the launch system but by growing demand for services that Longshot offers in space.</p>\n<p>“The key to being able to support that is having a system that can do it at extremely low cost,” he said. “You’ve got to get a system that is designed to be as dumb as hell.”</p>\n<p>“The key to being able to support that is having a system that can do it at extremely low cost,” he said. “You’ve got to get a system that is designed to be as dumb as hell.”</p>\n',
        imageUrl:
          "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1454461499.jpg?w=1390&crop=1"
      },
      {
        id: 3,
        date: "June 23, 2023",
        title:
          "Andreessen Horowitz, Shield Capital back satellite bus manufacturing startup Apex Space",
        description:
          "Satellite bus manufacturing startup Apex Space has closed a $16 million Series A round co-led by Andreessen Horowitz and new investor Shield Capital as it prepares for its first demonstration mission early next year.",
        rendered:
          '<img src="https://techcrunch.com/wp-content/uploads/2023/06/Aries-in-Space-Communication-Payload.png?w=1390&crop=1" /> \n<p>Satellite bus manufacturing startup <a href="https://www.apexspace.com/" target="_blank" rel="noopener" data-mrf-link="https://www.apexspace.com/">Apex Space</a> has closed a $16 million Series A round co-led by Andreessen Horowitz and new investor Shield Capital as it prepares for its first demonstration mission early next year.</p>\n<p>In addition to the new capital, Apex also revealed some of the customers that will be flying payload on that inaugural mission: Orbit Fab, a startup that’s developing technology to refuel spacecraft in orbit; Irish satellite firm Ubotica; and a tier 1 defense prime that Apex CEO Ian Cinnamon told TechCrunch was a “household name.”</p>\n<p>Apex, founded by Cinnamon and Max Benassi scarcely nine months ago, seeks to transform the way satellite buses — the part of the spacecraft that hosts the payload — are built and sold. For the most part, buses are built to order at a high cost, with years-long lead times. Instead, Apex has optimized the design of its first bus, a 100-kilogram spacecraft called Aries, for manufacturing. That means a standardized product that can be configured according to mission needs, and lead times on the order of months, rather than years.</p>\n<p>The Los Angeles–based startup has already started building the Aries that will fly on SpaceX’s Transporter-10 ride-share mission in the first quarter of next year. While this first mission features three separate customer payloads that will be hosted at the same time, this will not be the typical mission profile for future Aries flights. In the future, the buses will be delivered to a specific customer, Cinnamon said, who can choose which payloads are on the mission and when it launches. Aries is designed to support up to 100 kilograms of payload mass.</p>\n<p>Cinnamon said the aim is to manufacture five more Aries in 2024 and scale from there. He added that the company has already started selling the production slots for those next Aries flights, with revenues hitting seven figures.</p>\n<p>To support that manufacturing cadence, Apex will use some of the funds from this Series A to open a 50,000-square-foot production facility in L.A., a space that the company is calling Factory One.</p>\n<p>The inclusion of Shield Capital, a firm that’s known for investing in startups at the intersection of commercial and national security, is a strong signal that Apex is looking to bolster its partnerships with U.S. government and defense partners.</p>\n<p>“We’re a dual-use company,” Cinnamon explained. “From the very beginning, we narrowed the list of investors who are really focused on helping us sell to the U.S. government.”</p>\n<p>Apex has now raised a total of $27 million, including <a href="https://techcrunch.com/2022/10/24/apex-space-takes-on-satellite-bus-bottleneck-with-seed-round-led-by-a16z/" data-mrf-link="https://techcrunch.com/2022/10/24/apex-space-takes-on-satellite-bus-bottleneck-with-seed-round-led-by-a16z/">a $7.5 million seed round</a> last year. Andreessen Horowitz partner Katherine Boyle said in a blog post on the new funding that Apex is proving it can move quickly.</p>\n<p>“We led the seed round in Apex last summer with the belief that both commercial companies and the defense industrial base need space manufacturers that could address component bottlenecks and move faster than once thought possible,” she said. “After witnessing the pace and demand for their product, we’re proud to now co-lead Apex’s Series A less than a year later.”</p>\n',
        imageUrl:
          "https://techcrunch.com/wp-content/uploads/2023/06/Aries-in-Space-Communication-Payload.png?w=1390&crop=1"
      }
    ]
  },
  {
    categoryId: 2,
    slug: "apps",
    title: "Apps",
    description:
      "The app economy continues to grow, having produced a record number of downloads and consumer spending across both the iOS and Google Play stores. Keep up with this fast-moving industry in one place, with the latest from the world of apps, including news, updates, startup fundings, mergers and acquisitions, and much more.",
    content: [
      {
        id: 1,
        date: "July 22, 2023",
        title: "ChatGPT comes to Android next week, but you can sign up today",
        description:
          "Two months after launching for iOS, ChatGPT is available to “pre-order” for Android users who want to take the ubiquitous chatbot on the go. If it’s anywhere as popular as the iPh...",
        rendered:
          "<img src='https://techcrunch.com/wp-content/uploads/2023/07/chatgpt-android.jpg?w=1390&crop=1' /> <p>Two months after <a href='https://techcrunch.com/2023/05/18/openai-launches-an-official-chatgpt-app-for-ios/'>launching for iOS,</a> ChatGPT is available to &ldquo;pre-order&rdquo; for Android users who want to take <a href='https://techcrunch.com/2023/05/18/chatgpt-everything-you-need-to-know-about-the-ai-powered-chatbot/'>the ubiquitous chatbot</a> on the go. If it&rsquo;s anywhere as popular as the iPhone version, expect to see some big numbers over the next few weeks.</p> <p>Of course any mobile user can access ChatGPT or other OpenAI tools via the web interface, but the superior experience of a dedicated app has proven extremely compelling, to put it lightly. iPhone users downloaded it half a million times in the first week, impressing everyone <a href='https://techcrunch.com/2023/07/05/threads-passes-2-million-downloads-in-2-hours/'>until Threads came along and blew it out of the water.</a></p> <p><a href='https://play.google.com/store/apps/details?id=com.openai.chatgpt'>The ChatGPT app on Android</a> looks to be more or less identical to the iOS one in functionality, meaning it gets most if not all of the web-based version&rsquo;s features. You should be able to sync your conversations and preferences across devices, too &mdash; so if you&rsquo;re iPhone at home and Android at work, no worries.</p> <p>Of course it won&rsquo;t be completely identical, since the two mobile operating systems differ in many ways. For instance, <a href='https://techcrunch.com/2023/06/08/chatgpt-comes-to-ipad-adds-support-for-siri-and-shortcuts/'>the June additions of Siri and Shortcuts</a> to the app on iOS clearly won&rsquo;t be making the transition, but it&rsquo;s likely Android users will get something similar.</p> <p>On Twitter, OpenAI said that the Android app would be &ldquo;rolling out to users next week,&rdquo; presumably in the U.S. first. No plans were mentioned for other countries, but it&rsquo;s likely that they&rsquo;ll follow after a few weeks or months. It was in <a href='https://techcrunch.com/2023/05/25/the-official-chatgpt-app-is-now-available-in-11-more-countries/'>a dozen more countries one week</a> after its original release.</p> <p>You can sign up to be notified when the app goes live by <a href='https://play.google.com/store/apps/details?id=com.openai.chatgpt'>hitting &ldquo;pre-register&rdquo; on the Play Store.</a></p>",
        imageUrl:
          "https://techcrunch.com/wp-content/uploads/2023/07/chatgpt-android.jpg?w=1390&crop=1"
      },
      {
        id: 2,
        date: "July 19, 2023",
        title:
          "Google’s Nearby Share for Windows app is now officially available",
        description:
          "Google announced today that its Nearby Share app for Windows PCs is now officially available. Nearby Share makes its easier to share files across your phones, tablets, Chromebooks and more devices....",
        rendered:
          "<img src='https://techcrunch.com/wp-content/uploads/2023/07/Screenshot-2023-07-19-at-3.09.22-PM.png?w=1390&crop=1' /> <p>Google <a href='https://blog.google/products/android/nearby-share-windows-android/'>announced</a> today that its Nearby Share app for Windows PCs is now officially available. Nearby Share makes its easier to share files across your phones, tablets, Chromebooks and more devices. A PC version of the app has been in beta since March 2023, and is now officially available.</p> <p>The tech giant says the beta version has been installed by more than 1.7 million people, and that it has seen over 50 million files transferred between PC and Android devices since launch.</p> <p>With today’s official release, Google is adding new improvements to the Nearby Share for Windows app. The company has added the estimated time for file transfers to be completed, so you can get an understanding of how quickly large files like videos or entire folders will be shared. There is also now an image preview within device notifications to help you confirm that the correct file is being shared.</p> <p>“To make sharing between Android devices and PCs even more seamless, we’re working with partners like HP to include the Nearby Share app on select Windows PCs, such as the HP Dragonfly Pro,” Google wrote in a <a href='https://blog.google/products/android/nearby-share-windows-android/'>blog post.</a> “We’ll continue to work on Nearby Share for Windows, adding new functionality and listening to your feedback.”</p> <p>Users must enable their PC’s Wi-Fi and Bluetooth functions in order to use Nearby Share for Windows. Once you have set up the functionality, you will be able to drag a file into the app or right-click it and select the Nearby Share option to send it to a device near you. Devices that you’re transferring files between have to be within 16 feet of each other.</p>",
        imageUrl:
          "https://techcrunch.com/wp-content/uploads/2023/07/Screenshot-2023-07-19-at-3.09.22-PM.png?w=1390&crop=1"
      },
      {
        id: 3,
        date: "July 17, 2023",
        title:
          "Spotify adds shared volume control to its group listening feature",
        description:
          "Spotify attempts to improve its shared-queue feature, Group Session, by launching shared volume control, a new capability that lets listeners adjust the volume of a song if they’re sharing a compat...",
        rendered:
          "<img src='https://techcrunch.com/wp-content/uploads/2020/12/GettyImages-1158411062.jpg?w=1390&crop=1' /> <p>Spotify attempts to improve its shared-queue feature, <a href='https://techcrunch.com/2020/05/11/spotify-officially-launches-a-shared-queue-feature-called-group-session/'>Group Session</a>, by launching shared volume control, a new capability that lets listeners adjust the volume of a song if they’re sharing a compatible speaker with the host, the company <a href='https://community.spotify.com/t5/Community-Blog/Exploring-new-ways-for-in-person-listening/ba-p/5610682'>announced</a> today.</p> <p>Group Session is a Premium-only feature that was first introduced in 2020. It allows multiple users to control what music is playing in real-time and add songs to a collaborative playlist for the entire group to enjoy.</p> <p>Spotify notes that if four or more users are in one group session, volume control will be automatically disabled. This ensures that the host stays in control for larger listening sessions—which could be helpful when party guests get a little too rowdy. But it’s also possible for the host to enable volume control after it’s disabled by manually switching on the toggle that says, “Let guests change volume.”</p> <img src='https://techcrunch.com/wp-content/uploads/2023/07/MateusM_2-1689611043571.png' /> <p>The new shared volume control feature is gradually rolling out to Android and iOS devices globally. It’s available on Chromecast, Amazon Cast and most WiFi-enabled speakers, including Sonos and Bose. However, shared volume control is currently not supported on Apple AirPlay or Bluetooth devices.</p> <p>Also, the update can only be used for in-person listening. Typically, users have the ability to use Group Session <a href='https://techcrunch.com/2020/07/28/spotifys-new-party-mode-feature-group-session-goes-remote/'>remotely</a> and in person.</p>",
        imageUrl:
          "https://techcrunch.com/wp-content/uploads/2020/12/GettyImages-1158411062.jpg?w=1390&crop=1"
      }
    ]
  },
  {
    categoryId: 3,
    slug: "ai",
    title: "AI",
    description:
      "AI and machine learning tech and the companies building them are covered here, as well as the ethical issues they raise. Encompasses generative AI, including large language models, text to image and text to video models speech recognition and generation and predictive analytics.",
    content: [
      {
        id: 1,
        date: "July 20, 2023",
        title:
          "Gushwork.ai raises $2M, led by Lightspeed, to outsource business tasks to workforces trained in AI",
        description:
          "Gushwork.ai, a global platform that aims to advance business process outsourcing (BPO) using AI and human expertise, has raised $2.1 million in a pre-seed funding round led by Lightspeed. B Capital...",
        rendered:
          "<img src='https://techcrunch.com/wp-content/uploads/2023/07/ai-business-process-outsourcing-getty.jpg?w=1390&crop=1' /><p>Gushwork.ai, a global platform that aims to advance business process outsourcing (BPO) using AI and human expertise, has raised $2.1 million in a pre-seed funding round led by Lightspeed. B Capital, Sparrow Capital, Seaborne Capital and Beenext also participated in backing the startup that launched in April this year.</p> <p>In recent years, companies have invested considerable amounts of money in hiring skilled professionals to oversee their operational processes, such as administration, HR, payroll management or customer support. An increasing alternative to in-house hiring is to engage with staffing agencies or BPOs to outsource operations or to use platforms, such as Upwork or Fiverr to find freelancers who can handle process-oriented tasks. However, this has become a significant cost factor due to ongoing inflation. <a href='https://www.gushwork.ai/'>Gushwork.ai</a> strives to address this problem in the market using its AI-powered, cross-border platform.</p> <p>The startup provides a curated marketplace that features offshore workers trained in using various AI applications to help businesses carry out their processes efficiently. It lets entrepreneurs outsource their tedious workflows and focus only on strategically important tasks.</p> <p>Nayrhit Bhattacharya, co-founder and CEO of Gushwork.ai, calls the process &ldquo;uberizing the employee workforce,&rdquo; as businesses can hire talent from different markets for their manually driven operational functions on a part-time basis. He co-founded Gushwork.ai with Adithya Venkatesh (CPO) in January with a usage-based pricing model.</p> <p>&ldquo;Businesses don&rsquo;t need to hire full-time,&rdquo; Bhattacharya told TechCrunch in an interview. &ldquo;They can use somebody for a few hours &mdash; three hours this week, 40 hours next week &mdash; and then not use it for another week.&rdquo;</p> <p>Alongside offering part-time access to offshore talent, Gushwork.ai trains and equips its workforce with AI tools to make them fit for many workflows that were previously considered creative and not merely process-oriented to a large extent. These can be generating photorealistic blog designs, converting webinars to blogs, generating images for blog writing, writing blog posts on different topics or even doing search engine optimization. Generative AI tools have enabled large workforces to perform such creative tasks without requiring special skills.</p> <p>&ldquo;You don&rsquo;t need a 3D graphic designer per se, or you don&rsquo;t need to spend three months trying to find the right 3D graphic designer or the photorealistic image copy generator on Upwork or Fiverr,&rdquo; Bhattacharya noted.</p> <p>Gushwork.ai has trained its AI-augmented workforce to perform tasks, such as lead prospecting, email marketing, ad management, lead engagement on social media platforms, webinar moderation and marketing, social media management, responding to inbound leads, CRM setup, social media analytics data scraping, prospect outreach and ad campaign management, among others. These are all initially aimed at easing sales and marketing operations workflows. However, the startup also plans to expand into more specialized roles in the future.</p> <p>Within the first three months of operation, Gushwork.ai saw more than 50 businesses adopting its platform to delegate over 200 complex workflows. Bhattacharya told TechCrunch that around 80% of its customers use the platform on an active basis every week, while almost 90% of them use it every month.</p> <p>The startup has its key outbound focus on small and medium businesses and bootstrapped startups in the U.S. and Canada that have a team size of two to 20-30 members. Bhattacharya said that as much as 80% of its current customer base comprises small and medium businesses.</p> <p>While developed economies are the dominating markets for Gushwork.ai, Bhattacharya said it saw nearly 20% of its customers from India as well. The startup also considers India and the Philippines the initial supply bases for its offshore talent, though it looks to set up its workforce base across different countries over time.</p> <p>&ldquo;The era of remote work has unlocked a number of new job opportunities and workflows that can be executed from anywhere in the world. This transcends beyond the traditional IT services or BPO industry. Gushwork.ai is leveraging this tailwind of cross-border cost arbitrage and is building a unique platform for businesses to delegate some of their most complex workflows to an elite on-demand offshore workforce trained on AI tools and apps. We are excited to partner with the team as they innovate and revitalize the future of outsourcing with AI,&rdquo; said Lightspeed partner Rahul Taneja in a prepared statement.</p> <p>In the next few months, Gushwork.ai plans to utilize the fresh funds to enhance quality control and data security and privacy. It also looks to build features to help businesses create and document their complex processes within Gushwork.ai&rsquo;s platform and use them as large training datasets to automate a list of workflows. Further, it plans to invest some capital in content-led organic market and personal building channels to reach new customers.</p> <p>The startup currently has over 25 full-time and part-time employees spread across three countries, with Bhattacharya based in Brooklyn and three founding members and co-founder Venkatesh in India&rsquo;s Bengaluru.</p>",
        imageUrl:
          "https://techcrunch.com/wp-content/uploads/2023/07/ai-business-process-outsourcing-getty.jpg?w=1390&crop=1"
      },
      {
        id: 2,
        date: "July 19, 2023",
        title:
          "Apple Tests Apple GPT Develops Generative AI Tools to Catch OpenAI",
        description:
          "Apple is developing artificial intelligence tools to challenge OpenAI, Google and others, according to a new report from Bloomberg’s Mark Gurman. The tech giant has created a chatbot that som.",
        rendered:
          "<img src='https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1235254642.jpg?w=1390&crop=1' /><p>Apple is developing artificial intelligence tools to challenge OpenAI, Google and others, according to a <a href='https://www.bloomberg.com/news/articles/2023-07-19/apple-preps-ajax-generative-ai-apple-gpt-to-rival-openai-and-google?sref=gni836kR#xj4y7vzkg'>new report</a> from Bloomberg&rsquo;s Mark Gurman. The tech giant has created a chatbot that some engineers are internally referring to as &ldquo;Apple GPT.&rdquo; Apple has yet to determine a strategy for releasing the technology to consumers, but is reportedly aiming to make a significant AI-related announcement next year.</p> <p>The report says Apple has built its own framework, codenamed &ldquo;Ajax,&rdquo; to create large language models, which are AI-based systems that power offerings like <a href='https://techcrunch.com/2023/07/13/chatgpt-everything-you-need-to-know-about-the-open-ai-powered-chatbot/'>Open AI&rsquo;s ChatGPT</a> and Google&rsquo;s Bard. Ajax runs on Google Cloud and was built with Google JAX, the search giant&rsquo;s machine learning framework, according to Bloomberg. Apple is leveraging Ajax to create large language models and serve as the foundation for the internal ChatGPT-style tool.</p> <p>Apple did not immediately respond to a request for comment.</p> <p>The internal rollout of the chatbot was halted for awhile due to security concerns about generative AI, but has since been made available to more Apple employees. Although more employees are getting access to the chatbot, it requires special approval for access. Bloomberg reports that any output from the chatbot can&rsquo;t be used to develop features bound for customers.</p> <p>Apple employees are using the chatbot to help with product prototyping. The chatbot can be used to summarize text and answer questions based on data it has been trained with.</p> <p>The company&rsquo;s chatbot is similar to Bard, ChatGPT and Bing AI, as it doesn&rsquo;t feature any additional features that separates it from what&rsquo;s currently commercially available.</p> <p>The report comes as Apple has been <a href='https://techcrunch.com/2023/05/19/apple-generative-ai-jobs/'>on the hunt for generative AI talent.</a> The company has posted a handful of job postings on its career page seeking experts in generative AI. It&rsquo;s looking for engineers with a &ldquo;robust understanding of large language models and generative AI.&rdquo;</p> <p>As companies like Google, Microsoft and Meta moved quickly to release generative AI products to the public, Apple has remained somewhat quiet on the AI front. Although the tech giant has released AI features across its products and apps for years, it&rsquo;s now looking to catch up with the consumer demand for generative AI tools that can help with tasks like drafting essays and images.</p> <p>The report says Apple is focused on trying to address potential privacy concerns related to artificial intelligence. Apple CEO Tim Cook has said that although the tech giant would add AI to more of its offerings, it would <a href='https://www.bloomberg.com/news/articles/2023-05-04/apple-s-tim-cook-says-ai-concerns-still-need-to-be-sorted-out?sref=gni836kR'>do so on a &ldquo;thoughtful basis.&rdquo;<a/></p>",
        imageUrl:
          "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1235254642.jpg?w=1390&crop=1"
      },
      {
        id: 3,
        date: "July 18, 2023",
        title:
          "Hammerspace ingests $56M for a new approach to work with vast amounts of unstructured data",
        description:
          "Data may be “the new oil,” but only when it can be extracted and put to use. Today, a five-year-old startup called Hammerspace that is giving any kind of data that lease of life is anno...",
        rendered:
          "<img src='https://techcrunch.com/wp-content/uploads/2023/05/blue-origin-lander.jpeg?w=1390&crop=1' /> <p>Data may be &ldquo;the new oil,&rdquo; but only when it can be extracted and put to use. Today, a five-year-old startup called <a href='https://hammerspace.com/'>Hammerspace</a> that is giving any kind of data that lease of life is announcing $56 million in funding &mdash; its first institutional investment &mdash; as it expands its business.</p> <p>Prosperity7 Ventures &mdash; the venture arm of Saudi Aramco &mdash; is leading this first outside round, with ARK Invest, Pier 88 Hedge Fund and other unnamed investors also participating.</p>  <p>Hammerspace was initially funded, co-founded and led by <a href='https://en.wikipedia.org/wiki/David_Flynn'>David Flynn,</a> the pioneer technologist known for his early work on Linux, supercomputers and flash computing. And while it may not be a household name, it is already working with a number of very large companies and organizations that you will know, which have giant data needs.</p> <p>Its customers include Jeff Bezos&rsquo; Blue Origin, the National Science Foundation and Royal Caribbean Group. Major media groups are also using it to manage their data around special effects development (it has been used for effects in Star Wars and Stranger Things, among other outsized productions).</p> <p>And at least one &ldquo;super scaler,&rdquo; in the words of Flynn, which he declined to name, is using Hammerspace to manage troves of unstructured data that it&rsquo;s currently using in the building and training of Large Language Models across tens of thousands of GPUs. (Note: I have a strong hunch of who this is based on his response to a name I gave him, and the other partners Hammerspace works with.)</p> <p>&ldquo;If you&rsquo;re going to pay big bucks for GPU horsepower, the last thing you want is for that to site to sit idle, waiting for data to flow in and flow out of those systems,&rdquo; Flynn said. &ldquo;We provide radical input to feed data into and out of those training systems. It&rsquo;s a data pipeline feeding into and out of those models at high speed and with the convenience of a real file system.&rdquo;</p> <p>Hammerspace is named after <a href='https://tvtropes.org/pmwiki/pmwiki.php/Main/Hammerspace'>the concept</a> first coined from cartoons and comics where characters pull objects they need out of thin air, and without getting too technical, that might also be the best way of explaining what the startup does. Essentially, it provides a way of making large amounts of data &mdash; regardless of where it lives or how it gets used &mdash; accessible and available to an organization just when they need it, and keeping it out of the way when they do not.</p> <p>Flynn at first declined to describe the startup as in the area of data orchestration, or file management, or a pipeline, or data management &mdash; he is very personable and accessible, but also quick to be technical and thus very exact in his language &mdash; but frankly it does cover all of these to a degree.</p> <p>Companies that need to use vast amounts of data in a project like building a new AI will typically find it a challenge to access and manage the data they need not only because of the sheer volume, but because it is unstructured, and also lives in many different places, across clouds, local servers and more &mdash; hybrid architectures for very messy amounts of information.</p> <p>Although companies like Snowflake have made a tidy business of managing structured data in such architectures for the purposes of business intelligence, the same does not apply in the unstructured datasets in which Hammerspace specializes, and for the kinds of applications that this kind of data is used for, which might include business intelligence but might also be for AI processing.</p> <p>Hammerspace&rsquo;s technology breakthrough to cope with that is thanks in part to Flynn&rsquo;s realizations early on, when he was working on flash storage at Fusion.io, about how this would pose a problem for businesses down the line. And in part, it&rsquo;s thanks to the foundational work of his co-founder and CTO, <a href='https://hammerspace.com/trond-myklebust/'>Trond Myklebust,</a> himself a bit of a legend in the world of computing, with his track record including being the maintainer and lead developer of the Linux kernel NFS client. The &ldquo;file system&rdquo; that Hammerspace has built for managing, moving and orchestrating data is based on a particular implementation in Linux; and what it does, Flynn said, &ldquo;is unique across the industry.&rdquo;</p> <p>The thinking is that unstructured is potentially where the business opportunity lies for these applications and more. Hammerspace cites data from IDC that estimates more than 90% of business information &ldquo;is likely to be formed of unstructured data by 2025.&rdquo; And that&rsquo;s in part why investors are interested.</p> <p>&ldquo;The information of our world is increasingly decentralized, and companies, now more than ever, need to access and move unstructured data out of silos and across platforms, making that data more useful and valuable,&rdquo; said Cathie Wood, CEO of ARK Invest, in a statement. &ldquo;Our mission is to capitalize on technological convergence across markets and industries, thereby changing the way the world works. Hammerspace aligns with that mission, unlocking new innovations across the enterprise.&rdquo;</p>  ",
        imageUrl:
          "https://techcrunch.com/wp-content/uploads/2023/05/blue-origin-lander.jpeg?w=1390&crop=1"
      }
    ]
  }
];
