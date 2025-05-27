/* eslint-disable prettier/prettier */
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { BsDiscord } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
import { HiMail, HiSparkles } from 'react-icons/hi'
import { useRouter } from 'next/router'

const Contact: FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en'
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactMethods = [
    {
      id: 'facebook',
      icon: AiFillFacebook,
      iconSize: 32,
      title: 'Facebook',
      description: t ? 'Connect with me on Facebook' : 'Facebookでつながりましょう',
      link: 'https://www.facebook.com/svyatoslav.petrov.composer',
      linkText: 'Svyatoslav Petrov',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20',
      hoverGradient: 'from-blue-500/20 to-indigo-600/20',
      iconBg: 'bg-blue-500',
      textColor: 'text-blue-600 dark:text-blue-400',
      hoverTextColor: 'hover:text-blue-700 dark:hover:text-blue-300',
      delay: 'delay-100',
    },
    {
      id: 'discord',
      icon: BsDiscord,
      iconSize: 28,
      title: 'Discord',
      description: t ? 'Chat with me on Discord' : 'Discordでチャットしましょう',
      link: 'https://discord.com/users/9780',
      linkText: 'Saint Slav#9780',
      gradient: 'from-indigo-500 to-purple-600',
      bgGradient: 'from-indigo-50 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20',
      hoverGradient: 'from-indigo-500/20 to-purple-600/20',
      iconBg: 'bg-indigo-500',
      textColor: 'text-indigo-600 dark:text-indigo-400',
      hoverTextColor: 'hover:text-indigo-700 dark:hover:text-indigo-300',
      delay: 'delay-200',
    },
    {
      id: 'email',
      icon: HiMail,
      iconSize: 32,
      title: t ? 'Email' : 'メール',
      description: t ? 'Send me an email directly' : 'メールで直接お問い合わせください',
      link: 'mailto:magicoctopusmusic@gmail.com',
      linkText: 'magicoctopusmusic@gmail.com',
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20',
      hoverGradient: 'from-emerald-500/20 to-teal-600/20',
      iconBg: 'bg-emerald-500',
      textColor: 'text-emerald-600 dark:text-emerald-400',
      hoverTextColor: 'hover:text-emerald-700 dark:hover:text-emerald-300',
      delay: 'delay-300',
    },
  ]

  return (
    <div className="relative mx-auto max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/5 to-pink-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50">
            <HiSparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {t ? 'Get in Touch' : 'お問い合わせ'}
            </span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent sm:text-5xl lg:text-6xl animate-pulse">
            {t ? "Let's Connect" : 'つながりましょう'}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t
              ? "Ready to collaborate? Choose your preferred way to reach out and let's create something amazing together."
              : 'コラボレーションの準備はできていますか？お好みの方法でご連絡いただき、一緒に素晴らしいものを作りましょう。'}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <div
                key={method.id}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${
                  method.bgGradient
                } backdrop-blur-sm border-2 border-white/20 dark:border-gray-700/50 hover:border-white/40 dark:hover:border-gray-600/70 p-6 sm:p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-${
                  method.id === 'facebook' ? 'blue' : method.id === 'discord' ? 'indigo' : 'emerald'
                }-500/25 dark:hover:shadow-${
                  method.id === 'facebook' ? 'blue' : method.id === 'discord' ? 'indigo' : 'emerald'
                }-400/25 cursor-pointer transform ${
                  isVisible
                    ? `opacity-100 translate-y-0 ${method.delay}`
                    : 'opacity-0 translate-y-10'
                } active:scale-[0.98] select-none`}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => window.open(method.link, '_blank', 'noopener,noreferrer')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    window.open(method.link, '_blank', 'noopener,noreferrer')
                  }
                }}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both',
                }}
              >
                {/* Animated Background Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.hoverGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                ></div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full ${method.iconBg} opacity-20 group-hover:w-96 group-hover:h-96 transition-all duration-700 ease-out`}
                  ></div>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-white/30 rounded-full animate-ping`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 10}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '3s',
                      }}
                    ></div>
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Icon with enhanced animation */}
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${method.iconBg} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl`}
                  >
                    <IconComponent
                      size={method.iconSize}
                      className={`transition-all duration-300 ${
                        hoveredCard === method.id ? 'animate-bounce' : ''
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    {method.title}
                  </h3>
                  <p
                    className={`mb-4 text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 ${
                      method.id === 'email' ? 'mb-6' : ''
                    }`}
                  >
                    {method.description}
                  </p>

                  {/* Enhanced Contact Info */}
                  <div className={`${method.id === 'email' ? 'space-y-3' : 'space-y-2'}`}>
                    <div
                      className={`inline-flex ${
                        method.id === 'email'
                          ? 'flex-col items-start'
                          : 'items-center justify-between'
                      } gap-2 w-full`}
                    >
                      <span
                        className={`relative ${
                          method.textColor
                        } font-semibold transition-all duration-300 ${method.hoverTextColor} ${
                          method.id === 'email'
                            ? 'text-sm leading-tight break-words w-full'
                            : 'text-base'
                        }`}
                      >
                        {method.linkText}
                        <span
                          className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
                        ></span>
                      </span>
                      <div
                        className={`flex items-center gap-2 ${
                          method.id === 'email' ? 'self-end mt-2' : ''
                        }`}
                      >
                        <span
                          className={`text-xs opacity-70 transition-all duration-300 group-hover:opacity-100 ${method.textColor}`}
                        >
                          {method.id === 'email'
                            ? t
                              ? 'Click to send email'
                              : 'クリックしてメール送信'
                            : method.id === 'facebook'
                            ? t
                              ? 'Visit profile'
                              : 'プロフィールを見る'
                            : t
                            ? 'Start chatting'
                            : 'チャットを開始'}
                        </span>
                        <svg
                          className={`h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 flex-shrink-0 ${
                            method.textColor
                          } ${hoveredCard === method.id ? 'animate-pulse' : ''}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="flex items-center gap-2 mt-3">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          method.id === 'email'
                            ? 'bg-green-500'
                            : method.id === 'facebook'
                            ? 'bg-blue-500'
                            : 'bg-indigo-500'
                        } animate-pulse`}
                      ></div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {method.id === 'email'
                          ? t
                            ? 'Usually responds within hours'
                            : '通常数時間以内に返信'
                          : method.id === 'facebook'
                          ? t
                            ? 'Active on Facebook'
                            : 'Facebookでアクティブ'
                          : t
                          ? 'Available on Discord'
                          : 'Discordで利用可能'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-8 py-4 text-sm text-gray-600 dark:text-gray-300 shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="relative">
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
              <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping"></div>
            </div>
            <span className="font-medium">
              {t ? "I'll get back to you within 24 hours" : '24時間以内にご返信いたします'}
            </span>
            <HiSparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
