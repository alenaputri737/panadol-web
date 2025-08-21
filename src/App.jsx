import { useState } from "react";
import fotoAlena from "./assets/alenn.jpg";
import "./App.css";

function App() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = {
    "HTML": "HTML (HyperText Markup Language) adalah bahasa dasar untuk membuat struktur halaman web.",
    "CSS": "CSS (Cascading Style Sheets) digunakan untuk mengatur tampilan halaman, seperti warna, layout, dan font.",
    "JavaScript": "JavaScript adalah bahasa pemrograman untuk membuat website lebih interaktif.",
    "React JS": "React adalah library JavaScript untuk membuat UI modern dan cepat."
  };

  return (
    <div className="container">
      <header>
        <img src={fotoAlena} alt="Alena" className="profile-pic" />
        <h1>alennnaaaaaa_leaaaa</h1>
        <p className="tagline"> Pelajar SMKN 8 MALANG | Belajar React 🚀</p>
      </header>

      <section className="about">
        <h2>Tentang Saya</h2>
        <p>
          Halo gaaiissssssss, akuu alenaaaa. aku sedang belajar membuat website portofolio dengan
          React JS. Saya suka belajar hal baru dan ingin jadi developer hebat ✨
        </p>
      </section>
      <section>
        <section>
        <h2>📚 Pendidikan</h2>
        <ul>
          <li>SMK ... (SMKN 8 MALANG)</li>
          <li>Jurusan RPL</li>
        </ul>
      </section>

      <section>
        <h2>💻 Keahlian</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React</li>
          <li>Database dasar</li>
        </ul>
      </section>
    <section>
        <h2>📚 Pendidikan</h2>
        <ul>
          <li>SMK ... (SMKN 8 MALANG)</li>
          <li>Jurusan RPL</li>
        </ul>
      </section>

      <section>
        <h2>💻 Keahlian</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React</li>
          <li>Database dasar</li>
        </ul>
      </section>

      </section>

      <section className="skills">
        <h2>Kemampuan</h2>
        <ul>
          {Object.keys(skills).map((skill) => (
            <li 
              key={skill} 
              onClick={() => setSelectedSkill(skill)} 
              className="skill-item"
            >
              {skill}
            </li>
          ))}
        </ul>

        {/* Tampilkan penjelasan skill yang dipilih */}
        {selectedSkill && (
          <div className="skill-detail">
            <h3>{selectedSkill}</h3>
            <p>{skills[selectedSkill]}</p>
          </div>
        )}
      </section>

      <section className="contact">
        <h2>Kontak</h2>
        <div className="buttons">
          <a href="mailto:alenapu433@gmail.com" className="btn">📧 Email</a>
          <a href="https://www.instagram.com/alena_leaaa?igsh=ZDZ5YWdyNGliNXJw" target="_blank" className="btn">📷 Instagram</a>
          <a href="https://wa.me/628123456789" target="_blank" className="btn">💬 WhatsApp</a>
        </div>
      </section>
    </div>
  );
}

export default App;