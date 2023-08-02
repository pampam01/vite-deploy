import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  sd,
  smp,
  sma,
  kuliah,
  dinda,
  adit,
  maruli,
  portoDark,
  portoBlue,
  portoPurple,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Tentang",
  },
  {
    id: "work",
    title: "Pendidikan",
  },
  {
    id: "contact",
    title: "Kontak",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sekolah Dasar",
    company_name: "SD 166 Sarolangun - Jambi",
    icon: sd,
    iconBg: "#383E56",
    date: " januari 2009 - April 2013",
    points: [
      "Saya mendapatkan ranking 1 dari kelas 1 sd sampai kelas 6 sd.",
      "pengalaman mengikuti lomba antar kabupaten.",
      "menjadi salah satu siswa yang memiliki nilai dan prestasi terbaik satu provinsi.",
      "mendapatkan piagam penghargaan dari walikota sarolangun atas prestasi memenangkan lomba matematika provinsi .",
    ],
  },
  {
    title: "Sekolah Menengah Pertama ",
    company_name: "SMPN 33 Sarolangun",
    icon: smp,
    iconBg: "#E6DEDD",
    date: "April 2013 - Agustus 2016",
    points: [
      "aktif dalam organisasi siswa intra sekolah (OSIS). ",
      "juara kelas dua kali secara tidak berturut-turut.",
      "memenangkan olimpiade matematika cabang kabupaten. ",
      "mengikuti banyak lomba olahraga .",
    ],
  },
  {
    title: "Sekolah Menengah Atas",
    company_name: "SMAN 11 Sarolangun",
    icon: sma,
    iconBg: "#383E56",
    date: "Agustus 2016 - Juli 2019",
    points: [
      "Aktif mengikuti Organisasi Siswa Intra Sekolah (OSIS).",
      "Juara umum kelas tiga kali berturut-turut dari sembilan puluh siswa.",
      "memenangkan olimpiade FLS2N dan olimpiade kimia tingkat kabupaten.",
      "menjadi siswa yang ditawarkan untuk masuk ke berbagai kampus ternama diindonesia. ",
    ],
  },
  {
    title: "Kuliah",
    company_name: "UNAMA",
    icon: kuliah,
    iconBg: "#E6DEDD",
    date: "Juli 2019 - Sekarang",
    points: [
      "aktif dalam segala organisasi di UNAMA termasuk organisasi vidiografi dan multimedia.",
      "mendapatkan IPK 3.9.",
      "Menguasai .NET Development, javascript full develop for frontend(React, nextjs) dan backend (nodejs).",
      "Menguasai Sistem oprasi Windows dan Kali Linux.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "gilakk sheesshhh, keren pam, tapi gak sekeren valo. enak mabar valo gass oyy ",
    name: "Dinda Putri Ramadani",
    designation: "Student",
    company: "Unama",
    image: dinda,
  },
  {
    testimonial:
      "Woy manusia koding, sudahi lah koding mu, mari bantai land of dawn bersamaku .",
    name: "Praditya Oktanza DW",
    designation: "Student",
    company: "Unama",
    image: adit,
  },
  {
    testimonial:
      "mantaap pam, keren gg banget. bocah ajaib. kalo gak punya bakat minimal full tekad!",
    name: "Maruli",
    designation: "Student",
    company: "Unama",
    image: maruli,
  },
];

const projects = [
  {
    name: "Darkmode Portofolio",
    description:
      "projek membuat portofolio yang memiliki latar hijau gelap dan bisa diubah menjadi light atau dark mode sesuai selera, memberikan tampilan yang keren dan futuristik.",
    tags: [
      {
        name: "react + vite",
        color: "blue-text-gradient",
      },
      {
        name: "vanilla js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portoDark,
    source_code_link: "https://pampam01.github.io/darkmode-portofolio/",
  },
  {
    name: "Blue hover mode portofolio",
    description:
      "portofolio berwarna biru dengan efek hover, fade in dan fade out yang smooth dan elegan. memberikan kesan yang sangat mewah",
    tags: [
      {
        name: "vanila js",
        color: "blue-text-gradient",
      },
      {
        name: "vanila css",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: portoBlue,
    source_code_link: "https://pampam01.github.io/portofolio4/",
  },
  {
    name: "Purple Portofolio",
    description:
      "projek portofolio pertama saya dengan tampilan sederhana. warna utama berupa campuran putih dan ungu. memberikan efek kesederhanaan yang kuat",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript / typescript",
        color: "pink-text-gradient",
      },
    ],
    image: portoPurple,
    source_code_link: "https://pampam01.github.io/portofolio3/",
  },
];

export { services, technologies, experiences, testimonials, projects };
