export interface Session {
  id: string;
  title: string;
  speaker: string;
  category: 'Keynote' | 'Breakout' | 'Learning Lab' | 'Customer Story' | 'Expo';
  day: 'Day 1' | 'Day 2' | 'Day 3';
  time: string;
  location: string;
  description: string;
  details?: {
    fullDescription: string;
    takeaways: string[];
    tracks: string[];
    level?: 'Beginner' | 'Intermediate' | 'Advanced';
    speakerBio?: string;
  };
}

export const SESSIONS: Session[] = [
  // Day 1
  {
    id: 'd1-k1',
    title: 'The Future of AI is Here',
    speaker: 'Dr. Elena Rostova',
    category: 'Keynote',
    day: 'Day 1',
    time: '09:00 AM - 10:30 AM',
    location: 'Main Hall A',
    description: 'Explore groundbreaking advancements in AI technology and what lies ahead for the industry.',
    details: {
      fullDescription: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry. We will cover the shift from generative models to agentic systems and the socio-economic impacts of ubiquitous intelligence.',
      takeaways: ['Understand AI trends', 'Strategic industry roadmap', 'Ethics in automation'],
      tracks: ['AI/ML', 'Strategy'],
      level: 'Beginner',
      speakerBio: 'CEO and visionary leader in artificial intelligence with over 20 years of experience.'
    }
  },
  {
    id: 'd1-l1',
    title: 'End-to-End MLOps with Kubernetes',
    speaker: 'Marcus Chen',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Learn the entire MLOps lifecycle from data ingestion to deployment on Kubernetes.',
    details: {
      fullDescription: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster.',
      takeaways: ['Kubernetes deployment', 'Pipeline automation', 'Model monitoring'],
      tracks: ['DevOps', 'AI/ML'],
      level: 'Intermediate',
      speakerBio: 'MLOps Architect specializing in cloud-native infrastructure.'
    }
  },
  {
    id: 'd1-b1',
    title: 'Micro-Frontends at Scale',
    speaker: 'Priya Patel',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Learn how to brand distributed niches effectively with micro-frontends.',
    details: {
      fullDescription: 'Learn how to brand distributed niches effectively. We will discuss architectural patterns, state management across micro-apps, and deployment strategies.',
      takeaways: ['Architecture patterns', 'State management', 'Deployment strategies'],
      tracks: ['Frontend', 'Architecture'],
      level: 'Advanced',
      speakerBio: 'Principal Engineer with a focus on large-scale web architecture.'
    }
  },
  {
    id: 'd1-b2',
    title: 'Real-Time Event Streaming with Kafka',
    speaker: 'Sarah Johnson',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Real-world case study on unleashing real-time initiatives.',
    details: {
      fullDescription: 'Real-world case study on unleashing real-time initiatives. Explore how to build resilient, scalable event-driven systems using Apache Kafka.',
      takeaways: ['Kafka fundamentals', 'Resilient systems', 'Event-driven architecture'],
      tracks: ['Backend', 'Data'],
      level: 'Intermediate',
      speakerBio: 'Data Engineer and open-source contributor.'
    }
  },
  {
    id: 'd1-l2',
    title: 'Graph Neural Networks in Practice',
    speaker: 'Isabella Martinez',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Workshop: Generating extensible relationships with GNNs.',
    details: {
      fullDescription: 'Workshop: Generating extensible relationships. Hands-on session on building and training graph neural networks for complex relationship mapping.',
      takeaways: ['GNN architecture', 'Relationship mapping', 'Hands-on training'],
      tracks: ['AI/ML', 'Data'],
      level: 'Advanced',
      speakerBio: 'Researcher in graph theory and machine learning.'
    }
  },
  {
    id: 'd1-b3',
    title: 'Optimizing React Performance',
    speaker: 'David Kim',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Strategies for streamlining customized eyeballs in React.',
    details: {
      fullDescription: 'Strategies for streamlining customized eyeballs. Deep dive into React rendering, memoization, and profiling tools.',
      takeaways: ['React rendering', 'Memoization', 'Profiling'],
      tracks: ['Frontend'],
      level: 'Intermediate',
      speakerBio: 'Frontend expert and React enthusiast.'
    }
  },
  {
    id: 'd1-b4',
    title: 'Building Scalable Community Platforms',
    speaker: 'James Wilson',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'How we e-enabled dynamic communities at scale.',
    details: {
      fullDescription: 'How we e-enabled dynamic communities. Case study on architectural decisions for high-growth social platforms.',
      takeaways: ['Scaling strategies', 'Community engagement', 'Dynamic architecture'],
      tracks: ['Architecture', 'Social'],
      level: 'Beginner',
      speakerBio: 'Platform architect with experience in high-growth startups.'
    }
  },
  {
    id: 'd1-l3',
    title: 'High-Throughput Data Pipelines',
    speaker: 'Robert Garcia',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Hands-on: Transitioning efficient channels for data processing.',
    details: {
      fullDescription: 'Hands-on: Transitioning efficient channels. Learn to build data pipelines that handle millions of events per second.',
      takeaways: ['High-throughput processing', 'Data integrity', 'Pipeline efficiency'],
      tracks: ['Data', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Data infrastructure engineer.'
    }
  },
  {
    id: 'd1-b5',
    title: 'Open Source Stewardship Strategy',
    speaker: 'Thomas Lee',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Implementing strategic communities for growth in open source.',
    details: {
      fullDescription: 'Implementing strategic communities for growth. A guide for organizations on how to manage and contribute to open source projects.',
      takeaways: ['Open source strategy', 'Community management', 'Organizational contribution'],
      tracks: ['Open Source', 'Strategy'],
      level: 'Beginner',
      speakerBio: 'Open source advocate and community manager.'
    }
  },
  {
    id: 'd1-b6',
    title: 'Securing Modern Web APIs',
    speaker: 'Michael Brown',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Targeting holistic web services effectively with security.',
    details: {
      fullDescription: 'Targeting holistic web services effectively. Best practices for OAuth, JWT, and API gateway security.',
      takeaways: ['OAuth/JWT', 'API security', 'Web services'],
      tracks: ['Security', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Security consultant specializing in web applications.'
    }
  },
  {
    id: 'd1-l4',
    title: 'Next-Gen WebAssembly (Wasm)',
    speaker: 'Lisa Wang',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '04:00 PM - 06:00 PM',
    location: 'Lab A',
    description: 'E-Enabling next-generation web services with Wasm.',
    details: {
      fullDescription: 'E-Enabling next-generation web services. Explore the potential of WebAssembly beyond the browser.',
      takeaways: ['Wasm fundamentals', 'Edge computing', 'Web services'],
      tracks: ['Frontend', 'Edge'],
      level: 'Advanced',
      speakerBio: 'Wasm contributor and systems engineer.'
    }
  },

  // Day 2
  {
    id: 'd2-k1',
    title: 'Building Ethical AI Systems',
    speaker: 'Prof. Emily Carter',
    category: 'Keynote',
    day: 'Day 2',
    time: '09:00 AM - 10:00 AM',
    location: 'Main Hall A',
    description: 'Importance of ethics in AI development: safety, fairness, and transparency.',
    details: {
      fullDescription: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency.',
      takeaways: ['AI ethics', 'Fairness in ML', 'Transparency'],
      tracks: ['AI/ML', 'Ethics'],
      level: 'Beginner',
      speakerBio: 'Professor of Computer Science and AI Ethics researcher.'
    }
  },
  {
    id: 'd2-l1',
    title: 'Personalization at Scale with AI',
    speaker: 'Maria Hernandez',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Streamlining B2C experiences lab with AI-driven personalization.',
    details: {
      fullDescription: 'Streamlining B2C experiences lab. Hands-on session on building recommendation engines and personalized user journeys.',
      takeaways: ['Personalization', 'Recommendation engines', 'B2C strategy'],
      tracks: ['AI/ML', 'Product'],
      level: 'Intermediate',
      speakerBio: 'Product leader focused on AI-driven experiences.'
    }
  },
  {
    id: 'd2-b1',
    title: 'Building Vertical AI Agents',
    speaker: 'Christopher Davis',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Optimizing vertical applications for better performance with AI agents.',
    details: {
      fullDescription: 'Optimizing vertical applications for better performance. How to build specialized AI agents for specific industry domains.',
      takeaways: ['Vertical AI', 'Agent architecture', 'Performance optimization'],
      tracks: ['AI/ML', 'Architecture'],
      level: 'Intermediate',
      speakerBio: 'Founder of an AI agency specialized in vertical solutions.'
    }
  },
  {
    id: 'd2-b2',
    title: 'Distributed Tracing & Observability',
    speaker: 'Jennifer Martinez',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Aggregating granular synergies for success with observability.',
    details: {
      fullDescription: 'Aggregating granular synergies for success. Deep dive into OpenTelemetry and distributed tracing in microservices.',
      takeaways: ['OpenTelemetry', 'Distributed tracing', 'Observability'],
      tracks: ['DevOps', 'Backend'],
      level: 'Advanced',
      speakerBio: 'SRE with expertise in large-scale observability.'
    }
  },
  {
    id: 'd2-l2',
    title: 'Real-Time Analytics with Apache Flink',
    speaker: 'Kevin Anderson',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Maximize real-time eyeballs workshop with Apache Flink.',
    details: {
      fullDescription: 'Maximize real-time eyeballs workshop. Learn how to process streams of data in real-time for immediate insights.',
      takeaways: ['Apache Flink', 'Stream processing', 'Real-time analytics'],
      tracks: ['Data', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Stream processing expert.'
    }
  },
  {
    id: 'd2-b3',
    title: 'Edge AI: Running Models Locally',
    speaker: 'Susan Taylor',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class bandwidth standards with Edge AI.',
    details: {
      fullDescription: 'Redefining world-class bandwidth standards. Explore running LLMs and computer vision models on edge devices.',
      takeaways: ['Edge computing', 'Model optimization', 'Local AI'],
      tracks: ['AI/ML', 'Edge'],
      level: 'Advanced',
      speakerBio: 'Edge computing researcher.'
    }
  },
  {
    id: 'd2-b4',
    title: 'Benchmarking Large Language Models',
    speaker: 'Daniel White',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Benchmarking synergistic vortals in the industry for LLMs.',
    details: {
      fullDescription: 'Benchmarking synergistic vortals in the industry. A guide to evaluation frameworks for LLM performance and safety.',
      takeaways: ['LLM evaluation', 'Safety frameworks', 'Performance metrics'],
      tracks: ['AI/ML'],
      level: 'Intermediate',
      speakerBio: 'AI evaluation specialist.'
    }
  },
  {
    id: 'd2-l3',
    title: 'WebTransport & WebSockets Deep Dive',
    speaker: 'Jessica Thomas',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Seize next-generation bandwidth tutorial on modern web transport.',
    details: {
      fullDescription: 'Seize next-generation bandwidth tutorial. Hands-on experience with WebTransport and advanced WebSocket patterns.',
      takeaways: ['WebTransport', 'WebSockets', 'Network protocols'],
      tracks: ['Frontend', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Web standards expert.'
    }
  },
  {
    id: 'd2-b5',
    title: 'Serverless vs. Edge Functions',
    speaker: 'Paul Moore',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Techniques to disintermediate back-end web services.',
    details: {
      fullDescription: 'Techniques to disintermediate back-end web services. Comparing architectures, latency, and costs of serverless vs. edge.',
      takeaways: ['Serverless', 'Edge computing', 'Architecture comparison'],
      tracks: ['Backend', 'Cloud'],
      level: 'Intermediate',
      speakerBio: 'Cloud architect.'
    }
  },
  {
    id: 'd2-b6',
    title: 'Optimizing 5G for IoT',
    speaker: 'Mark Jackson',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Transforming bleeding-edge bandwidth case study for 5G IoT.',
    details: {
      fullDescription: 'Transforming bleeding-edge bandwidth case study. How 5G is enabling new possibilities in industrial IoT.',
      takeaways: ['5G', 'IoT', 'Connectivity'],
      tracks: ['Hardware', 'Connectivity'],
      level: 'Beginner',
      speakerBio: 'IoT solutions architect.'
    }
  },

  // Day 3
  {
    id: 'd3-l1',
    title: 'Scaling Rust for Web Services',
    speaker: 'Laura Martin',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Scaling next-generation e-business strategies with Rust.',
    details: {
      fullDescription: 'Scaling next-generation e-business strategies. Hands-on session on building high-performance web services in Rust.',
      takeaways: ['Rust web development', 'Concurrency', 'Performance'],
      tracks: ['Backend', 'Rust'],
      level: 'Intermediate',
      speakerBio: 'Rust core contributor.'
    }
  },
  {
    id: 'd3-b1',
    title: 'Migrating from Monolith to Microservices',
    speaker: 'Michelle Wu',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Transitioning to holistic models seamlessly through migration.',
    details: {
      fullDescription: 'Transitioning to holistic models seamlessly. Strategies for incremental migration without downtime.',
      takeaways: ['Migration strategies', 'Microservices', 'Holistic models'],
      tracks: ['Architecture', 'DevOps'],
      level: 'Intermediate',
      speakerBio: 'Software architect specialized in legacy transformations.'
    }
  },
  {
    id: 'd3-b2',
    title: 'Service Mesh with Istio & Linkerd',
    speaker: "David O'Connell",
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Meshing customized web services seamlessly with service meshes.',
    details: {
      fullDescription: 'Meshing customized web services seamlessly. Comparing Istio and Linkerd for traffic management and security.',
      takeaways: ['Service mesh', 'Istio/Linkerd', 'Traffic management'],
      tracks: ['DevOps', 'Security'],
      level: 'Advanced',
      speakerBio: 'Cloud native engineer.'
    }
  },
  {
    id: 'd3-l2',
    title: 'Efficient Video Streaming Protocols',
    speaker: 'Steven Thompson',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Cultivating efficient bandwidth deep dive in video streaming.',
    details: {
      fullDescription: 'Cultivating efficient bandwidth deep dive. Explore HLS, DASH, and low-latency streaming protocols.',
      takeaways: ['Video protocols', 'Latency optimization', 'Bandwidth efficiency'],
      tracks: ['Media', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Video engineering specialist.'
    }
  },
  {
    id: 'd3-b3',
    title: 'Headless Commerce Architectures',
    speaker: 'Kenneth Lewis',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class e-commerce experiences with headless architecture.',
    details: {
      fullDescription: 'Redefining world-class e-commerce experiences. Architectural patterns for modern, flexible commerce platforms.',
      takeaways: ['Headless commerce', 'E-commerce architecture', 'Flexible systems'],
      tracks: ['Frontend', 'Backend', 'Commerce'],
      level: 'Beginner',
      speakerBio: 'E-commerce strategist.'
    }
  },
  {
    id: 'd3-b4',
    title: 'DevRel: Building Developer Trust',
    speaker: 'Patricia Walker',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Monetizing next-generation relationships through developer relations.',
    details: {
      fullDescription: 'Monetizing next-generation relationships. How to build and maintain trust in technical communities.',
      takeaways: ['Developer relations', 'Community building', 'Trust monetization'],
      tracks: ['Community', 'Product'],
      level: 'Beginner',
      speakerBio: 'Head of DevRel at a major tech company.'
    }
  },
  {
    id: 'd3-l3',
    title: 'GraphQL Federation at Scale',
    speaker: 'Brian Garcia',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Driving rich web services masterclass with GraphQL Federation.',
    details: {
      fullDescription: 'Driving rich web services masterclass. Hands-on with Apollo Federation and schema stitching.',
      takeaways: ['GraphQL Federation', 'Apollo', 'Schema design'],
      tracks: ['Frontend', 'Backend'],
      level: 'Advanced',
      speakerBio: 'GraphQL architect.'
    }
  },
  {
    id: 'd3-b5',
    title: 'Multi-Cloud Infrastructure Management',
    speaker: 'Amara Okafor',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Engaging distributed infrastructures at scale in multi-cloud.',
    details: {
      fullDescription: 'Engaging distributed infrastructures at scale. Using Terraform and Crossplane for multi-cloud management.',
      takeaways: ['Multi-cloud', 'Terraform/Crossplane', 'Infrastructure as Code'],
      tracks: ['Cloud', 'DevOps'],
      level: 'Intermediate',
      speakerBio: 'Cloud engineer focused on multi-cloud solutions.'
    }
  },
  {
    id: 'd3-b6',
    title: 'Accessibility in Modern Web Apps',
    speaker: 'Tariq Al-Fayed',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Re-intermediating rich communities for growth with accessibility.',
    details: {
      fullDescription: 'Re-intermediating rich communities for growth. Practical tips for WCAG compliance and inclusive design.',
      takeaways: ['Accessibility best practices', 'WCAG compliance', 'Inclusive design'],
      tracks: ['Frontend', 'Design'],
      level: 'Beginner',
      speakerBio: 'Accessibility consultant.'
    }
  },
  {
    id: 'd3-b7',
    title: 'Advanced PostgreSQL Patterns',
    speaker: 'Wei Zhang',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 104',
    description: 'E-Enabling efficient schemas for data with advanced PostgreSQL.',
    details: {
      fullDescription: 'E-Enabling efficient schemas for data. Partitioning, indexing strategies, and performance tuning for large databases.',
      takeaways: ['PostgreSQL performance', 'Database partitioning', 'Indexing strategies'],
      tracks: ['Backend', 'Data'],
      level: 'Advanced',
      speakerBio: 'Database administrator and PostgreSQL expert.'
    }
  },
  {
    id: 'd3-b8',
    title: 'Bridging Digital & Physical Retail',
    speaker: 'Mateo Fernandez',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 204',
    description: 'Streamlining clicks-and-mortar functionalities.',
    details: {
      fullDescription: 'Streamlining clicks-and-mortar functionalities. How technology is blurring the lines between online and offline shopping.',
      takeaways: ['Retail tech', 'Omnichannel strategy', 'Physical-digital bridge'],
      tracks: ['Product', 'Strategy'],
      level: 'Beginner',
      speakerBio: 'Product manager in retail innovation.'
    }
  },
  {
    id: 'd3-r1',
    title: 'Closing Remarks',
    speaker: 'Conference Team',
    category: 'Keynote',
    day: 'Day 3',
    time: '05:00 PM - 05:30 PM',
    location: 'Main Hall A',
    description: 'Wrap-up of the conference and a look ahead to 2027.',
    details: {
      fullDescription: 'A brief wrap-up of the conference and a look ahead to 2027. We will share highlights and thank our sponsors and speakers.',
      takeaways: ['Conference wrap-up', 'Future outlook', 'Gratitude'],
      tracks: ['General'],
      level: 'Beginner',
      speakerBio: 'Organizing team of TechStack Conference.'
    }
  }
];
