export const experiences = [
  {
    title: "Robotics Researcher II",
    period: "2023 - Present",
    current: true,
    responsibilities: [
      "Adapting state-of-the-art Vision-Language Models (VLMs) with custom projection layers for action-conditioned world models, achieving 25% improvement in task success",
      "Developed novel VLM architectures reducing reasoning latency by 7x through architectural optimizations",
      "Filed 2 patents on VLM-based failure reasoning and context-aware multimodal action planning",
      "Leading research on integrating large language models with robotic manipulation systems"
    ]
  },
  {
    title: "Robotics Researcher I",
    period: "2019 - 2023",
    responsibilities: [
      "Built domain-randomized dataset of 220k visuotactile samples in Unreal Engine, reducing sim-to-real gap by 65%",
      "Developed HyperTaxel technique achieving 3x improvement in tactile sensor resolution",
      "Designed hierarchical graph neural networks for proprioceptive 6D pose estimation with state-of-the-art accuracy",
      "Published 4 papers at top robotics conferences (ICRA, IROS) and journals (IEEE RA-L)"
    ]
  }
];

export const researchAreas = [
  {
    title: "Multimodal Foundation Models",
    description: "Adapting and architecting Vision-Language Models for robotic manipulation and physical reasoning.",
    highlights: [
      "Action-Conditioned World Models with 25% task success improvement",
      "7x reduction in VLM reasoning latency",
      "Patented architectural innovations for failure reasoning",
      "Integration of LLMs with real-time robotic control"
    ],
    icon: "🧠"
  },
  {
    title: "Tactile Perception & Sim-to-Real",
    description: "Pioneering hardware-agnostic representations for vision-tactile fusion through physics-informed simulation.",
    highlights: [
      "220k visuotactile dataset with 65% sim-to-real gap reduction",
      "HyperTaxel: 3x improvement in tactile sensor resolution",
      "Graph Neural Networks for sensor fusion and 6D pose estimation",
      "Domain randomization frameworks in Unreal Engine"
    ],
    icon: "🤖"
  }
];

export const publications = [
  {
    title: "HyperTaxel: Hyper-Resolution for Taxel-Based Tactile Signal Through Contrastive Learning",
    authors: "Hongyu Li, Snehal Dikhale, Jinda Cui, Soshi Iba, Nawid Jamali",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    year: 2024,
    badge: "IROS" as const,
    pdf: "http://arxiv.org/abs/2408.08312",
    image: "https://lhy.xyz/assets/img/publication_preview/hypertaxel.gif"
  },
  {
    title: "Hierarchical Graph Neural Networks for Proprioceptive 6D Pose Estimation of In-hand Objects",
    authors: "Alireza Rezazadeh, Snehal Dikhale, Soshi Iba, Nawid Jamali",
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2023,
    badge: "ICRA" as const,
    pdf: "https://arxiv.org/pdf/2306.15858",
    image: "https://alireza.page/hgnn-demo.gif",
    video: "https://www.youtube.com/watch?v=3Z5tKlRf8xI"
  },
  {
    title: "ViHOPE: Visuotactile In-Hand Object 6D Pose Estimation with Shape Completion",
    authors: "Hongyu Li, Snehal Dikhale, Soshi Iba, Nawid Jamali",
    venue: "IEEE Robotics and Automation Letters (presented at ICRA 2024)",
    year: 2023,
    badge: "IEEE RAL" as const,
    pdf: "https://arxiv.org/pdf/2309.05662",
    image: "https://lhy.xyz/assets/img/publication_preview/vihope-animation.gif"
  },
  {
    title: "VisuoTactile 6D Pose Estimation of an In-Hand Object Using Vision and Tactile Sensor Data",
    authors: "Snehal Dikhale, Nawid Jamali",
    venue: "IEEE Robotics and Automation Letters (presented at ICRA 2022)",
    year: 2022,
    badge: "IEEE RAL" as const,
    pdf: "https://www.researchgate.net/profile/Snehal_Dikhale/publication/357842538_VisuoTactile_6D_Pose_Estimation_of_an_In-Hand_Object_Using_Vision_and_Tactile_Sensor_Data/links/6297b925416ec50bdb022987/VisuoTactile-6D-Pose-Estimation-of-an-In-Hand-Object-Using-Vision-and-Tactile-Sensor-Data.pdf",
    image: "/vita.gif"
  }
];

export const technicalSkills = [
  "Large Language Models (LLMs)",
  "Vision-Language Models (VLMs)",
  "Generative AI",
  "Sim-to-Real Transfer",
  "PyTorch",
  "Transformers",
  "Graph Neural Networks",
  "ROS / ROS2",
  "Unreal Engine",
  "Domain Randomization",
  "Tactile Sensing",
  "Computer Vision",
  "Deep Learning",
  "Reinforcement Learning",
  "C++",
  "Python",
  "CUDA",
  "TensorRT"
];
