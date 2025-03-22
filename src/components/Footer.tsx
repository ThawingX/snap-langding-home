import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/snapsnap_ai',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/snapsnap_ai',
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <a href="#" className="text-2xl font-bold text-white">
              Snap Snap
            </a>
            <p className="text-gray-400 text-sm">
              探索AI摄影的无限可能，让每一张照片都焕发独特魅力。
            </p>
            {/* <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <ArrowTopRightOnSquareIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div> */}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">功能</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="#features" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    AI构图指导
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    智能后期处理
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">关于</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="#team" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    团队介绍
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    联系我们
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} Snap Snap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}