import { Helmet } from 'react-helmet-async'
import Hero from './components/Hero'
import Features from './components/Features'
import Team from './components/Team'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Helmet>
        <title>Snap Snap - 探索AI摄影的无限可能</title>
        <meta name="description" content="Snap Snap是您的AI摄影助手，为摄影师和创作者提供智能工具集，让创作更简单、更有趣。探索AI辅助摄影的无限可能。" />
        <meta name="keywords" content="AI摄影,人工智能摄影,智能图像处理,摄影工具,AI图像编辑,创意摄影,数字摄影,摄影技术" />
      </Helmet>

      <div className="relative overflow-hidden">
        <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <nav className="container flex h-16 items-center justify-between">
            <div className="flex lg:flex-1">
              <a href="#" className="m-1.5 p-1.5 text-2xl font-bold text-primary-600">
                Snap Snap
              </a>
            </div>
            <div className="flex gap-x-6">
              <a href="#features" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600">
                特性
              </a>
              <a href="#team" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600">
                团队
              </a>
            </div>
            <div className="flex flex-1 justify-end">
              {/* <a href="#" className="btn btn-primary">
                开始使用
              </a> */}
            </div>
          </nav>
        </header>

        <main>
          <Hero />
          <Features />
          <Team />
        </main>

        <Footer />
      </div>
    </>
  )
}