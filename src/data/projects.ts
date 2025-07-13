import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Experimental 3D Game (Unity Essentials Enhanced)",
    category: "Game Development",
    description: `Game berbasis Unity dengan dua level berbeda:
🧩 Level 1: Eksplorasi ruangan interaktif di dalam rumah.
🌄 Level 2: Open world terrain buatan sendiri yang menghadirkan tantangan navigasi di area terbuka.

Bagian kredit dibuat unik menggunakan robot karakter 3D yang dapat digerakkan, menggantikan teks statis biasa. Game ini dikembangkan dari dasar pelatihan Unity Essentials, namun ditingkatkan dengan sentuhan personal dan kreativitas sendiri.`,
    image: "/images/projects/unity-game.jpg",
    tech: ["Unity", "C#", "Terrain Design", "3D Animation", "WebGL"],
    liveLink: "https://play.unity.com/en/games/7a0eb018-398c-4c4e-830f-70bf6fff0717/kudil-testing-game",
    githubLink: "",
    status: "Live"
  },
{
  id: 2,
  title: "Video Edukasi Jaringan Komputer",
  category: "Content Creation",
  description:
    "Video edukatif yang membahas konsep dasar jaringan komputer, seperti jenis kabel (straight & cross), perbedaan kabel CAT5 dan CAT6, serta penggunaan alat jaringan seperti LAN tester, crimping tool, dan konektor RJ45. Saya berperan sebagai presenter, praktisi, sekaligus editor video.",
  image: "/images/projects/network-video2.png", // ganti sesuai gambar preview video lo
  tech: [
    "Video Editing",
    "On-Camera Presentation",
    "Networking Tools",
    "LAN Cable Crimping",
    "Educational Content"
  ],
  liveLink: "https://www.youtube.com/watch?v=OUT-jWGMqS4",
  githubLink: "", // kosongin aja kalau ga ada
  status: "Live"
},
{
  id: 4,
  title: "Smart Aquaculture Monitoring System",
  category: "IoT Development",
  description:
    `Project monitoring akuakultur berbasis IoT yang sedang dikembangkan dengan ESP32 DevKit V1 dan lima sensor utama: pH, suhu air, dissolved oxygen, turbidity, dan ammonia. Data dikirim secara real-time ke dashboard interaktif berbasis Next.js, dengan visualisasi data dan kontrol otomatis. Ditujukan untuk membantu petani ikan memantau kualitas air secara efisien.

📌 *Gambar perangkat merupakan ilustrasi AI, dokumentasi asli akan segera ditambahkan*`,
  image: "/images/projects/iot-aquaculture.png",
  tech: ["ESP32 DevKit V1", "Next.js", "TypeScript", "Arduino IDE", "MongoDB", "Socket.io"],
  liveLink: "#",
  githubLink: "https://github.com//aquaculture-iot",
  status: "In Development"
},
{
  id: 3,
  title: "Aplikasi Monitoring & Tagihan Air Warga",
  category: "Fullstack Development",
  description:
    "Aplikasi berbasis web yang membantu pengelola air (seperti RT/RW atau desa) dalam mencatat dan mengelola tagihan air warga. Sistem ini dilengkapi fitur login, CRUD data pelanggan, pencatatan meteran, notifikasi tagihan via email, dan dashboard admin. Backend dibangun dengan Laravel Breeze dan Filament, serta notifikasi email menggunakan Laravel Notification via SMTP.",
  image: "/images/projects/tagihan-air.jpg", // tinggal siapkan gambarnya
  tech: [
    "Laravel Breeze",
    "Laravel Filament",
    "Laravel Notification",
    "SMTP Email",
    "MySQL",
    "Tailwind CSS"
  ],
  liveLink: "https://youtu.be/IdaThKndyjk?si=toR7ksYHMaf8Pkgv",
  githubLink: "https://github.com//tagihan-air",
  status: "In Development"
}
];