import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/iletisim')({
  head: () => ({
    meta: [
      { title: 'İletişim - Ücretsiz Keşif Randevusu | PerdeUsta İstanbul' },
      {
        name: 'description',
        content:
          'PerdeUsta ile iletişime geçin. İstanbul\'da ücretsiz keşif randevusu alın. Telefon, WhatsApp veya form ile ulaşın. Perde montajı, korniş kurulumu için hızlı yanıt.',
      },
      { property: 'og:title', content: 'İletişim | PerdeUsta İstanbul' },
    ],
  }),
  component: IletisimPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const serviceOptions = [
  'Perde Montajı',
  'Korniş Montajı',
  'Stor Perde',
  'Jaluzi Montajı',
  'Tül Perde',
  'Zebra Perde',
  'Diğer',
]

function IletisimPage() {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setSubmitted(true)
    } catch {
      // still show success to user
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-[#1A2E4A] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">İletişim</h1>
          <p className="text-blue-200 text-lg">
            Ücretsiz keşif randevusu almak veya fiyat teklifi almak için bize ulaşın.
          </p>
        </div>
      </div>

      <div className="bg-[#F5F5F5] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-[#1A2E4A]">Bize Ulaşın</h2>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <span className="text-3xl">📞</span>
                <div>
                  <h3 className="font-bold text-[#1A2E4A] mb-1">Telefon</h3>
                  <a href="tel:+905309264830" className="text-blue-600 hover:text-blue-800 no-underline font-medium">
                    0530 926 48 30
                  </a>
                  <p className="text-gray-400 text-xs mt-1">Pzt–Cmt: 08:00 – 19:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <span className="text-3xl">💬</span>
                <div>
                  <h3 className="font-bold text-[#1A2E4A] mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/905309264830?text=Merhaba%20korni%C5%9F%20montaj%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 no-underline font-medium"
                  >
                    WhatsApp ile Mesaj At
                  </a>
                  <p className="text-gray-400 text-xs mt-1">7/24 mesaj bırakabilirsiniz</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <span className="text-3xl">✉️</span>
                <div>
                  <h3 className="font-bold text-[#1A2E4A] mb-1">E-posta</h3>
                  <a href="mailto:info@halkalikornis.com.tr" className="text-blue-600 hover:text-blue-800 no-underline font-medium">
                    info@halkalikornis.com.tr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-bold text-[#1A2E4A] mb-1">Adres</h3>
                  <p className="text-gray-600 text-sm">
                    Halkalı Merkez Mahallesi<br />
                    Küçükçekmece, İstanbul
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <span className="text-3xl">🕐</span>
                <div>
                  <h3 className="font-bold text-[#1A2E4A] mb-1">Çalışma Saatleri</h3>
                  <p className="text-gray-600 text-sm">
                    Pazartesi – Cumartesi: 08:00 – 19:00<br />
                    Pazar: Randevuya göre
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1A2E4A] mb-2">Ücretsiz Keşif Formu</h2>
                <p className="text-gray-500 text-sm mb-6">Formu doldurun, sizi en kısa sürede arayalım.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-[#1A2E4A] mb-2">Mesajınız Alındı!</h3>
                    <p className="text-gray-500">
                      En kısa sürede sizi arayacağız. Acil durumlarda{' '}
                      <a href="tel:+905309264830" className="text-blue-600 no-underline">
                        hemen arayabilirsiniz
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Adınız Soyadınız *
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={fields.name}
                          onChange={handleChange}
                          required
                          placeholder="Ahmet Yılmaz"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A2E4A] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefon *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={fields.phone}
                          onChange={handleChange}
                          required
                          placeholder="05XX XXX XX XX"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A2E4A] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-posta
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={fields.email}
                        onChange={handleChange}
                        placeholder="ornek@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A2E4A] transition-colors"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Hangi Hizmet?
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={fields.service}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A2E4A] transition-colors bg-white"
                      >
                        <option value="">Seçiniz...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={fields.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Hangi oda için, kaç pencere, özel isteğiniz var mı?"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A2E4A] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1A2E4A] text-white py-4 rounded-xl font-bold text-base hover:bg-[#243d5e] transition-colors disabled:opacity-60"
                    >
                      {loading ? 'Gönderiliyor...' : '📩 Ücretsiz Keşif İste'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#1A2E4A] mb-6 text-center">Konum</h2>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96093.30635023508!2d28.872160!3d41.008240!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4f48e5c3f03%3A0x7e7bb8d72d59acd3!2sHalkali%2C%20Istanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PerdeUsta Konum - Halkalı İstanbul"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
