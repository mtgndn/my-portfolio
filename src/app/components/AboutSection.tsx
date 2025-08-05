'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Profil Fotoğrafı */}
      <Image
        src="/profile.JPEG"
        alt="Metehan Günaydın"
        width={128}
        height={128}
        className="rounded-full mx-auto mb-6 shadow-md"
      />

      <h2 className="text-3xl font-bold mb-6">Hakkımda</h2>

      <p className="text-muted-foreground text-lg leading-relaxed">
        Merhaba! Ben <span className="font-semibold">Metehan Günaydın</span>, İzmir’de yaşayan bir yazılım geliştirici ve
        <span className="font-semibold"> siber güvenlik</span> meraklısıyım.
        Mehmet Akif Ersoy Üniversitesi'nde eğitimime devam ediyorum.
      </p>

      <p className="text-muted-foreground text-lg leading-relaxed mt-4">
        Genellikle <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span> ve <span className="font-semibold">Tailwind CSS </span>
        gibi modern teknolojilerle kullanıcı dostu arayüzler geliştiriyorum. Aynı zamanda
        sistem güvenliği, uygulama testleri ve açık kaynak projelerle ilgileniyorum.
      </p>

      <p className="text-muted-foreground text-lg leading-relaxed mt-4">
        Takım çalışmasına yatkınım, sürekli öğrenmeye açığım ve projelerimi özenle geliştiririm. Arkadaşlarımla beraber CodeLiq adında bi girişime başlamış bulunmaktayız ve bununla insanlara hizmet ediyoruz.
      </p>

      {/* Eğitim ve Diğer Bilgiler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-left">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-sm">
          🎓 <span className="font-semibold">Mehmet Akif Ersoy Üniversitesi</span><br />
          Bilişim Sistemleri Ve Teknolojileri
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-sm">
          📍 <span className="font-semibold">İzmir, Türkiye</span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-sm">
          🧠 <span className="font-semibold">Siber Güvenlik</span> & <span className="font-semibold">Web Geliştirme</span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-sm">
          🧑‍💻 <span className="font-semibold">Takım Çalışması</span> & <span className="font-semibold">Proje Yönetimi</span>
        </div>
      </div>

	  {/* CV İndir Butonu */}
      <a
        href="/Metehan_Gunaydin_CV_TR_Fixed.pdf"
        download
        className="inline-block mt-10 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition"
      >
        CV’mi İndir
      </a>

      {/* Kullandığın Teknolojiler */}
      <h3 className="text-xl font-semibold mt-12 mb-4">Kullandığım Teknolojiler</h3>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
        <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">React</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Next.js</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Tailwind CSS</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">ShadCN UI</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">TypeScript</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Git</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Linux</span>
      </div>

      
    </motion.section>
  );
}
