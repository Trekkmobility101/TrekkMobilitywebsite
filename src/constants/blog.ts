export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string;
      isLead?: boolean;
    }
  | {
      type: "quote";
      text: string;
      speaker?: string;
      role?: string;
    };

export type BlogPost = {
  slug: string;
  topic: string;
  title: string;
  excerpt: string;
  dateline: string;
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  coverAlt: string;
  bodyImage: string;
  bodyImageAlt: string;
  bodyImageCaption: string;
  keyHighlights: string[];
  blocks: BlogContentBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "trekk-mobility-explores-mobility-data-transportation-policy-infrastructure-africa",
    topic: "Policy & Infrastructure",
    title:
      "Trekk Mobility Explores How Mobility Data Could Inform Transportation Policy and Infrastructure Planning in Africa",
    excerpt:
      "During its virtual product showcase and press briefing, Trekk Mobility's co-founders examined how real-time shared mobility data, safety protocols, and group insurance can inform urban infrastructure planning across Africa.",
    dateline: "LAGOS, NIGERIA",
    publishedAt: "24 November 2026",
    readingTime: "5 min read",
    coverImage: "/images/assets/tourism fleet.jpg",
    coverAlt:
      "Shared electric mobility fleet operating across urban and tourism corridors",
    bodyImage: "/images/assets/6SkSr.jpg",
    bodyImageAlt:
      "Trekk Mobility platform insights and connected fleet operations",
    bodyImageCaption:
      "Connected fleet telemetry provides visibility into rider density, trip patterns, and local infrastructure gaps.",
    keyHighlights: [
      "Platform telemetry tracks rider density and trip volume to reveal real-world movement patterns.",
      "Mobility insights could help government stakeholders pinpoint congestion and underserved corridors.",
      "Vehicle-specific safety policies include helmet guidance, terrain-based speed limits, and anti-tandem rules.",
      "Trekk is exploring affordable group shared-mobility insurance with insurance operators.",
    ],
    blocks: [
      {
        type: "paragraph",
        isLead: true,
        text: "LAGOS, NIGERIA. 24 November 2026: As communities across Africa contend with diverse transportation challenges, mobility technology could provide valuable insights to help stakeholders understand how people move, identify gaps in existing transport systems and make more informed decisions about transportation policy and infrastructure development.",
      },
      {
        type: "paragraph",
        text: "Trekk Mobility, a mobility technology company founded by Isaac Oyedokun, Esther Ehindero, Praise Sakanwi and Jean-Noel Bayi, is exploring how technology and data generated through shared mobility platforms could contribute to a better understanding of transportation needs and inform infrastructure planning in African communities.",
      },
      {
        type: "paragraph",
        text: "The company explored this potential during its recent virtual product showcase and press briefing, where discussions extended beyond the technology powering shared mobility to consider how mobility data could help stakeholders identify gaps in existing transport systems and make more informed decisions about transportation policy and infrastructure development.",
      },
      {
        type: "paragraph",
        text: "During the question-and-answer session, Praise Sakanwi, Chief Technology Officer and Co-founder of Trekk Mobility, highlighted how data generated through mobility platforms could provide a clearer picture of transportation patterns within the communities where they operate.",
      },
      {
        type: "quote",
        text: "Our platform allows us to collect transportation data, from the density of riders to how many rides are happening in a particular space.",
        speaker: "Praise Sakanwi",
        role: "Chief Technology Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "He noted that these insights could help stakeholders understand the transportation needs of their communities and make more informed decisions about the mobility solutions required in different locations. He also identified the potential for such information to be shared with government stakeholders to help them understand local transportation challenges, including congestion and limitations in the transport options available to residents.",
      },
      {
        type: "quote",
        text: "The future of this platform could go as far as us giving data information to government stakeholders to understand what their transportation needs are and what the pain points for their communities are, in terms of congestion or the use of the transportation that is available.",
        speaker: "Praise Sakanwi",
        role: "Chief Technology Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "According to Sakanwi, the longer-term opportunity extends to supporting decisions around physical infrastructure development. He described this as an area the company is looking into, highlighting the potential for mobility data to contribute to a better understanding of the infrastructure needs of different locations in Africa.",
      },
      {
        type: "paragraph",
        text: "The discussion also considered the role of innovators in addressing transportation challenges alongside government and larger institutions. Esther Ehindero, co-founder and Chief Operations Officer of Trekk Mobility, noted that while governments and major organisations have important responsibilities in developing industries and economies, innovators also have a role to play in improving citizens’ quality of life.",
      },
      {
        type: "paragraph",
        text: "The conversation further addressed the safety considerations involved in deploying shared mobility services in markets such as Africa, where road conditions and the realities of road safety enforcement can present operational challenges.",
      },
      {
        type: "paragraph",
        text: "Responding to a question about the practical measures Trekk Mobility takes to protect riders, Esther explained that the company’s approach to safety is influenced by the type of vehicle being deployed and the environment in which it operates.",
      },
      {
        type: "quote",
        text: "Safety is equally important to us. Depending on the vehicle you are using, that determines our safety advice or policy.",
        speaker: "Esther Ehindero",
        role: "Chief Operations Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "Using electric scooters as an example, she highlighted the importance of helmet use and explained that the company also applies technology-enabled speed restrictions. These limits, she said, are determined by factors such as the roads, terrain and rider profiles in the locations where vehicles operate.",
      },
      {
        type: "paragraph",
        text: "She also pointed to rider education and awareness measures incorporated into the platform, including restrictions against tandem riding and other unsafe riding behaviour.",
      },
      {
        type: "paragraph",
        text: "Insurance was raised as another consideration in improving rider protection. Esther disclosed that the company had been exploring possible arrangements with insurance operators to develop affordable group shared-mobility insurance for riders using scooters, bicycles and other applicable vehicles.",
      },
      {
        type: "paragraph",
        text: "The discussions reflected the importance of developing mobility solutions that respond to the realities of the communities they serve, from understanding local transportation patterns to adapting operational and safety measures to different road and usage conditions.",
      },
      {
        type: "paragraph",
        text: "For Trekk Mobility, the opportunity lies in building technology that supports mobility operators while potentially generating insights that could be useful to other stakeholders across the transportation ecosystem. As shared mobility develops, the ability to combine operational technology with a better understanding of community needs could contribute to more responsive transportation solutions.",
      },
      {
        type: "paragraph",
        text: "The company’s product showcase brought together its co-founders, partners, journalists, media professionals and other stakeholders to examine the technology, operational considerations and opportunities shaping the shared mobility industry.",
      },
    ],
  },
  {
    slug: "trekk-mobility-opens-founding-partner-programme",
    topic: "Founding Partner Programme",
    title:
      "Trekk Mobility Opens Founding Partner Programme to Help Businesses Launch Shared Mobility Services",
    excerpt:
      "Trekk Mobility invites its first 10 founding partners across campuses, estates, and commercial developments to launch branded shared mobility fleets with a 12-month price lock and full operational backing.",
    dateline: "LAGOS, NIGERIA",
    publishedAt: "24 November 2026",
    readingTime: "5 min read",
    coverImage: "/images/assets/s7o7k.jpg",
    coverAlt:
      "Trekk Mobility Founding Partner Programme fleet launch and operations",
    bodyImage: "/images/about-2.png",
    bodyImageAlt:
      "Trekk Mobility team and shared electric mobility operations",
    bodyImageCaption:
      "Founding partners receive hands-on fleet strategy, technology infrastructure, and local-currency billing.",
    keyHighlights: [
      "Open to the first 10 founding partners launching or expanding branded mobility fleets.",
      "Includes a 12-month price lock on per-vehicle monthly technology fees and priority support.",
      "Provides a complimentary fleet strategy session and a third-month maintenance review.",
      "No existing fleet required — organisations can start with a deployment location or concept.",
    ],
    blocks: [
      {
        type: "paragraph",
        isLead: true,
        text: "LAGOS, NIGERIA. 24 November 2026: Trekk Mobility, a mobility technology company co-founded by Isaac Oyedokun, Esther Ehindero, Jean-Noel Bayi, and Praise Sakanwi, has opened its Founding Partner Programme, inviting organisations to explore opportunities to launch or expand shared mobility services with support from its fleet management technology and operational expertise.",
      },
      {
        type: "paragraph",
        text: "Announced during the company's virtual product showcase and media briefing, the programme is designed for organisations with opportunities to address everyday transportation needs within their communities, including campuses, residential estates, property developments and other commercial environments.",
      },
      {
        type: "paragraph",
        text: "Through the initiative, Trekk aims to help its first 10 founding partners establish or grow shared mobility fleets under their own brands, while providing access to the technology and practical experience required to manage these services.",
      },
      {
        type: "paragraph",
        text: "The announcement reflects Trekk Mobility's evolution from operating its own shared electric scooter services to developing technology that enables other businesses to establish and manage mobility operations.",
      },
      {
        type: "paragraph",
        text: "Speaking at the event, Isaac Oyedokun, Chief Executive Officer and Co-founder of Trekk Mobility, explained that the company’s early experience operating shared mobility services exposed it to the complexities involved in building and sustaining a fleet business.",
      },
      {
        type: "quote",
        text: "When we started, our ambition was simple: to rethink how people move within communities. But we quickly discovered that the biggest challenge in mobility was not necessarily the vehicles themselves. It was everything behind them: the technology, fleet monitoring, IoT connectivity, payments, maintenance and customer management.",
        speaker: "Isaac Oyedokun",
        role: "Chief Executive Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "He explained that the experience revealed a wider challenge facing mobility entrepreneurs and operators who may have viable business ideas but lack the technical expertise, resources or capital to develop their own platforms.",
      },
      {
        type: "paragraph",
        text: "This realisation informed Trekk's decision to make its technology and operational capabilities available to other businesses, helping them enter the shared mobility market without having to build the entire technology infrastructure themselves.",
      },
      {
        type: "paragraph",
        text: "Under the Founding Partner Programme, participating organisations will receive four key benefits: a 12-month price lock on their per-vehicle monthly technology fee, priority support, a complimentary fleet strategy session tailored to their operating environment, and a maintenance review at the end of the third month to assess fleet performance and identify issues requiring attention.",
      },
      {
        type: "paragraph",
        text: "The programme also provides access to support across vehicle strategy, deployment, payments, operations and maintenance, depending on each organisation's requirements. Partners will additionally have the option of paying for Trekk's technology in local currencies.",
      },
      {
        type: "paragraph",
        text: "Esther Ehindero, Co-founder and Chief Operations Officer of Trekk Mobility, who presented the programme at the event, said organisations could build on their understanding of their communities and customers, while Trekk provides the technology and practical experience needed to turn mobility opportunities into functioning services.",
      },
      {
        type: "quote",
        text: "You bring an understanding of your customers, your community, and the opportunity. Trekk Mobility brings to the table the technology and practical experience to help you turn that opportunity into a service you can launch, manage, and grow under your own brand.",
        speaker: "Esther Ehindero",
        role: "Chief Operations Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "She encouraged organisations to consider locations where people regularly need to move, pointing to universities, residential estates, resorts, business parks and industrial facilities as potential environments for shared mobility services.",
      },
      {
        type: "paragraph",
        text: "According to her, organisations do not need to have an existing fleet to explore the programme. They can approach Trekk with a potential deployment location or simply an idea, and the team will help assess the possibilities and identify practical next steps.",
      },
      {
        type: "paragraph",
        text: "The programme is intended to bring together organisations and entrepreneurs that understand the mobility needs of their communities and a technology partner with experience in developing and operating shared mobility services. Through this collaboration, Trekk hopes to support more businesses in creating mobility solutions suited to their respective environments.",
      },
      {
        type: "paragraph",
        text: "Organisations interested in joining the Founding Partner Programme can visit www.trekkmobility.com to request a discovery call or platform demonstration. They are encouraged to indicate their interest in the Founding Partner Programme and provide their organisation's location and what they are considering. Further enquiries can also be sent to hello@trekkmobility.com.",
      },
      {
        type: "quote",
        text: "We began this journey by solving mobility challenges ourselves. Today, we are opening up what we have built so that more businesses can create solutions in their own communities. The next mobility service someone relies on every day could be yours.",
        speaker: "Esther Ehindero",
        role: "Chief Operations Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "The company’s product showcase brought together its co-founders, partners, journalists, media professionals and other stakeholders to examine the technology, operational considerations and opportunities shaping the shared mobility industry.",
      },
    ],
  },
  {
    slug: "trekk-mobility-turns-shared-scooter-experience-into-infrastructure-africa",
    topic: "Company Evolution & Platform",
    title:
      "Trekk Mobility Turns Shared Scooter Experience into Infrastructure for Businesses Across Africa and beyond",
    excerpt:
      "Drawing from partnerships across more than 15 Nigerian communities, Trekk Mobility unveils how its six-year operational journey evolved into a full-stack mobility operating system for African operators.",
    dateline: "LAGOS, NIGERIA",
    publishedAt: "24 November 2026",
    readingTime: "6 min read",
    coverImage: "/images/assets/campus mobility.jpg",
    coverAlt:
      "Shared electric scooter campus mobility infrastructure across Africa",
    bodyImage: "/images/assets/4xcFb.jpg",
    bodyImageAlt:
      "Trekk Mobility fleet management platform and connected hardware",
    bodyImageCaption:
      "Trekk's operating system unifies IoT fleet control, local payment gateways, and rider apps in one platform.",
    keyHighlights: [
      "Built on six years of hands-on scooter-sharing operations across 15+ Nigerian communities, including UNILAG, Redeemer's University, and PAU.",
      "Purpose-built for African payment gateways and local-currency billing rather than adapted Western tooling.",
      "Enables operators to manage devices, activity, rider data, and revenue from a unified command center.",
      "Founding Partner Programme offers 12-month fee lock, priority support, strategy session, and 3-month maintenance review.",
    ],
    blocks: [
      {
        type: "paragraph",
        isLead: true,
        text: "LAGOS, NIGERIA. 24 November 2026: What does it take to turn a fleet of electric scooters into a functioning mobility business? The answer goes far beyond acquiring vehicles. It involves the technology to monitor fleets, systems to process payments, tools to manage customers, and the operational infrastructure that keeps the service running.",
      },
      {
        type: "paragraph",
        text: "This is a reality Trekk Mobility encountered first-hand as it built and operated its own shared electric scooter services in communities where people needed more convenient ways to move short distances. Through that experience, the Nigerian mobility technology company came to recognise that the greatest challenges in running a mobility business often lie not in the vehicles themselves, but in the systems and infrastructure that support them.",
      },
      {
        type: "paragraph",
        text: "Trekk Mobility's experience ultimately shaped a different direction for the company: making the technology and operational infrastructure it had developed available to other businesses looking to establish or expand shared mobility services.",
      },
      {
        type: "paragraph",
        text: "Speaking during the company's product showcase and virtual media briefing, Chief Executive Officer and Co-founder, Isaac Oyedokun, explained how the company's early experience informed that decision.",
      },
      {
        type: "quote",
        text: "Six years ago, when we started our journey, our ambition was simple: to rethink how people move within communities. We saw a problem with short-distance mobility, particularly within university campuses, residential estates, business parks and other large communities where people often needed a more convenient, affordable and efficient way to get around.",
        speaker: "Isaac Oyedokun",
        role: "Chief Executive Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "The company gradually established and operated its own electric scooter-sharing programmes. In Nigeria, it secured partnerships with more than 15 communities, including the University of Lagos, Redeemer University and Pan-Atlantic University.",
      },
      {
        type: "paragraph",
        text: "Operating these services also gave the company a closer understanding of the infrastructure required to keep a mobility business running.",
      },
      {
        type: "quote",
        text: "We quickly discovered that the biggest challenge in mobility wasn't necessarily the vehicles themselves. It was everything behind them: the technology, fleet monitoring, IoT connectivity, payments, maintenance and customer management, and the infrastructure required to keep everything running reliably.",
        speaker: "Isaac Oyedokun",
        role: "Chief Executive Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "That experience became a turning point for the company. Trekk Mobility began developing its technology beyond its immediate operational needs, recognising that other mobility operators faced similar challenges but often lacked the technical expertise, resources or capital to build their own platforms.",
      },
      {
        type: "paragraph",
        text: "The resulting shift moved the company from focusing exclusively on operating its own fleets to providing a fleet management software platform that enables other businesses to launch and manage shared mobility services.",
      },
      {
        type: "paragraph",
        text: "Beyond fleet management, the experience also highlighted the need for mobility technology that reflects the realities of operating in African markets, particularly when it comes to payments. Chief Financial Officer and Co-founder, Jean Noel Bayi, spoke about the challenges the founders encountered when searching for suitable technology during their early experience as scooter operators.",
      },
      {
        type: "quote",
        text: "When we started this type of business, we needed something that is reliable, something that is taking into consideration all the payments that we have as Africans.",
        speaker: "Jean Noel Bayi",
        role: "Chief Financial Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "He explained that some existing solutions were developed for markets in Europe and the United States without adequately considering the different conditions operators face in Africa.",
      },
      {
        type: "paragraph",
        text: "For Trekk Mobility, this division of responsibilities allows partner businesses to concentrate on running their physical operations while the company provides the technological infrastructure. Partners do not have to build their own fleet management applications or develop the systems needed to support a shared mobility service from the ground up. Depending on their needs, they can also access support with vehicle strategy, procurement, deployment, payments, operations and maintenance.",
      },
      {
        type: "paragraph",
        text: "The model is open to established organisations looking to introduce mobility services within their existing operations, as well as entrepreneurs and businesses seeking to start mobility ventures around identified market opportunities. These opportunities could exist in university campuses, residential estates, resorts, business parks, industrial facilities and other locations where short-distance mobility can address a practical need.",
      },
      {
        type: "paragraph",
        text: "The technology underpinning this model is Trekk Mobility's fleet management platform, which gives partner businesses the tools to oversee their fleets and manage their services. During the showcase, Chief Technology Officer and Co-founder, Praise Sakanwi, demonstrated the Trekk Mobility's fleet management platform, explaining how operators can use it to oversee their vehicles and access the information required to manage their services.",
      },
      {
        type: "quote",
        text: "This platform is one that allows you to control all of your devices, all of your fleets.",
        speaker: "Praise Sakanwi",
        role: "Chief Technology Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "The platform brings together fleet oversight and operational information, including activity, rider and revenue data. Its purpose is to give operators greater visibility and control without requiring them to develop the technology independently.",
      },
      {
        type: "paragraph",
        text: "Chief Operating Officer and Co-founder, Esther Ehindero, described the opportunity as one in which businesses bring their understanding of their communities, while Trekk Mobility contributes the technology and practical experience needed to turn an idea into a service.",
      },
      {
        type: "quote",
        text: "You bring an understanding of your customers, your community, and the opportunity. Trekk Mobility brings to the table the technology and practical experience to help you turn that opportunity into a service you can launch, manage, and grow under your own brand.",
        speaker: "Esther Ehindero",
        role: "Chief Operations Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "The company is opening its Founding Partner Programme to its first 10 partners, including campuses, estates, developers, research organisations and operators interested in launching or expanding shared mobility fleets.",
      },
      {
        type: "paragraph",
        text: "The programme includes a 12-month price lock on the per-vehicle monthly fee, priority support, a fleet strategy session and a maintenance review in the third month. Partners can also access guidance on vehicle strategy, procurement, setup, onboarding, billing and maintenance, with the option to pay for technology in local currencies.",
      },
      {
        type: "paragraph",
        text: "For prospective partners considering the opportunity, the starting point does not have to be an existing fleet. Businesses can approach Trekk Mobility with a location, an idea or an existing operation and explore whether shared mobility makes commercial sense for their environment.",
      },
      {
        type: "paragraph",
        text: "The company's evolution reflects a broader possibility for mobility businesses in Africa: the opportunity to build services around local needs without every operator having to develop the entire technology infrastructure independently.",
      },
      {
        type: "quote",
        text: "We began this journey by solving mobility challenges ourselves. Today, we are opening up what we've built so that more businesses can create solutions in their own communities. The next mobility service someone relies on every day could be yours.",
        speaker: "Esther Ehindero",
        role: "Chief Operations Officer & Co-founder, Trekk Mobility",
      },
      {
        type: "paragraph",
        text: "Businesses and prospective partners interested in exploring the Founding Partner Programme can visit www.trekkmobility.com or contact hello@trekkmobility.com to request a discovery call or product demonstration.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug);
}

