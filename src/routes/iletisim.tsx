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

function IletisimPage() {
  const [fields, setFields] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})

  const isValidTurkishMobile = (phone: string) => {
    if (!/^\d+$/.test(phone)) return false
    if (phone.length !== 10 && phone.length !== 11) return false
    if (phone.length === 11) return phone.startsWith('05')
    return phone.startsWith('5')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    if (name === 'phone') {
      const digitsOnly = value.replace(/\s+/g, '').replace(/\D/g, '')
      setFields({ ...fields, phone: digitsOnly })
    } else {
      setFields({ ...fields, [name]: value })
    }
    if (errors[name as 'name' | 'phone']) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const name = fields.name.trim()
    const phone = fields.phone.trim()
    const message = fields.message.trim()
    const nextErrors: { name?: string; phone?: string } = {}

    if (!name) nextErrors.name = 'Ad Soyad alanı zorunludur.'
    if (!phone || !isValidTurkishMobile(phone)) nextErrors.phone = 'Geçerli bir telefon numarası giriniz'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    const whatsappMessage =
      `Merhaba, keşif için bilgi bırakıyorum.\n` +
      `İsim: ${name}\n` +
      `Telefon: ${phone}\n` +
      (message ? `Mesaj: ${message}` : 'Mesaj: -')

    const whatsappUrl = `https://wa.me/905309264830?text=${encodeURIComponent(whatsappMessage)}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      window.location.href = whatsappUrl
    }, 150)
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
                <h2 className="text-2xl font-bold text-[#1A2E4A] mb-2">WhatsApp ile Hızlı Keşif Talebi</h2>
                <p className="text-gray-500 text-sm mb-6">Ad Soyad ve telefon bilginizi girin, sizi doğrudan WhatsApp ekranına yönlendirelim.</p>

                <form onSubmit={handleSubmit} noValidate>
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
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
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
                      {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                    </div>
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
                    className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-base hover:bg-green-600 transition-colors"
                  >
                    💬 WhatsApp ile Gönder
                  </button>
                </form>
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
