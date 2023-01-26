/* eslint-disable prettier/prettier */
import type { FC } from 'react'
import React, { useRef } from 'react'
import { BsDiscord } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
import emailjs from 'emailjs-com'
import { useRouter } from 'next/router'

const Contact: FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en'
  const form = useRef()
  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_hqolve5',
      'template_ehwmq18',
      form?.current as any,
      'Po6Tun4HpyzUbRmf0'
    )
    e.target.reset()
  }

  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
            {t ? 'Contact me' : ' お問い合わせはこちら'}
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            {t ? "We'd love to talk about how we can help you." : ' 是非、ご相談ください。'}
          </p>
        </div>

        <div className="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col rounded-xl border p-4 dark:border-gray-700 sm:p-6 lg:p-8">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
              {t ? 'Fill in the Form' : ' フォームに記入する'}
            </h2>

            <form ref={form as any} onSubmit={sendEmail}>
              <div className="grid gap-3">
                <div>
                  <label htmlFor="name" className="sr-only">
                    {t ? 'Your Full Name' : ' お名前'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border border-gray-300  py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    placeholder={t ? 'Your Full Name' : ' お名前'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    {t ? 'Email' : ' 電子メール'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border border-gray-300  py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    placeholder={t ? 'Email' : ' 電子メール'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    {t ? 'Details' : ' 詳細情報'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border border-gray-300  py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    placeholder={t ? 'Details' : ' 詳細情報'}
                  />
                </div>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-blue-600 py-3 px-4 text-center text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 lg:text-base"
                >
                  {t ? 'Send inquiry' : ' お問い合わせを送信'}
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  {t
                    ? "We'll get back to you in 1-2 business days."
                    : ' 1-2営業日以内にご返信いたします。'}
                </p>
              </div>
            </form>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            <div className="flex items-center gap-x-7 py-6">
              <AiFillFacebook
                className="text-gray-800 dark:text-gray-200"
                style={{ width: '24px', height: '24px' }}
              />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Facebook</h3>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 underline hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="https://www.facebook.com/svyatoslav.petrov.composer"
                >
                  Svyatoslav Petrov
                  <svg
                    className="h-2.5 w-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className=" flex items-center gap-x-7 py-6">
              <BsDiscord
                className="text-gray-800 dark:text-gray-200"
                style={{ width: '24px', height: '24px' }}
              />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Discord</h3>

                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 underline hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="https://discord.com/users/9780"
                >
                  Saint Slav#9780
                  <svg
                    className="h-2.5 w-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-x-7 py-6">
              <svg
                className="mt-1.5 h-6 w-6 flex-shrink-0 text-gray-800 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {t ? 'Contact us by email' : 'Eメールでのお問い合わせ'}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {t
                    ? 'If you wish to write us an email instead, please use'
                    : 'メールでのお問い合わせはこちらからどうぞ。'}
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 underline hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="mailto:magicoctopusmusic@gmail.com"
                >
                  magicoctopusmusic@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
